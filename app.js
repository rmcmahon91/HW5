var workHours = [9, 10, 12, 13, 14, 15, 16, 17]

var getCurrentHour = moment().hour()

function displayPlanner() {

    for (let index = 0; index < workHours.length; index++) {
        var row = $("<div class='row'>")
        var column1 = $("<div class='col-sm-2'>")
        var div = $("<div class= 'text-right'>")

        div.html(workHours[index] + ":00 am")
        if (workHours[index] >= 12) {
            div.html(workHours[index] + ":00 pm")
            if (workHours[index] >= 13) {
                var standardHour = workHours[index] - 12
                div.html(standardHour + ":00 pm")
            }
        }


        column1.append(div)
        var column2 = $("<div class='col-sm-8'>")

        var textArea = $("<textarea class='form-control bg-success'>")
        if (workHours[index] === getCurrentHour) {
            textArea = $("<textarea class='form-control bg-danger'>")
        }
        if (getCurrentHour > workHours[index]) {
            textArea = $("<textarea class='form-control bg-secondary'>")
        }
        var getValue = localStorage.getItem("textarea" + index)
        textArea.text(getValue)
        textArea.attr("id", "textarea" + index)
        column2.append(textArea)

        var column3 = $("<div class='col-sm-2'>")
        var button = $("<button>")
        button.text("Save")
        button.attr("class", "imageButton  btn btn-primary")
        column3.append(button)
        row.append(column1, column2, column3)

        $("#showPlanner").append(row)
    }

}

displayPlanner()

$(".imageButton").on("click", function () {

    for (let index = 0; index < workHours.length; index++) {
        var getValue = $("#textarea" + index).val()

        localStorage.setItem("textarea" + index, getValue)

    }


})