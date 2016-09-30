// Frontend JS

$( document ).ready(function() {
    
  // hide brand name on scrolldown and show again on scrollup
  
  var scrollY = 0;
  var fixY = 0;
  var posY_max = 22;
  var posY_min = -30;
  var posY = posY_max;
  function setFixedPosition() {
    scrollY = $('body').scrollTop();
    if (scrollY >= 0 ) {
      if ((posY_max - scrollY + fixY) < posY_min) {
          fixY += posY_min - (posY_max - scrollY + fixY);
      }
      if ((posY_max - scrollY + fixY) > posY_max) {
          fixY -= (posY_max - scrollY + fixY) - posY_max;
      }
      posY = posY_max - scrollY + fixY;
      $('.btn-brand-name').css('top', posY + 'px');
    }
  }                                
  $(window).scroll(function() {
      setFixedPosition();
  });
  $(window).load(function() {
      scrollY = $('body').scrollTop();
      fixY = scrollY;
      setFixedPosition();
  });
  
  
  
  // hide more chats on scrolldown
   
  function showHideReadmore() {

  var scrollTop = $('body').scrollTop(); 
    if (scrollTop >= 0 ) {
      if (scrollTop < 100) {
        $('.fixed-read-more').fadeIn();
      }
      else {
        $('.fixed-read-more').remove();
      }
      $('.fixed-read-more').css('bottom', - scrollTop + 'px');
    }
  }
  
  $(window).load(function() {  
    showHideReadmore();
  });
  $(window).scroll(function() {  
    showHideReadmore();
  });
  
  
  // make fixed read more clickable
  
  $('.fixed-read-more').click( function() {
    $("html, body").animate({ scrollTop: "500px", }, "slow" ); 
  });
      
});