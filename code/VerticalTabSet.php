<?php

class VerticalTabSet extends HorizontalTabSet
{
				
	public function FieldHolder()
	{
		Requirements::javascript(THIRDPARTY_DIR."/jquery/jquery.js");
		Requirements::javascript(THIRDPARTY_DIR."/jquery/jquery-livequery/jquery.livequery.js");
		Requirements::javascript("tabs/javascript/vertical_tabset.js");
		Requirements::css("tabs/css/vertical_tabset.css");
		return $this->renderWith("VerticalTabSetFieldHolder");
	}
}
