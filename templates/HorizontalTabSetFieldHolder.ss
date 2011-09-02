<div class="horiz_tab_wrap">
  <div class="tabNav HorizontalTabSet clearfix">
    <ul class="navi">
      <% control Tabs %>
        <li class="$FirstLast $MiddleString"><a href="#$id" id="tab-$id">$Title</a></li>
      <% end_control %>
    </ul>
  </div>
  <div class="horiz_tabs">
    <% control Tabs %>
      <div id="$id" class="horiz_tab">
        <% if Tabs %>
          $FieldHolder
        <% else %>
          <% control Fields %>
            $FieldHolder
          <% end_control %>
        <% end_if %>
      </div>
    <% end_control %>
  </div>
</div>