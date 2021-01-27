
$(".navbars").click(() => {

    if($(".links").hasClass("clicked")){
        console.log("already clicked")
        $(".links").css("transform", "translateX(100%)");
        $(".links").removeClass("clicked");
        $(this).css("background-color", "#ffffff")
    }else{
        $(".links").css("transform", "translateX(0%)");
        $(".links").addClass("clicked");
    }




})