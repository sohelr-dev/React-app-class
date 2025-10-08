<?php
function getUsers(){
     $user =Users::readAll();
     echo json_encode($user);
}
function createUser($data,$files){
     $image= imgUpload($files['photo']);
     if(isset($image['success'])){
          $photo =$image['success'];
     }else{
          $photo ="";
          echo json_encode(['success' => false, "massage" =>$image['error']]);
     }
     $user =  new Users(null, $data['name'],$data['email'],'',$data['role_id'],$data['address'],$photo);
     echo json_encode($user->create());

}
function deleteUser($id){
     echo json_encode(Users::delete($id));
}

?>