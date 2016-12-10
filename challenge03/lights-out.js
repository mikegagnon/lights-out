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

function setLightColor(row, col) {

    var color;

    if (matrix[row][col]) {
        color = "pink"
    } else {
        color = "gray"
    }

    var lightId = "#light-" + row + "-" + col;

    $(lightId).css("background-color", color)
}

function checkWin() {

    var anyLightOn = false;

    for (var row = 0; row < numRows; row++) {
        for (var col = 0; col < numCols; col++) {
            if (matrix[row][col]) {
                anyLightOn = true;
            } 
        }
    }

    return !anyLightOn;

}

function lightClick(row, col) {

    matrix[row][col] = !matrix[row][col];

    setLightColor(row, col);

    if (checkWin()) {
        alert("You win!")
    }
}