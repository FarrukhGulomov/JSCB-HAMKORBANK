$(document).ready(function(){

    //  EYE FEATURES JS
var featuresMenu = $('.features-menu');

var x = false;
    
    $('.eyes-features').on('click',function(){
        x = true;
        
       if (x==true) {featuresMenu.slideDown(200) ; }
    });
  
    $( window ).click(function() {
        
       if(x==false) {featuresMenu.slideUp(200) ;}
           
       x = false;
          
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
   
   
    // Change main language 

    $('#lang ,#main__lang').hover(function(){
        setTimeout(function(){
            $('#lang_Box').toggleClass('langs');
            
        },300);
        
        $('.lang_Foreign').click(function(event){
            event.preventDefault;

                var first_Main_Lang = $('#lang').text(),
                lang_Text = ['UZ','RU','EN'],
                lang_img = ['src="./img/uz.svg"','src="./img/ru.svg"','src="./img/gb.svg"'],

                langForeign = $(this).text(),
                mainLang = $('#lang').text(langForeign);
                
                
               
                

                console.log(first_Main_Lang);
        
            

            
        });

    });

    
 


  
  
   
   
});
    