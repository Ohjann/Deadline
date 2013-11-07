<?php
$entrynumber = $_GET["entry"];
echo "<p>Entry deleted. Redirecting back.</p>";
$f = "data.txt";
$number = $_POST['delete'];

// read into array
$arr = file($f);

// remove second line
unset($arr[$entrynumber]);

// reindex array
$arr = array_values($arr);

// write back to file
file_put_contents($f,implode($arr));

header( "refresh:2;url=index.php" );
?>
