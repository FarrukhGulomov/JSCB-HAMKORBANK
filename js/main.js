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
     setInterval(() => {
        if($(this).children().hasClass('menu-fixed')){
            false;
        } else{
           $(this).append('<div class="menu-fixed"></div>');
         
        }
     }),1000;
     
        
    });
   
   
    
 


  
  
   
   
});
    