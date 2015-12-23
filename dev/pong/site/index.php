<?php
	// $user_ip = $_SERVER['REMOTE_ADDR'];

	// $HARPA_IPS = array("217.28.184.161");


	// if (in_array($user_ip, $HARPA_IPS) ||  strpos($_SERVER["REQUEST_URI"],'play') !== false){
	// 	echo file_get_contents("play_harpa.html");
	// 	exit();
	// } else {
	// 	echo file_get_contents("index_outside.html");
	// 	exit();
	// }

	echo file_get_contents("index_holding.html");

?>
