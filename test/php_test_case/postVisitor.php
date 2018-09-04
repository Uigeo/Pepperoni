<?php
echo 'Hello ' . htmlspecialchars($_POST["name"]) . '!';

while(true){
    if(1){
        echo "HEllo";
    }else{
        echo $_POST['name'];
    }
}

?>