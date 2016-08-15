//algorithm for generating circle positions so that they're not aligned, but not fully random either (for better user experience)
export function generateCoords(catNum, screenWidth, screenHeight) {

  var circleCenters = [];
  //divide the screen into n rows and m columns (numbers depend on the screen size)
  var numRows = Math.floor(Math.sqrt(catNum));
  var numColumns = catNum / numRows;
  
  var sqWidth = screenWidth / numColumns;
  var sqHeight = screenHeight / numRows;
  //TODO: add dynamic margin based on radius
  var margin = 20;
  
  //in each square (row x, column y)
  //calculate coordinates for category circle
  for (var i = 0; i < numRows; i++) {
    for (var j = 0; j < numColumns; j++) {
      var circleCoords = {};
    //shift circle within each square off center
      circleCoords.x = Math.floor(j * sqWidth + margin + Math.random() * (sqWidth - 2 * margin));
      circleCoords.y = Math.floor(i * sqHeight + margin + Math.random() * (sqHeight - 2 * margin));  
      circleCenters.push(circleCoords);
    }
  }
  return circleCenters;
};
