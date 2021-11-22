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