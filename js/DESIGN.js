$(document).ready(function() {
    $(".button").click(function() {
        var name = $(this).attr("data-filter");
        if(name == "all") {
            $(".img-filter").show("1000");
        }
        else {
            $(".img-filter").not("."+name).hide("200");
            $(".img-filter").filter("."+name).show("200");
        }
        $(this).addClass("active").siblings().removeClass("active");
    });
});