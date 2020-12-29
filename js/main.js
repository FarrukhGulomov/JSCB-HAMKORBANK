$(document).ready(function(){



    $('.header-menu').click(function(){
       
        if ($('.features-menu').slideUp(200)) {
            true;
        }
       });

    $('.eyes-features').on('click',function(event){
        
       if ($('.features-menu').slideDown(200)) {
           false;
       }
       
       
    }); 

    


  //  create click fees calculator function 

    $('#btnCalc').click(function(event){
        event.preventDefault(); 
   $(this).children('ul').slideToggle('d-none');
        
    });


    $('.subMenu ').on('mouseenter',function(){
     
       /* if($(this).children().hasClass('menu-fixed')){
            false;
        } else{

       $(this).append('<div class="menu-fixed"></div>'); 
         
        }*/
        
        

    
        
    
     
        
    });
   
   
    
 


  
  
   
   
});
    