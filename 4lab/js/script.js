// 2. punktas
$(document).ready(function() {
    $("#popup-error").hide();
    $("#popup-error-number").hide();
    $("#popup-error-date").hide();
    $("#submit").hide();
})

// 1. punktas
function validateForm() {
    if (checkIsEmpty()) {
        document.getElementById("popup-error").setAttribute("style", "display: visible !important; color: red;");
    }
    if (checkIsNumber()) {
        document.getElementById("popup-error-number").setAttribute("style", "display: visible !important; color: red;");
    }
    if (!checkIsDateValid()) {
        document.getElementById("popup-error-date").setAttribute("style", "display: visible !important; color: red;");
    }
}

function checkIsEmpty() {
    return document.getElementById("name").value.length == 0;
}

function checkIsNumber() {
    return document.getElementById("gimMetai").value.length == 0 || isNaN(document.getElementById("gimMetai").value);
}

function checkIsDateValid() {
    var date = new Date(document.getElementById("data").value);
    if(!isNaN(date.getMonth())) {
        return true;
    }
    return false;
}

// 2. punktas
$(document).ready(function(){
    $("#check").click(function(){
        $("#submit").toggle();
    });
});

// 3. punktas
// 3.1.
$(document).ready(function() {
    $("#changeText").click(function() {
        $(".textForChange").text("Lorem ipsum");
    });
});
// 3.2.
$(document).ready(function() {
    $("#changeColor").click(function() {
        $(".textForChange").css({"color": "red"});
    });
});
// 3.3.
$(document).ready(function() {
    $("#deleteParagraph").click(function() {
        var elemToRemove = $("#para").val();
        $("." + elemToRemove).remove();
    });
});
// 3.4.
$(document).ready(function() {
    $("#appendParagraph").click(function() {
        $("div.paragraphs").append(
            '<p>' + $("#paraTxt").val() + '</p>'
        )
    });
});

// 4.

var responseId = "";

$("#submit").click(function () {
    var jsonData = {
        "name": $("#name").val(),
        "lastName": $("#lastName").val(),
        "age": $("#gimMetai").val(),
        "email": $("#email").val(),
        "agreed": true
    }

    $.ajax({ 
        type:"POST",
        url:"https://jsonblob.com/api/jsonBlob/",
        data: JSON.stringify(jsonData), 
        contentType: 'application/json',
        success: function(res) {
            $(".table-for-info").append(
                '<tr>' + 
                '<td>' + res.name + " " + res.lastName + '</td>' 
                + '<td>' + res.age + '</td>'
                + '<td>' + res.email + '</td>'
                + '<td>' + res.agreed + '</td>' 
                + '</tr>'
            )
            console.log(res);
            console.log("Added");
        }.bind(this),
        error: function(xhr, status, err) {
            console.error(xhr, status, err.toString());
        }.bind(this)
    }); 
});