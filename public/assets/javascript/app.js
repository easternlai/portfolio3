$(document).ready(function() {

    $(".about-but").on("click",function(event){
        $(".about-me").removeClass("hidden");
        $(".portfolio-but").removeClass("font-change");
        $(".testimonial-but").removeClass("font-change");
        $(".about-but").addClass("font-change");
        $(".portfolio").addClass("hidden");
        $(".testimonial").addClass("hidden");


    });

    $(".portfolio-but").on("click",function(event){
        $(".portfolio").removeClass("hidden");
        $(".about-but").removeClass("font-change");
        $(".testimonial-but").removeClass("font-change");
        $(".portfolio-but").addClass("font-change");
        $(".about-me").addClass("hidden");
        $(".testimonial").addClass("hidden");
    });

    $(".testimonial-but").on("click",function(event){
        $(".testimonial").removeClass("hidden");
        $(".portfolio-but").removeClass("font-change");
        $(".about-but").removeClass("font-change");
        $(".testimonial-but").addClass("font-change");
        $(".about-me").addClass("hidden");
        $(".portfolio").addClass("hidden");
    });

    $(".testimonial-submit").on("submit", handleSubmit);

    function handleSubmit(event){
        event.preventDefault();

        var newTestimonial = {
            firstName = $("#name-input").val().trim(),
            body = $("#testimonial-input").val().trim()
        };
        $.post("/api/testimonial", newTestimonial, function(){
            alert("Thank you!");
        });
    }

});

