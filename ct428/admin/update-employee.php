<?php include "../config/database.php";?>
<?php
$MSNV = $_GET["update_employee"];
if (isset($_POST['edit_employee'])) {
	$HoTenNV = $_POST['HoTenNV'];
	$ChucVu = $_POST['ChucVu'];
	$DiaChi = $_POST['DiaChi'];
	$SoDienThoai = $_POST['SoDienThoai'];

	$sql_update = "UPDATE nhanvien SET HoTenNV = '$HoTenNV',ChucVu='$ChucVu',DiaChi='$DiaChi',SoDienThoai = '$SoDienThoai' WHERE MSNV = '$MSNV'";

	$response = mysqli_query($conn, $sql_update);
	if ($response) {

		echo '<script type="text/javascript">';
		echo ' alert("Cập nhật nhân viên thành công")';
		echo '</script>';

    echo '<script type="text/javascript">';
		echo 'window.location.replace("./manage-employee.php");';
		echo '</script>';

	} else {
		echo '<script type="text/javascript">';
		echo ' alert("Cập nhật nhân viên không thành công. Hãy thử lại !")';
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
    <title>Trang cập nhật thông tin nhân viên</title>
    <link rel="stylesheet" href="../bootstrap//css/bootstrap.css" />
    <link rel="stylesheet" href="../assets//css//header.css" />
    <link rel="stylesheet" href="../assets//css//admin-page.css" />
  </head>
  <body>
 <?php 
  include "./header.php";
  include "./sidebar.php";
 ?>
    <div class="employee-form">
      <header class="employee-form__header">
        <h2>Cập nhật nhân viên</h2>
      </header>
<?php

$MSNV = $_GET["update_employee"];
if (isset($_GET["update_employee"])) {
	$sql_show = "SELECT * from nhanvien where MSNV = $MSNV";

	$show_data = mysqli_query($conn, $sql_show);

	while ($response = mysqli_fetch_array($show_data)) {
		?>
       <form class="form-control-sm" action="" method="POST">
        <div class="modal__content">
          <div class="mb-3">
            <label class="form-label">Họ tên</label>
            <input type="text" class="form-control" name="HoTenNV" value="<?php echo $response['HoTenNV'] ?>"/>
          </div>
          <div class="mb-3">
            <label class="form-label">Chức vụ</label>
            <input type="text" class="form-control" name="ChucVu" value="<?php echo $response['ChucVu']; ?>"/>
          </div>
          <div class="mb-3">
            <label class="form-label">Địa chỉ</label>
            <input type="text" class="form-control" name="DiaChi" value="<?php echo $response['DiaChi']; ?>"/>
          </div>
          <div class="mb-3">
            <label class="form-label">SĐT</label>
            <input type="text" class="form-control" name="SoDienThoai" value="<?php echo $response['SoDienThoai']; ?>"/>
          </div>
        </div>
        <footer class="modal-footer">
          <button type="submit" name="edit_employee" class="btn btn-primary">Cập nhật</button>
        </footer>
      </form>
      <?php
}
}
?>
</div>
  </body>
</html>

