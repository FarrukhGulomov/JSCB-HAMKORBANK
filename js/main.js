$(document).ready(function(){

    $('.eyes-features').on('click',function(){
        

       
        $('.features-menu').slideToggle(200);
        
    });


  //  create click fees calculator function 

    $('#btnCalc').click(function(event){
        event.preventDefault(); 
   $(this).children('ul').slideToggle('d-none');
        
    });
    $('.physical ').on('mouseover',function(){
       
        $(this).append(' <div class="menu-fixed"></div>');
        $(this).off('mouseover',function(){
        
        
        });
        
    });
   
   
    
 


  
  
   
   
});
    