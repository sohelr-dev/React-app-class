
<?php
require_once("models/orders.class.php");
$msg = "";
if(isset($_POST['delete_id'])) {
  $id = $_POST['delete_id'];
  $msg = Orders::delete($id);
};
$order_count = Orders::oderRowsNo();
$order_count = $order_count['orders_count'];
// echo $order_count;

?>
<div class='content-wrapper'>
  <div class='content-header'>
    <div class='container-fluid'>
      <div class='row mb-2'>
        <div class='col-sm-6'>
          <h1 class='m-0'>Manage Orders</h1>
        </div>
      </div>
    </div>
  </div>
  <section class='content'>
    <div class='container-fluid'>
      <a href="pos" class="btn btn-primary mb-3">Order Now</a>

<?php if($msg) { ?>
<div class="alert alert-info alert-dismissible fade show" role="alert">
  <?php echo $msg; ?>
  <button type="button" class="btn-close close" data-dismiss="alert" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<?php } ?>

            <div class="card">
              <!-- /.card-header -->
                <div class="card">
                      <div class="table-responsive">

                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Id</th>
                              <th>Total Amount</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                            <?php
                        $items = Orders::readAll(5);
                        // print_r($items);
                        foreach($items as $item){
                          echo "<tr>";
                          echo "<td>".$item['id']."</td>";
                          echo "<td>".$item['total_amount']."</td>";
                          echo "<td>".$item['date']."</td>";
                          echo "<td>".$item['name']."</td>";
                          ?>
                        <td class="d-flex">
                          <form action="orders-invoice" method="get">
                            <input type="hidden" name="id" value="<?php echo $item['id']; ?>">
                            <input type="submit" class="btn btn-sm btn-outline-info" value="Invoice">
                          </form>
                          <form action="orders-edit" method="get">
                            <input type="hidden" name="id" value="<?php echo $item['id']; ?>">
                            <input type="submit" class="btn btn-sm btn-outline-primary" value="Edit">
                          </form>
                          <form method="post">
                            <input type="hidden" name="delete_id" value="<?php echo $item['id']; ?>">
                            <input type="submit" class="btn btn-sm btn-outline-danger" value="Delete">
                          </form>
                        </td>
                        <?php
                          echo "</tr>";
                        }
                        ?>
                      </tbody>
                      <tbody id="tbody" class='table-primary'>

                      </tbody>
                    </table>
                    </div>
              <!-- /.card-body -->
              <div class="card-footer clearfix">
                <ul class="pagination justify-content-center m-0 ">
                  <li class="page-item"><a class="page-link" href="javascript:;" onclick="getOders(1)">«</a></li>
                  <?php
                  $last_order = 1;
                  if($order_count > 0 ){

                    $no_of_pages = ceil($order_count / 5);
                    $last_order = $no_of_pages;
                    $i = 1;
                    
                    while ($no_of_pages > 0){
                      echo "<li class='page-item'><a class='page-link' href='javascript:;' onclick='getOders($i)'>$i</a></li>";
                      $no_of_pages --;
                      $i++;

                    }
                  }
                  ?>
                  <!-- <li class="page-item"><a class="page-link" href="javascript:;" onclick="getOders(1)">1</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:;" onclick="getOders(2)">2</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:;" onclick="getOders(3)">3</a></li> -->
                  <li class="page-item"><a class="page-link" href="javascript:;" onclick="getOders(<?php echo $last_order;?>)">»</a></li>
                </ul>
              </div>
            </div>
</div>

</div>
</section>
</div>

<script src="plugins/jquery/jquery.min.js"></script>
<script>
  function getOders(page = 1){
    // alert("hhhhhhhhhhhh");
    $.ajax({
      url: "api/orders?pg=" + page,
      type:"GET",
      success:function(reponse){
        // console.log(reponse);
        let data = JSON.parse(reponse);
        // console.log(data);
         let tr = "";
         data.forEach(function(row){
          tr +=`
          <tr>
          <td>${row.id}</td>
          <td>${row.total_amount}</td>
          <td>${row.date}</td>
          <td>${row.name}</td>                        
            <td class="d-flex">
              <form action="orders-invoice" method="get">
                <input type="hidden" name="id" value="${row.id}">
                <input type="submit" class="btn btn-sm btn-outline-info" value="Invoice">
              </form>
              <form action="orders-edit" method="get">
                <input type="hidden" name="id" value="${row.id}">
                <input type="submit" class="btn btn-sm btn-outline-primary" value="Edit">
              </form>
              <form method="post">
                <input type="hidden" name="delete_id" value="${row.id}">
                <input type="submit" class="btn btn-sm btn-outline-danger" value="Delete">
              </form>
            </td>
            </tr>
          
          `
           
        });
        $("#tbody").html(tr);
      },
      error: function(error){
        console.log(error);
      }
    });
  }
  getOders();
</script>
