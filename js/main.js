$(document).ready(function(){

    $('.eyes-features').on('click',function(){
        

       
        $('.features-menu').slideToggle(200);
        
    });


  //  create click fees calculator function 

    $('#btnCalc').click(function(event){
        event.preventDefault(); 
   $(this).children('ul').slideToggle('d-none');
        
    });


    $('.subMenu ').on('mouseenter',function(){
       
     if($(this).children().hasClass('menu-fixed')){
         false;
     } else{
        const createDiv = $(this).append('<div class="menu-fixed"></div>');
      
     }
        
    });
   
   
    
 


  
  
   
   
});
    