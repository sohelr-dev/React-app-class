<?php
function getRoles(){
    echo json_encode(Roles::readAll());
}

?>