<?php
	if (isset($_REQUEST['text'])) {
		$text = $_REQUEST['text'];
		$css = "font-size: 3em; font-family: verdana; ";
		
		if (isset($_REQUEST['style'])) {
			$style = $_REQUEST['style'];
		
			foreach ($style as $key => $val) {
				if ($key == 'bold') {
					$css .= "font-weight: bold; ";
				}
				if ($key == 'italic') {
					$css .= "font-style: italic; ";
				}
				if ($key == 'underline') {
					$css .= "text-decoration: underline; ";
				}
				if ($key == 'invert') {
					$css .= "background-color: black; color: white;";
				}			
			}
		}
		
		header('Content-Type: text/html');
		echo "<span style=\"" . $css . "\">" . $text . "</span>";
	}
?>