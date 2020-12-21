$(document).ready(function(){

    $('.eyes-features').on('click',function(){
        

       
        $('.features-menu').slideToggle(200);
        
    });


  //  create click fees calculator function 

    $('#btnCalc').click(function(event){
        event.preventDefault(); 
   $(this).children('ul').slideToggle('d-none');
        
    });
    $('.menu-main li').hover(function(){
        $(this).append('<div class="menu-fixed d-none"></div>');
        $(this).children('div').removeClass('d-none');
    });

 


  
  
   
   
});
    