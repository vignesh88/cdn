$(document).ready((function () {
    $("#slow_loading_general").hide(), $("#slow_loading_general").delay(100).fadeIn(1000),
    $("pass_gen").click((function () {
        $("#div1").load("ajax_password_generator.html")
    })), $("geo_ip").click((function () {
        $("#div1").load("ajax_geoip.html")
    })), $("base_64").click((function () {
        $("#div1").load("ajax_base64.html")
    })), $("#pass_gen").click((function () {
        $("#div1").load("ajax_password_generator.html")
    })), $("#geo_ip").click((function () {
        $("#div1").load("ajax_geoip.html")
    })), $("#base_64").click((function () {
        $("#div1").load("ajax_base64.html")
    })), $("#epoch").click((function () {
        $("#div1").load("ajax_epoch.html")
    })), $("#tools_search").on("keyup", (function () {        
        var value = $(this).val().toLowerCase();
        $("#tools_links a").filter((function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        }))
    }))
}));
