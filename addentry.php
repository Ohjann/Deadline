<?php
	if(isset($_POST['subject']) && isset($_POST['date']) && isset($_POST['time'])) {
	    $data = $_POST['subject']." - ". $_POST['date'] . " - ". $_POST['time']. "\n";
	    $ret = file_put_contents('data.txt', $data, FILE_APPEND | LOCK_EX);
    	if($ret === false) {
    	    die('There was an error writing this file');
    	}
	    else {
	        echo "Entry submitted. Redirecting.";
	    }
	}
	else {
	    die('no post data to process');
	}
	    header( "refresh:2;url=index.php" );
?>
