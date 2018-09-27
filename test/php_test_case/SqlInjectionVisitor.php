<?php
$username = $_POST["username"];
$password = $_POST["password"];

//found because of $ variable
$mysqli->query("SELECT * FROM users WHERE username='{$username}' AND password='{$password}'");

//not found
$mysqli->query("SELECT * WHERE 1=1");

//found because of $ variable
$result = mysql_query("SELECT * FROM users WHERE username='{$username}' AND password='{$password}'");

//not found
$result = mysql_query('SELECT * WHERE 1=1');

?>