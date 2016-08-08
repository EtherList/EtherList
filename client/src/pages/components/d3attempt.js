function bubbleChart() {
  var width = 500;
  var height = 300;

  var center = { x: width / 2, y: height / 2 };
  var damper = 0.102;
  var svg = null;
  var bubbles = null;
  var nodes = [];

  function charge(d) {
    return -Math.pow(d.radius, 2.0) / 8;
  }

  var force = d3.layout.force()
    .size([width, height])
    .charge(charge)
    .gravity(-0.01)
    .friction(0.9);


  //fix colors later
  var fillColor = d3.scale.ordinal()
    .domain(['low', 'medium', 'high'])
    .range(['#d84b2a', '#beccae', '#7aa25c']);

  var radiusScale = d3.scale.pow()
    .exponent(0.5)
    .range([2, 85]);

  function createNodes(rawData) {
    // Use map() to convert raw data into node data.
    // Checkout http://learnjsdata.com/ for more on
    // working with data.
    var myNodes = rawData.map(function (d) {
      return {
        id: d.id,
        radius: radiusScale( + d.totalPosts),
        group: d.group,
        value: d.totalPosts,
        name: d.name,
        x: Math.random() * 500,
        y: Math.random() * 300
      };
    });

    // sort them to prevent occlusion of smaller nodes.
    myNodes.sort(function (a, b) { return b.value - a.value; });
      return myNodes;
    }

    var chart = function chart(selector, rawData) {
        // Use the max total_amount in the data as the max in the scale's domain
        // note we have to ensure the total_amount is a number by converting it
        // with `+`.
        var maxAmount = d3.max(rawData, function (d) { return +d.totalPosts; });
        radiusScale.domain([0, maxPosts]);

        nodes = createNodes(rawData);
        // Set the force's nodes to our newly created nodes array.
        force.nodes(nodes);

        // Create a SVG element inside the provided selector
        // with desired size.
        svg = d3.select(selector)
          .append('svg')
          .attr('width', width)
          .attr('height', height);

        // Bind nodes data to what will become DOM elements to represent them.
        bubbles = svg.selectAll('.bubble')
          .data(nodes, function (d) { return d.id; });

        // Create new circle elements each with class `bubble`.
        // There will be one circle.bubble for each object in the nodes array.
        // Initially, their radius (r attribute) will be 0.
        bubbles.enter().append('circle')
          .classed('bubble', true)
          .attr('r', 0)
          .attr('fill', function (d) { return fillColor(d.group); })
          .attr('stroke', function (d) { return d3.rgb(fillColor(d.group)).darker(); })
          .attr('stroke-width', 2)
          .on('mouseover', showDetail)
          .on('mouseout', hideDetail);

        // Fancy transition to make bubbles appear, ending with the
        // correct radius
        bubbles.transition()
          .duration(2000)
          .attr('r', function (d) { return d.radius; });

        // Set initial layout to single group.
        groupBubbles();
      };

      function groupBubbles() {

        force.on('tick', function (e) {
          bubbles.each(moveToCenter(e.alpha))
            .attr('cx', function (d) { return d.x; })
            .attr('cy', function (d) { return d.y; });
        });

        force.start();
      }

      function moveToCenter(alpha) {
        return function (d) {
          d.x = d.x + (center.x - d.x) * damper * alpha;
          d.y = d.y + (center.y - d.y) * damper * alpha;
        };
      }

      function showDetail(d) {
        d3.select(this).attr('stroke', 'black');
      }

      function hideDetail(d) {
        // reset outline
        d3.select(this)
          .attr('stroke', d3.rgb(fillColor(d.group)).darker());
      }

       return chart;
}

var myBubbleChart = bubbleChart();
function display(error, data) {
  if (error) {
    console.log(error);
  }

  myBubbleChart('#vis', data);
}
d3.csv('data/sample.csv', display);