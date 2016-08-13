//algorithm for generating circle positions so that they're not aligned, but not fully random either (for better user experience)
export function generateCoords(catNum, screenWidth, screenHeight) {

  var circleCenters = [];
  //divide the screen into n rows and m columns (numbers depend on the screen size)
  var numColumns = Math.floor(Math.sqrt(catNum));
  var numRows = catNum / numColumns;
  
  var sqWidth = screenWidth / numColumns;
  var sqHeight = screenHeight / numRows;
  var d = Math.min(sqWidth, sqHeight);
  
  //in each square (row x, column y)
  //calculate coordinates for category circle
  for (var i = 0; i < numRows; i++) {
    for (var j = 0; j < numColumns; j++) {
      var circleCoords = {};
    //shift circle within each square off center
      circleCoords.x = Math.floor(j * sqWidth  + Math.random() * d);
      circleCoords.y = Math.floor(i * sqHeight + Math.random() * d); 
      circleCenters.push(circleCoords);
    }
  }
  return circleCenters;
};
