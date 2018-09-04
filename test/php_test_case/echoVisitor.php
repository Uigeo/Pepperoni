<?php
echo 'Hello ' . htmlspecialchars($_GET["name"]) . '!';

while(true){
    if(1){
        echo "HEllo";
    }else{
        echo $_GET['name'];
    }
}

?>

