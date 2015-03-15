/*
* Author: tengattack
* License: GPLv3
* Depend: jquery
*/

// live binding 
$(document).on('click', '.sp.ej', function() {
  var $this = $(this);
  if ($this.hasClass('showimages')) {
    $this.removeClass('showimages');
  } else {
    $this.addClass('showimages');
  }
});
