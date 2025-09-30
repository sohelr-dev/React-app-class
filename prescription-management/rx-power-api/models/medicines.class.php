<?php

class Medicines {
    public $id;
    public $name;
    public $generic_name;
    public $type;
    public $description;

    public function __construct($_id, $_name, $_generic_name, $_type, $_description) {
        $this->id = $_id;
        $this->name = $_name;
        $this->generic_name = $_generic_name;
        $this->type = $_type;
        $this->description = $_description;
    }

    public function create() {
        global $db;
        $sql = "INSERT INTO medicines (id,name,generic_name,type,description) VALUES ('{$this->id}', '{$this->name}', '{$this->generic_name}', '{$this->type}', '{$this->description}')";
        if ($db->query($sql)) {
          return $db->insert_id;
        } else {
          return "Query failed: " . $db->error;
        }
    }

    public static function readAll() {
        global $db;
        $sql = "SELECT * FROM medicines";
        $res = $db->query($sql);
        if ($res) {
          return $res->fetch_all(MYSQLI_ASSOC);
        } else {
          return "Query failed: " . $db->error;
        }
    }

    public static function readById($id) {
        global $db;
        $id = (int)$id;
        $sql = "SELECT * FROM medicines WHERE id = $id";
        $res = $db->query($sql);
        if ($res) {
          return $res->fetch_assoc();
        } else {
          return "Query failed: " . $db->error;
        }
    }

    public function update($id) {
        global $db;
        $sql = "UPDATE medicines SET id='{$this->id}', name='{$this->name}', generic_name='{$this->generic_name}', type='{$this->type}', description='{$this->description}' WHERE id = $id";
        if ($db->query($sql)) {
          if ($db->affected_rows > 0) {
            return "Update successful.";
          } else {
            return "No changes made or record not found.";
          }
        } else {
          return "Update failed: " . $db->error;
        }
    }

    public static function delete($id) {
        global $db;
        $sql = "DELETE FROM medicines WHERE id = $id";
        if ($db->query($sql)) {
          if ($db->affected_rows > 0) {
            return "Delete successful.";
          } else {
            return "No record found with ID $id.";
          }
        } else {
          return "Delete failed: " . $db->error;
        }
    }
}
