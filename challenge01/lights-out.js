var matrix = [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false]
]

function lightClick(row, col) {

    matrix[row][col] = !matrix[row][col]

    var color;

    if (matrix[row][col]) {
        color = "pink"
    } else {
        color = "gray"
    }

    var lightId = "light-" + row + "-" + col;

    $("#" + lightId).css("background-color", color)
}