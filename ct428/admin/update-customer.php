<?php 
  include "../config/database.php";
  include "./header.php";
  include "./sidebar.php";
  echo $MSKH = $_GET["customer_id"];
if (isset($_POST['update_customer'])) {
	$TenKH = $_POST['TenKH'];
	$TenCongTy = $_POST['TenCongTy'];
	$SoDienThoai = $_POST['SoDienThoai'];
	$SoFax = $_POST['SoFax'];
	$DiaChi = $_POST['DiaChi'];

	$sql_update = "UPDATE khachhang SET TenKH = '$TenKH',TenCongTy='$TenCongTy',SoDienThoai='$SoDienThoai',SoFax = '$SoFax' WHERE MSKH = '$MSKH'";

  $sql_update = "UPDATE diachikh SET DiaChi = '$DiaChi',MSKH='$MSKH' WHERE MSKH = '$MSKH'";

	$response = mysqli_query($conn, $sql_update);
	if ($response) {

		echo '<script type="text/javascript">';
		echo ' alert("Cập nhật khách hàng thành công")';
		echo '</script>';

    echo '<script type="text/javascript">';
		echo 'window.location.replace("./manage-customer.php");';
		echo '</script>';

	} else {
		echo '<script type="text/javascript">';
		echo ' alert("Cập nhật khách hàng không thành công. Hãy thử lại !")';
		echo '</script>';

	}
}

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Trang cập nhật thông tin khách hàng</title>
    <link rel="stylesheet" href="../assets//css//admin-page.css" />
    <link rel="stylesheet" href="../bootstrap//css//bootstrap.css" />
    <link rel="stylesheet" href="../assets//css//admin-page.css" />
    <link rel="stylesheet" href="../assets//css//header.css" />
  </head>
  <style>
    .customer-form{
      position: absolute;
      top: 65%;
      left: 55%;
      transform: translate(-50%,-50%);
      width:50rem
    }
    .customer-form__header{
      text-align: center;
     text-transform: uppercase;
     font-size: 20px;
     margin-bottom: 20px;
    }
  </style>
  <body>

<div class="customer-form">
      <header class="customer-form__header">
        <h2>Cập nhật khách hàng</h2>
      </header>
<?php
	$sql_show = "SELECT * from khachhang where MSKH = $MSKH ";
	$show_data = mysqli_query($conn, $sql_show);

	while ($response = mysqli_fetch_array($show_data)) {
      $TenKH = $response['HoTenKH']; 
      $TenCongTy = $response['TenCongTy']; 
      $SoDienThoai = $response['SoDienThoai']; 
      $SoFax = $response['SoFax']; 

      $sql_get_DiaChi = "SELECT * FROM diachikh WHERE MSKH = '.$MSKH.'";
      $sql_result = mysqli_query($conn,  $sql_get_DiaChi);
  
      $result = mysqli_fetch_array($sql_result);
      $DiaChi = $result['DiaChi'];
		?>
      <form class="form-control-sm" action="" method="POST">
        <div class="modal__content">
          <div class="mb-3">
            <label for="customer-name" class="form-label">Họ tên</label>
            <input type="text" class="form-control" id="customer-name" name="HoTenKH" value="<?php echo $TenKH?>"/>
          </div>
          <div class="mb-3">
            <label for="customer-company" class="form-label">Tên công ty</label>
            <input type="text" class="form-control" id="customer-company" name="TenCongTy" value="<?php echo $TenCongTy?>"/>
          </div>
          <div class="mb-3">
            <label for="customer-tel" class="form-label">SĐT</label>
            <input type="text" class="form-control" id="customer-tel" name="SoDienThoai" value="<?php echo $SoDienThoai?>"/>
          </div>
          <div class="mb-3">
            <label for="customer-fax" class="form-label">Số Fax</label>
            <input type="text" class="form-control" id="customer-fax" name="SoFax" value="<?php echo $SoFax ?>"/>
          </div>
          <div class="mb-3">
            <label for="customer-address" class="form-label">Địa chỉ</label>
            <input type="text" class="form-control" id="customer-address" value="<?php echo $DiaChi?>" name="DiaChi"/>
          </div>
        </div>
        <footer class="modal-footer">
          <button type="submit" name="update_customer" class="btn btn-primary">
            Cập nhật
          </button>
        </footer>
      </form>
      <?php
}

?>
</div>
  </body>
</html>
