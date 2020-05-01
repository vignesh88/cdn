function default_convert() {
    var input_value = document.getElementById("default_input_data").value;
    var input_type = document.getElementById("default_input_type").value;
    var dataString = '&input_value=' + input_value + '&input_type=' + input_type;
    //alert(dataString);
    $.ajax({
        type: "GET",
        url: "/",
        data: dataString,
        success: function (response) {
            var data = response.final;
            document.getElementById("results").value = data;

        }
    });
    return false;


}

function base64_convert() {
    var input_value = document.getElementById("default_input_data").value;
    if (document.getElementById('base64_decode').checked) {
        var input_type = "base64decode";
    } else if (document.getElementById('base64_encode').checked) {
        var input_type = "base64encode";
    }
    

    var dataString = '&input_value=' + input_value + '&input_type=' + input_type;
    //alert(dataString);
    $.ajax({
        type: "GET",
        url: "/base64.html",
        data: dataString,
        success: function (response) {
            var data = response.final;
            document.getElementById("results").value = data;

        }
    });
    return false;


}