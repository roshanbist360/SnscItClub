        

    // js dom for opening and closing side nav in mobile
    function openNav(){
          document.getElementById('sideNavv').style.width="320px";
     }

    function closeNav(){
         document.getElementById('sideNavv').style.width="0px";
    }             
  
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
        

        // for events and notices view more and minimize
       function showEventDetail(x){
            document.getElementById('eventDetail'+x).style.display="block";
            document.getElementById('minimize'+x).style.display="block";
            document.getElementById('viewMore'+x).style.display="none";
        }

        function hideEventDetail(x){
            document.getElementById('eventDetail'+x).style.display="none";           
            document.getElementById('viewMore'+x).style.display="block";
            document.getElementById('minimize'+x).style.display="none";
        }
        
          
        











