<?php include "../config/database.php"?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Trang quản lý khách hàng</title>
    <link rel="stylesheet" href="../assets/css/admin-page.css" />
    <link rel="stylesheet" href="../bootstrap//css//bootstrap.css" />
    <link rel="stylesheet" href="../bootstrap//css//bootstrap.css" />
    <link rel="stylesheet" href="../assets//css//header.css" />
  </head>
  <style>
    .customer-content__table{
      width:65rem;
      margin-left: 19%;
      margin-top: 8%;
      border-radius:4px;
      box-shadow:0 0 4px 0 rgba(0,0,0,.25);
      padding:10px;
    }
  </style>
  <body>
    <?php 
    include "./sidebar.php";
    include "./header.php";
    ?>

  <form class="customer-content__table">
        <p class="panel-content__title">Quản lý khách hàng</p>
          <table class="table table-hover">
              <thead>
                <tr>
                    <th scope="col">MSKH</th>
                    <th scope="col">Tên khách hàng</th>
                    <th scope="col">Tên công ty</th>
                    <th scope="col">SĐT</th>
                    <th scope="col">Số Fax</th>
                    <th scope="col">Địa chỉ</th>
                    <th scope="col">Sửa</th>
                    <th scope="col">Xóa</th>
                  </tr>
              </thead>
              <?php
	$sql_show = "SELECT * from khachhang ";
	$show_data = mysqli_query($conn, $sql_show);

	while ($response = mysqli_fetch_array($show_data)) {
    $MSKH = $response['MSKH']; 
    $TenKH = $response['HoTenKH']; 
    $TenCongTy = $response['TenCongTy']; 
    $SoDienThoai = $response['SoDienThoai']; 
    $SoFax = $response['SoFax']; 

    $sql_get_DiaChi = "SELECT * FROM diachikh WHERE MSKH = '.$MSKH.'";
    $sql_result = mysqli_query($conn,  $sql_get_DiaChi);

    $result = mysqli_fetch_array($sql_result);
    $DiaChi = $result['DiaChi'];
		?>
              <tbody>
                  <tr>
                    <th scope="row"><?php echo $MSKH?></th>
                    <td><?php echo $TenKH?></td>
                    <td><?php echo $TenCongTy?></td>
                    <td><?php echo $SoDienThoai?></td>
                    <td><?php echo $SoFax?></td>
                    <td><?php echo $DiaChi?></td>
                    <td>
                          <button class="btn btn-warning">
                            <a style="color:black;text-decoration:none" href="./update-customer.php?customer_id=<?php echo $MSKH ?>">Sửa</a>
                          </button>
                   </td>
                    <td>
                          <button class="btn btn-danger">
                            <a style="color:white;text-decoration:none" href="?delete_customer=<?php echo $MSKH ?>">Xóa </a>
                          </button>    
                    </td>
                  </tr>
              </tbody>
              <?php
}
?>
</table>
</form>
    
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <script src="../assets//js//accordion.js"></script>
    <script src="../assets/js//dark-mode.js"></script>
    <script src="../bootstrap/js/bootstrap.js"></script>

  </body>
</html>
<?php
if (isset($_GET["delete_customer"])) {
	$MSKH = $_GET["delete_customer"];
	$sql_delete = "DELETE from khachhang where MSKH = $MSKH";
	$response = mysqli_query($conn, $sql_delete);
  if ($response) {
		echo '<script type="text/javascript">';
		echo ' alert("Xóa thành công")';
		echo '</script>';

    echo '<script type="text/javascript">';
		echo 'window.location.replace("./manage-customer.php");';
		echo '</script>';

	} else {
		echo '<script type="text/javascript">';
		echo ' alert("Xóa không thành công. Hãy xóa địa chỉ trước. !")';
		echo '</script>';
	}
}
?>
