        

    // js dom for opening and closing side nav in mobile
    function openNav(){
          document.getElementById('sideNavv').style.width="320px";
     }

    function closeNav(){
         document.getElementById('sideNavv').style.width="0px";
    }    
    

    // jquery     
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
         780:{
         items:2
         },
         1000:{
         items:3
         }
         }
         })          
  
   function getWidth(){
       var width=$(document).width();
       
       if(width<540){
        <!-- for stopping text  auto typing in small devices-->
          var typed = new Typed('.type', {
          strings: ['ELCOME TO SNSC IT CLUB'],
          typeSpeed: 0,
          backSpeed: 0,
          loop: true,
          backDelay: 1500000000000000000000000,  
          showCursor: false,
          });
       }

       if(width>540){
         <!-- for making text title auto typing -->
          var typed = new Typed('.type', {
          strings: ['ELCOME TO SNSC IT CLUB'],
          typeSpeed: 120,
          backSpeed:120,
          loop:true,
          backDelay: 1500,
          showCursor: false,
          });
       }
    }  

        
          
        











