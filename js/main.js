$(document).ready(function(){

var featuresMenu = $('.features-menu');

    

    $('.eyes-features').on('click',function(){
        
       
        featuresMenu.slideToggle(200) ;
        
    
    });
    
        jQuery( "body" ).trigger( e );
    
    

    


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
    