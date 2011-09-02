(function($) {
  $.fn.horizontalTabs = function () {
    this.each(function() {
      $tabSet = $(this);
      var tabContainers = $('div.horizontal_tabs > div', this);
      tabContainers.hide().filter(':first').show();
      
      // Added .not('div.UploadifyField a') to the click function so that the horizontal tabset clicks would not
      // affect the uploadify fields tabs.
      $('div.tabNavigation ul.navigation a').not('div.UploadifyField a').click(function () {
          tabContainers.hide();
          tabContainers.filter(this.hash).show();
          $('div.tabNavigation ul.navigation a').removeClass('selected');
          $(this).addClass('selected');
          return false;
      });
      
      $('div.tabNavigation ul.navigation a:first').click();

    });
  };
$(function () {
  $('.horizontal_tab_wrap').livequery(function() {
    $(this).horizontalTabs();
  });
});
})(jQuery);