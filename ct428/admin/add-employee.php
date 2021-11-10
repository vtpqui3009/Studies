<?php
include "../config/database.php";
if (isset($_POST["submit"])) {
	$HoTenNV = (isset($_POST['HoTenNV']) ? $_POST['HoTenNV'] : '');
	$ChucVu = (isset($_POST['ChucVu']) ? $_POST['ChucVu'] : '');
	$DiaChi = (isset($_POST['DiaChi']) ? $_POST['DiaChi'] : '');
	$SoDienThoai = (isset($_POST['SoDienThoai']) ? $_POST['SoDienThoai'] : '');

	$sql = "INSERT INTO nhanvien (HoTenNV, ChucVu, DiaChi,SoDienThoai) VALUES ('$HoTenNV', '$ChucVu', '$DiaChi','$SoDienThoai')";

	$response = mysqli_query($conn, $sql);

	if ($response) {

		echo '<script type="text/javascript">';
		echo ' alert("Thêm nhân viên thành công")';
		echo '</script>';

		echo '<script type="text/javascript">';
		echo 'window.location.replace("./manage-employee.php");';
		echo '</script>';

	} else {
		echo '<script type="text/javascript">';
		echo ' alert("Thêm nhân viên không thành công. Hãy thử lại !")';
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
    <title>Trang thêm nhân viên</title>
    <link rel="stylesheet" href="../assets/css/admin-page.css" />
    <link rel="stylesheet" href="../bootstrap//css//bootstrap.css" />
    <link rel="stylesheet" href="../bootstrap//css//bootstrap.css" />
    <link rel="stylesheet" href="../assets//css//header.css" />
  </head>
  <body>
<?php 
include "./sidebar.php";
include "./header.php";
?>
  <div class="employee-form">
                <header class="employee-form__header">
                  <h2>Thêm nhân viên</h2>
                </header>
                <form class="form-control-sm form" method="POST" action="">
                  <div class="modal__content">
                    <div class="mb-3">
                      <label for="employee_name" class="form-label">Họ tên</label>
                      <input
                        type="text"
                        class="form-control"
                        id="employee_name"
                        name="HoTenNV"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="employee_duty" class="form-label"
                        >Chức vụ</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        name="ChucVu"
                        id="employee_duty"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="employee_address" class="form-label"
                        >Địa chỉ</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        name="DiaChi"
                        id="employee_address"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="employee_tel" class="form-label">SĐT</label>
                      <input type="text" class="form-control" name="SoDienThoai" id="SoDienThoai"/>
                    </div>
                  </div>
                  <footer class="modal-footer">
                    <button type="submit" class="btn btn-primary" name="submit">Thêm</button>
                  </footer>
                </form>
  </div>

  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <script src="../assets//js//accordion.js"></script>
    <script src="../assets/js//dark-mode.js"></script>
    <script src="../bootstrap/js/bootstrap.js"></script>
  </body>
</html>
