(function($) {
$.fn.verticalTabs = function() {
	this.each(function() {
		var $tabSet = $(this);
		var $vTabs = $('.vtab', $tabSet);
		$vTabs.hide();

		$('.vtab_button a', $tabSet).click(function() {
      $vTabs.slideUp();
      $target = $vTabs.filter(this.hash);
 			if($(this).hasClass('open')) {
          $target.slideUp();
          $(this).removeClass('open');
        return false;
 			}
      $target.slideDown();
      $('.vtab_button a', $tabSet).removeClass('open');
      $(this).addClass('open');
      return false;
		});
		$('.vtab_button a:first',$tabSet).click();
	})	
}
$(function() {
	$('.vertical_tabs').livequery(function() {
		$(this).each(function() {
		  $(this).verticalTabs();
		});
	});
});
})(jQuery);