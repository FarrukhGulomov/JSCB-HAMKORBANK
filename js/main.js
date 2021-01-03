$(document).ready(function(){

var featuresMenu = $('.features-menu');

    
    var x = true;
    $('.eyes-features').on('click',function(){
        
       
       if (x) {featuresMenu.slideToggle(200) ; }
        
    
    });
    
    $( window ).click(function() {
       if(!x) {featuresMenu.slideUp(200) ;}
           
    
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
    