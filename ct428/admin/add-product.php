<?php
include "../config/database.php";
if (isset($_POST['add-product'])) {
	$TenHH = (isset($_POST['TenHH']) ? $_POST['TenHH'] : '');
	$QuyCach = (isset($_POST['QuyCach']) ? $_POST['QuyCach'] : '');
	$SoLuongHang = (isset($_POST['SoLuongHang']) ? $_POST['SoLuongHang'] : '');
	$Gia = (isset($_POST['Gia']) ? $_POST['Gia'] : '');
	$MaLoaiHang = (isset($_POST['MaLoaiHang']) ? $_POST['MaLoaiHang'] : '');

	$sql_add_product = "INSERT INTO hanghoa (TenHH,QuyCach,SoLuongHang,Gia,MaLoaiHang) VALUES ('$TenHH','$QuyCach','$SoLuongHang','$Gia','$MaLoaiHang')";
	$response = mysqli_query($conn, $sql_add_product);

	if ($response) {
		echo '<script type="text/javascript">';
		echo ' alert("Thêm hàng hóa thành công")';
		echo '</script>';

    echo '<script type="text/javascript">';
		echo 'window.location.replace("./add-product-image.php");';
		echo '</script>';

	} else {
		echo '<script type="text/javascript">';
		echo ' alert("Thêm hàng hóa không thành công. Hãy thử lại !")';
		echo '</script>';
	}
}
?>
<style>
  .ck-blurred.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline {
    height: 200px;
  }

</style>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Trang thêm hàng hóa</title>
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
                <h2>Thêm hàng hóa</h2>
              </header>
              <form class="form-control-sm" action="" method="POST" enctype="multipart/form-data">
                <div class="modal__content">
                  <div class="mb-3">
                    <label for="product-name" class="form-label">Tên hàng hóa</label>
                    <input type="text" class="form-control" id="product-name" name="TenHH"/>
                  </div>
                  <div class="mb-3">
                      <label for="product-desc" class="form-label">Quy cách</label>
                      <textarea class="form-control" id="editor" name="QuyCach"></textarea>
                  </div>

                  <div class="mb-3">
                    <label for="product-number" class="form-label"
                      >Số lượng hàng</label
                    >
                    <input
                      type="number"
                      class="form-control"
                      id="product-number"
                      name="SoLuongHang"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="product-price" class="form-label">Giá</label>
                    <input
                      type="number"
                      class="form-control"
                      id="product-price"
                      name="Gia"
                    />
                  </div>

                  <select class="form-select mt-4"  name="MaLoaiHang" >
                    <option selected>Chọn loại hàng hóa</option>
 <?php
$sql_show = "SELECT * FROM loaihanghoa ORDER BY MaLoaiHang DESC";
$result = $conn->query($sql_show);
if ($result->num_rows > 0) {
	while ($row = $result->fetch_assoc()) {
		?>
                    <option value="<?php echo $row['MaLoaiHang'] ?>"><?php echo $row['TenLoaiHang'] ?></option>
    <?php
}
}
?>
                </select>
                </div>
                <footer class="modal-footer">
                  <button type="submit" class="btn btn-primary" name="add-product">Thêm</button>
                </footer>
              </form>
            </div>
            <script>
  ClassicEditor
    .create(document.querySelector('#editor'))
    .then(editor => {
      console.log(editor);
    })
    .catch(error => {
      console.error(error);
    });
</script>
</body>
</html>