        

    // js dom for opening and closing side nav in mobile
    function openNav(){
          document.getElementById('sideNavv').style.width="320px";
     }

    function closeNav(){
         document.getElementById('sideNavv').style.width="0px";
    }    


    // jquery     
    $(document).ready(function(){
        //Below js is for well working of go to top button
        $(window).scroll(function(){
           if($(this).scrollTop()>500){
               $('#topButton').fadeIn();
           }
           else{
               $('#topButton').fadeOut(); 
           }
         });

           $("#topButton").click(function(){
           $('html','body').animate({scrollTop:0},400);
        });

        // Testimonials carousel (uses the Owl Carousel library)
         $('.owl-carousel').owlCarousel({
         loop:true,
         margin:10,
         nav:false,
         dots:true,
         autoplay:true,
         autoplaySpeed: 1000,
         autoplayTimeout: 8000,
         number:1,
         responsive:{
         0:{
         items:1
         },
         600:{
         items:1
         },
         1000:{
         items:2
         }
         }
         })

         // <!-- for making text title auto typing -->
          var typed = new Typed('.type', {
          strings: ['ELCOME TO SNSC IT CLUB'],
          typeSpeed: 100,
          backSpeed:100,
          loop:true,
          backDelay: 1500,
          showCursor: false,
          });

    });


        
          
        











