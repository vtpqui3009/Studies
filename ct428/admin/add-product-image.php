<?php include "../config/database.php";

if (isset($_POST['add-product-image']) && isset($_FILES['fileUpload'])) {

	if ($_FILES['fileUpload']['error'] > 0) {
		echo "Upload lỗi rồi!";
	} else {
		move_uploaded_file($_FILES['fileUpload']['tmp_name'], 'upload/' . $_FILES['fileUpload']['name']);
		$TenHinh = 'upload/' . $_FILES['fileUpload']['name'] . '';
		$MSHH = (isset($_POST['MSHH']) ? $_POST['MSHH'] : '');
		$sql = "INSERT INTO hinhhanghoa(TenHinh,MSHH) VALUES ('$TenHinh','$MSHH')";
		mysqli_query($conn, $sql);

		echo '<script type="text/javascript">';
		echo ' alert("Thêm hình hàng hóa thành công")';
		echo '</script>';

    echo '<script type="text/javascript">';
		echo 'window.location.replace("./manage-product.php");';
		echo '</script>';

    echo '<script type="text/javascript">';
		echo 'window.location.replace("./manage-employee.php");';
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
    <title>Trang thêm hình ảnh</title>
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
                <h2>Thêm hình hàng hóa</h2>
              </header>
              <form class="form-control-sm" action="" method="POST" enctype="multipart/form-data">
                <div class="modal__content">
                  <div class="mb-3">
                      <label for="product-image" class="form-label"
                        >Hình ảnh</label
                      >
                      <input
                        type="file"
                        class="form-control"
                        id="product-image"
                        name="fileUpload"
                        value=""
                      />
                    </div>


                  <select class="form-select mt-4"  name="MSHH" >
                    <option selected>Chọn loại hàng hóa</option>
 <?php
$sql_show = "SELECT * FROM hanghoa";
$result = $conn->query($sql_show);
if ($result->num_rows > 0) {
	while ($row = $result->fetch_assoc()) {
		?>
                    <option value="<?php echo $row['MSHH'] ?>"><?php echo $row['TenHH'] ?></option>
    <?php
}
}
?>
                </select>                </div>

                <footer class="modal-footer">
                  <button type="submit" class="btn btn-primary" name="add-product-image">Thêm</button>
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

