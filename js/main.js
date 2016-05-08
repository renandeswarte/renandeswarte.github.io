$(function(){

  $('li.tech').on('touchstart', function(){
    $(this).siblings().removeClass('mobile-touched');
    $(this).addClass('mobile-touched');
  });
  
})