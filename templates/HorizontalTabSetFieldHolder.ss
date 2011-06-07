<div class="horizontal_tab_wrap">
  <div class="tabNavigation clearfix">
    <ul class="navigation">
      <% control Tabs %>
        <li class="$FirstLast $MiddleString"><a href="#$id" id="tab-$id">$Title</a></li>
      <% end_control %>
    </ul>
  </div>
  <div class="horizontal_tabs">
    <% control Tabs %>
      <div id="$id" class="horizontal_tab">
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