<?php
$name= $_GET['cname'];
$value = $_POST['cvalue'];

$cookie_name=name;
$cookie_value=value;
$cookie_value=1;
$kk=$cookie_value;
setcookie($cookie_name, $cookie_value); // 86400 = 1 day
setcookie($name,$value);
?>

