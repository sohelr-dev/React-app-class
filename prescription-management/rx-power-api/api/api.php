<?php
// echo "API Working <br>";
require_once('../config/db.php');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,POST,PUT,DELETE');
header('Access-Control-Allow-Methods: Contain-Type');

foreach(glob("../models/*.class.php") as $filename){
    include_once($filename);
}


foreach(glob("*-api.php") as $filename){
    include_once($filename);
}
if(isset($_GET['method'])) {
    $method = $_GET['method'];
    // echo $method;
    if($method =='patients'){
            getPatients();
        }elseif($method == 'create-patients' && $_SERVER['REQUEST_METHOD'] =='POST'){
          // echo json_encode($_POST);
          // CreatePatients($data);
          $data = json_decode(file_get_contents("php://input"),true);
          CreatePatients($data);
          // print_r( $data);
        }
        else{
            echo "<h1>THIS URL '" . __DIR__. "\ $method' NOT Found !</h1>"  ;
            
        }
       
}

?>