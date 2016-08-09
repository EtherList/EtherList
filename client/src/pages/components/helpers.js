//algorithm for generating circle positions so that they're not aligned, but not fully random either (for better user experience)
export function generateCoords(catNum, screenWidth, screenHeight) {
  
  var circleCenters = [];
  var numColumns = Math.floor(Math.sqrt(catNum));
  var numRows = catNum / numColumns;
  
  var sqWidth = screenWidth / numColumns;
  var sqHeight = screenHeight / numRows;
  
  console.log(numRows, numColumns);
  console.log(sqWidth, sqHeight);
  var d = Math.min(sqWidth, sqHeight);
  
  
  for (var i = 0; i < numRows; i++) {
    for (var j = 0; j < numColumns; j++) {
      var circleCoords = {};
    
      circleCoords.x = Math.floor(j * sqWidth  + Math.random() * d);
      circleCoords.y = Math.floor(i * sqHeight + Math.random() * d); 
      circleCenters.push(circleCoords);
    }
  }
  return circleCenters;
}
