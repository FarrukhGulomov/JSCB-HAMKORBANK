$(document).ready(function(){

var featuresMenu = $('.features-menu');

    

    $('.eyes-features').on('click',function(){
        
       
        featuresMenu.slideDown(200) ;
        
    
    });

    
    $(window).click(function(){
        featuresMenu.addClass('d-none');
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
    