<?php

if(1){
    try {
        echo inverse(5) . "\n";
        echo inverse(0) . "\n";
    } catch (Exception $e) {
        echo 'Caught exception: ',  $e->getMessage(), "\n";
    }
    
}

if(false){
    try {
        echo inverse(5) . "\n";
        echo inverse(0) . "\n";
    } catch (Exception $e) {
        getTraceAsString();
        getTrace();
    }
} else{
    echo "ho";
}


?>