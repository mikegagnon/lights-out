
var numRows = 4
var numCols = 5

var matrix = [
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true]
]

for (var row = 0; row < numRows; row++) {
    for (var col = 0; col < numCols; col++) {

        var lightStatus = Math.random() < 0.5
        matrix[row][col] = lightStatus

        var lightId = "light-" + row + "-" + col
        if (lightStatus) {
            $("#" + lightId).css("background-color", "pink")
        } else {
            $("#" + lightId).css("background-color", "gray")
        }

    }
}

function lightClick(row, col) {
    console.log(row, col)
}