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

function above(row) {
    if (row == 0) {
        return numRows -1
    } else {
        return row - 1
    }
}

function below(row) {
    if (row == numRows - 1) {
        return 0
    } else {
        return row + 1
    }
}

function left(col) {
    if (col == 0) {
        return numCols -1
    } else {
        return col - 1
    }
}

function right(col) {
    if (col == numCols - 1) {
        return 0
    } else {
        return col + 1
    }
}

function lightSwitch(row, col) {
    matrix[row][col] = !matrix[row][col];
    setLightColor(row, col);
}

function lightClick(row, col) {

    lightSwitch(row, col)
    lightSwitch(above(row), col)
    lightSwitch(below(row), col)
    lightSwitch(row, left(col))
    lightSwitch(row, right(col))

    if (checkWin()) {
        alert("You win!")
    }
}