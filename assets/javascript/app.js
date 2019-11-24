$(".about-but").on("click",function(event){
    $(".portfolio").addClass("hidden");
    $(".about-but").addClass("font-change");
    $(".about-me").removeClass("hidden");
    $(".portfolio-but").removeClass("font-change");
    

});

$(".portfolio-but").on("click",function(event){
    $(".portfolio").removeClass("hidden");
    $(".about-but").removeClass("font-change");
    $(".portfolio-but").addClass("font-change");
    $(".about-me").addClass("hidden");
    

});
