(function($) {
  $.fn.horizontalTabs = function () {
    this.each(function() {
      $tabSet = $(this);
      var tabContainers = $('div.horiz_tabs > div', this);
      tabContainers.hide().filter(':first').show();
      
      $('div.tabNav ul.navi a').click(function () {
          tabContainers.hide();
          tabContainers.filter(this.hash).show();
          $('div.tabNav ul.navi a').removeClass('selected');
          $(this).addClass('selected');
          return false;
      });
      
      $('div.tabNav ul.navi a:first').click();

    });
  };
$(function () {
  $('.horiz_tab_wrap').livequery(function() {
    $(this).horizontalTabs();
  });
});
})(jQuery);