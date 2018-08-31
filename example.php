<h1>Example</h1>

<p>This soruce is for testing</p>
<?php 

function testParser($k) {
    if(1==1){
      $n = "yaeger";
      $copyName = $n;
      echo $copyName;
    }
    return 1;
}

if(1){
    $r = 3.14;
}

$a = "Ddd";

while (true) {
      if(false){
        $k = '31231';
      }else if(true){
        $k = $a;
      }else if(true){
        $k = $r;
      }else {
		$k = "Kaka";
      }
  }

testParser(1);

setcookie("TestCookie", $value);
setcookie("TestCookie", $value, time()+3600);  /* expire in 1 hour */
setcookie("TestCookie", $value, time()+3600, "/~rasmus/", "example.com", 1);

?>