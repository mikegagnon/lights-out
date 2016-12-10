var numRows = 4
var numCols = 4

var matrix = [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false]
]

for (var row = 0; row < numRows; row++) {
    for (var col = 0; col < numCols; col++) {

        matrix[row][col]  = Math.random() < 0.5;
        
        setLightColor(row, col);
    }
}

function getLightId(row, col) {
    return "#light-" + row + "-" + col
}

function setLightColor(row, col) {

    var lightId = getLightId(row, col)

    if (matrix[row][col] ) {
        $(lightId).css("background-color", "pink")
    } else {
        $(lightId).css("background-color", "gray")
    }
}

function lightClick(row, col) {

    matrix[row][col] = !matrix[row][col];

    setLightColor(row, col);
}