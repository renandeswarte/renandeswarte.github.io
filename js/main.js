$(function(){
	$.stellar();

  // Expand the projects / Github links
  $('.project-link').on('mouseenter', function() {
    $(this).addClass('expand');
  }).on('mouseleave', function() {
    $(this).removeClass('expand');
  });
  
})