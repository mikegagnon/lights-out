
var numRows = 4
var numCols = 4

var matrix = [
    [undefined, undefined, undefined, undefined],
    [undefined, undefined, undefined, undefined],
    [undefined, undefined, undefined, undefined],
    [undefined, undefined, undefined, undefined]
]

var solution = [
    [undefined, undefined, undefined, undefined],
    [undefined, undefined, undefined, undefined],
    [undefined, undefined, undefined, undefined],
    [undefined, undefined, undefined, undefined]
]

var showSolution = false

function getLightId(row, col) {
    return "light-" + row + "-" + col
}

for (var row = 0; row < numRows; row++) {
    for (var col = 0; col < numCols; col++) {

        var lightStatus = Math.random() < 0.5
        matrix[row][col] = lightStatus

        var lightId = getLightId(row, col)

        if (lightStatus) {
            $("#" + lightId).css("background-color", "pink")
        } else {
            $("#" + lightId).css("background-color", "gray")
        }

    }
}

if (showSolution) {
    solve();
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

    matrix[row][col] = !matrix[row][col]

    var lightStatus = matrix[row][col]
    var lightId = getLightId(row, col)

    if (lightStatus) {
        $("#" + lightId).css("background-color", "pink")
    } else {
        $("#" + lightId).css("background-color", "gray")
    }

}

function checkWin() {

    var anyLightOn = false

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

    lightSwitch(row, col)
    lightSwitch(above(row), col)
    lightSwitch(below(row), col)
    lightSwitch(row, left(col))
    lightSwitch(row, right(col))

    if (checkWin()) {
        alert("You win!")
    }

    if (showSolution) {
        solve();
    }
}

function solutionSwitch(row, col) {
    solution[row][col] = !solution[row][col]
}

function solutionClick(row, col) {
    solutionSwitch(row, col)
    solutionSwitch(above(row), col)
    solutionSwitch(below(row), col)
    solutionSwitch(row, left(col))
    solutionSwitch(row, right(col))
}

function solve() {

    solution = [
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false]
    ]

    for (var row = 0; row < numRows; row++) {
        for (var col = 0; col < numCols; col++) {
            if (matrix[row][col]) {
                solutionClick(row, col)
            }
        }
    }

    for (var row = 0; row < numRows; row++) {
        for (var col = 0; col < numCols; col++) {
            var lightId = getLightId(row, col)

            if (solution[row][col]) {
                $("#" + lightId).text("click me")
            } else {
                $("#" + lightId).text("")
            }
        }
    }

}

function hideSolution() {
    for (var row = 0; row < numRows; row++) {
        for (var col = 0; col < numCols; col++) {
            var lightId = getLightId(row, col)
            $("#" + lightId).text("")
        }
    }
}

function showHideSolution() {
    showSolution = !showSolution;

    if (showSolution) {
        solve();
        $("#showHideButton").text("Hide solution")
    } else {
        hideSolution();
        $("#showHideButton").text("Show solution")
    }
}

