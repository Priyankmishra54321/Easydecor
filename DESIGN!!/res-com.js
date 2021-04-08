$(document).ready(function() {
    $(".button").click(function() {
        var name = $(this).attr("data-filter");
        if(name == "all") {
            $(".filter").show("1000");
        }
        else {
            $(".filter").not("."+name).hide("200");
            $(".filter").filter("."+name).show("200");
        }
    });
    $(".nav a").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
    });
 });