$(document).ready(function () {
    const img_0=$(".background-image[data-number='0']");
    const img_1=$(".background-image[data-number='1']");
    

    $(img_1).css('transform','scale(1.08)')
    var curr_img = 1;
    istop = true;
    
    
    // Function to change the background image
    function changeBackground() {
        curr_img = (curr_img + 1) % 8;
        var imageUrl = "titleImages/background-img (" + curr_img + ").jpg";
        
        if (istop) {
            $(img_0).attr('src', imageUrl).fadeIn(1500);
            $(img_0).css('transform','scale(1.08)')
            $(img_1).fadeOut(2500);
            $(img_1).css('transform','scale(1)')

        } else {
            $(img_1).attr('src', imageUrl).fadeIn(1500);
            $(img_1).css('transform','scale(1.08)')
            $(img_0).fadeOut(2500);
            $(img_0).css('transform','scale(1)')
        }
        
        istop = !istop;
    }
    
    setInterval(changeBackground, 9000);

    function showGiftBox(g_class) {
        // Hide all gift containers
        $('.g-container').fadeOut(500,()=>{
            $('.giftbox.'+g_class).css({'display':'flex'});
          }
        );}

        // Show the selected gift box
    
      // Attach click event listeners to each gift heading
      $('.gift h1').click(function() {
        
        var g_class = $(this).parent().attr("class").split(' ')[1];  
        showGiftBox(g_class);
      });

      $('.giftbox').click(function() {
        $('.g-container').show();
        $(this).hide();
      });
      let cards=$('.card_us');
      let startx;
      let mousepress=false;
      
      cards.mousedown((e)=>{
        console.log(e.pageX);
        console.log(e);
      })
      cards.mouseup(()=>{
        
      })
      cards.mouseleave(()=>{
        
      })
      cards.mousemove(()=>{
        
      })
     
});
