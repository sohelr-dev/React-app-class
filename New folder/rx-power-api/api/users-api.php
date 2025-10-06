<?php

function getUsers(){
     $users = Users :: readALl();
     echo json_encode($users);
}
function createUser($data,$files){
     $image= imgUpload($files['photo']);
     if(isset($image['success'])){
          $photo =$image['success'];
     }else{
          $photo ="";
          echo json_encode(['success' => false, "massage" =>$image['error']]);
     }

       $user = new Users (null,$data['name'],$data['email'],"",$data['role_id'],$data['phone'],$photo);
       echo json_encode($user->create());
}


?>