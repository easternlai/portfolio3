# portfolio3

## by Eastern Lai

### Thank you for visiting my profile.

## Technologies used
1. HTML
2. CSS
3. Javascript
4. JQuery
5. github 
6. gitbash


## Code Example

```
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

```