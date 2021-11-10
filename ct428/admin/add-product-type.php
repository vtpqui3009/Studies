<?php
include "../config/database.php";

if (isset($_POST["add-product-type"])) {

	$TenLoaiHang = (isset($_POST['TenLoaiHang']) ? $_POST['TenLoaiHang'] : '');

	$sql = "INSERT INTO loaihanghoa(TenLoaiHang) VALUES ('$TenLoaiHang')";

	$response = mysqli_query($conn, $sql);

	if ($response) {
		echo '<script type="text/javascript">';
		echo ' alert("Thêm loại hàng hóa thành công")';
		echo '</script>';

    echo '<script type="text/javascript">';
		echo 'window.location.replace("./add-product.php");';
		echo '</script>';

	} else {
		echo '<script type="text/javascript">';
		echo ' alert("Thêm loại hàng hóa không thành công. Hãy thử lại !")';
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
    <title>Trang thêm loại hàng hóa</title>
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
<div class="product-form">
              <header class="product-form__header">
                <h2>Thêm loại hàng hóa</h2>
              </header>
              <form class="form-control-sm" action="" method="POST">
                <div class="modal__content">
                  <div class="mb-3">
                    <label for="product-type" class="form-label"
                      >Tên loại hàng</label
                    >
                    <input type="text" class="form-control" id="product-type" name="TenLoaiHang"/>
                  </div>
                </div>
                <footer class="modal-footer">
                  <button type="submit" class="btn btn-primary" name="add-product-type">Thêm</button>
                </footer>
              </form>
</div>
</body>
</html>