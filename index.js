


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

;(function($, win) {
    $.fn.inViewport = function(cb) {
       return this.each(function(i,el) {
         function visPx(){
           var elH = $(el).outerHeight(),
               H = $(win).height(),
               r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
           return cb.call(el, Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H)));  
         }
         visPx();
         $(win).on("resize scroll", visPx);
       });
    };
  }(jQuery, window));



  $(".text-container").inViewport(function(px) {
    // console.log( px ); // `px` represents the amount of visible height
    if(px > 0) {
      // do this if element enters the viewport // px > 0
      $(this).addClass("animate__animated animate__fadeInRightBig");
    }
  }); // Here you can chain other jQuery methods to your selector



  $(".item-containers").inViewport((px) => {
    if(px > 0){
        let i = 1;
        
        let addAnimation = () =>{
            setTimeout(() => {
                $(".item-containers .item:nth-child(" + i + ")").addClass("animate__animated animate__zoomIn animate__faster").css("opacity", "1")
                console.log(".item-containers .item:nth-child(" + i + ")")
                i++;
                if(i < 6){
                    addAnimation();
                }
            }, 200)
        }

        addAnimation();
        


      console.log("entered")
    }
  });

 

