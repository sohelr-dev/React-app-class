<?php
function getOdersByPage($id){
     // echo "order Working";
     $orders= Orders::readByPage($id);
     echo json_encode($orders);
}

?>