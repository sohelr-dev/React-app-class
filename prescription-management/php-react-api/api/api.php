<?php
// echo "API Working <br>";
require_once('../config/db.php');
header('Access-Control-Allow-Origin: http://localhost:5174');
// require_once('../config/base.php');
// require_once('../models/products.class.php');
// include_once('product-api.php');
foreach(glob("../models/*.class.php") as $filename){
    include_once($filename);
}
// include_once("order-api.php");

foreach(glob("*-api.php") as $filename){
    include_once($filename);
}

if(isset($_GET['method'])) {
    $method = $_GET['method'];
    // echo $method;
    if($method =='products'){
        echo "<h1> API IS WORKING THIS URL '" . __DIR__ . "\ $method'</h1>"  ;
            // getProducts();
        }elseif($method == 'product' && isset($_GET['id'])) {
            // echo "hello ";
            $id = $_GET['id'];
            getProductById($id);
        }elseif($method == 'roles') {
            getRoles();
        }
        else{
            echo "<h1>THIS URL '" . __DIR__. "\ $method' NOT Found !</h1>"  ;
            
        }
        // if($method == 'products') {
            // getProducts();
    // }elseif($method == 'product' && isset($_GET['id'])) {
    //     $id = $_GET['id'];
    //     getProductById($id);
    // }elseif($method == 'product-category' && isset($_GET['id'])) {
    //     $id = $_GET['id'];
    //     getProductByCategory($id);
    // }elseif($method == 'orders') {
    //     if(isset($_GET['pg'])){
    //         $page= $_GET['pg'];
    //         getOdersByPage($page);
    //     }else{
    //         getOdersByPage(1);
    //     }
    // }
}

?>