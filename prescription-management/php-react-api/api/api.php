<?php
// echo "API Working <br>";
require_once('../config/db.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
// require_once('../config/base.php');
// require_once('../models/products.class.php');
// include_once('product-api.php');
foreach(glob("../models/*.class.php") as $filename){
    include_once($filename);
}
// include_once("order-api.php");
include_once("../helper/img-upload-helper.php");
include_once("../helper/jwt.php");

foreach(glob("*-api.php") as $filename){
    include_once($filename);
}
$request =$_SERVER['REQUEST_METHOD'];
$endpoint =$_GET['method'] ?? null;
if(!$endpoint){
    echo json_encode(['error'=>"No endpont here"]);
    exit;
}

if($endpoint=='login' && $request =='POST'){
    echo "Login Api Request";
    
}elseif($endpoint =='token' && $request == 'POST'){
    $data =[
                "name"=>"sohel",
                "email"=>"sohel@gmail.com",
                "role"=>"admin"
            ];
    echo json_encode(generateJWT($data,60*60*24*7));
}else{
    $header =getallheaders();
    $auth_header =$header['Authorization'] ?? '';
    if(!$auth_header){
        http_response_code(401);
        echo json_encode(['error'=>"No token Provider"]);
        exit;
    }
    $bearer_token = explode(' ',$auth_header);
    $token = $bearer_token[1];
    try{
        $decoded = ValidateJWT($token);
    }catch(Exception $e){
        http_response_code(401);
        echo json_encode(['error'=>"Invalid or expired token"]);
        exit;

    }


    //page access for token 
    
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
        }elseif($method == 'role-create' && $_SERVER['REQUEST_URI']=="POST") {
            $data =json_decode(file_get_contents("php://input"),true);
            CreateRole($data);
        }elseif($method == 'users' && $_SERVER['REQUEST_METHOD']=="GET") {
            getUsers();
        }elseif($method == 'create-user' && $_SERVER['REQUEST_METHOD'] == "POST") {
            // echo json_encode($_POST);
            // echo json_encode($_FILES);
            createUser($_POST,$_FILES);
        }elseif($method =="delete-user" && $_SERVER['REQUEST_METHOD'] == "DELETE"){
            // echo json_encode($_GET['id']);
            deleteUser($_GET['id']);
        }elseif($method =="token" && $_SERVER['REQUEST_METHOD'] == "GET"){
            $data =[
                "name"=>"sohel",
                "email"=>"sohel@gmail.com",
                "role"=>"admin"
            ];
           echo json_encode("Bearer Token: " .  generateJWT($data,60));
        }elseif($method =="token-check"){
            $header =getallheaders();
            $auth_header =$header['Authorization'] ?? '';
            $jwt = explode(' ',$auth_header);
           echo json_encode(validateJWT($jwt[1]));
        }



        else{
            echo "<h1>THIS URL '" . __DIR__. "\ $method' NOT Found !</h1>"  ;
            
        }
        
}
    echo "others api request";
}

// if(isset($_GET['method'])) {
//     $method = $_GET['method'];
//     // echo $method;
//     if($method =='products'){
//         echo "<h1> API IS WORKING THIS URL '" . __DIR__ . "\ $method'</h1>"  ;
//             // getProducts();
//         }elseif($method == 'product' && isset($_GET['id'])) {
//             // echo "hello ";
//             $id = $_GET['id'];
//             getProductById($id);
//         }elseif($method == 'roles') {
//             getRoles();
//         }elseif($method == 'role-create' && $_SERVER['REQUEST_URI']=="POST") {
//             $data =json_decode(file_get_contents("php://input"),true);
//             CreateRole($data);
//         }elseif($method == 'users' && $_SERVER['REQUEST_METHOD']=="GET") {
//             getUsers();
//         }elseif($method == 'create-user' && $_SERVER['REQUEST_METHOD'] == "POST") {
//             // echo json_encode($_POST);
//             // echo json_encode($_FILES);
//             createUser($_POST,$_FILES);
//         }elseif($method =="delete-user" && $_SERVER['REQUEST_METHOD'] == "DELETE"){
//             // echo json_encode($_GET['id']);
//             deleteUser($_GET['id']);
//         }elseif($method =="token" && $_SERVER['REQUEST_METHOD'] == "GET"){
//             $data =[
//                 "name"=>"sohel",
//                 "email"=>"sohel@gmail.com",
//                 "role"=>"admin"
//             ];
//            echo json_encode("Bearer Token: " .  generateJWT($data,60));
//         }elseif($method =="token-check"){
//             $header =getallheaders();
//             $auth_header =$header['Authorization'] ?? '';
//             $jwt = explode(' ',$auth_header);
//            echo json_encode(validateJWT($jwt[1]));
//         }



//         else{
//             echo "<h1>THIS URL '" . __DIR__. "\ $method' NOT Found !</h1>"  ;
            
//         }
        
// }

?>