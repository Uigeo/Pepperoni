<?php

    $taint1 = $_GET['name'];
    $taint2 = $_POST['ID'];

    $nonTaint1 = 13;
    $nonTaint2 = 14;

    $taint3 = $taint1;
    $taint4 = $taint2;


    echo $nonTaint2;
    echo $taint3;
    echo $taint4;
?>