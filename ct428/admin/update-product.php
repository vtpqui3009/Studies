<?php include "../config/database.php"?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Trang cập nhật sản phẩm</title>
    <link rel="stylesheet" href="../bootstrap/css/bootstrap.css" />
    <link rel="stylesheet" href="../assets/css/header.css" />
    <script src="https://cdn.ckeditor.com/ckeditor5/30.0.0/classic/ckeditor.js"></script>
  </head>
  <body>
    <div class="header">
      <div class="header-home">
        <a href="../client/home-page.php">Trang chủ</a>
        <div>/</div>
        <a href="./admin-page.php">Trở về</a>
      </div>
      <div class="header-more">
        <button class="btn btn-primary">Đăng xuất</button>
      </div>
    </div>
    <div class="product-form">
      <header class="product-form__header">
        <h2>Cập nhật hàng hóa</h2>
      </header>
      <?php 
      $MSHH = $_GET["product_id"];
      $sql_show = "SELECT * from hanghoa where MSHH = $MSHH";

      $show_data = mysqli_query($conn, $sql_show);
    
      while ($response = mysqli_fetch_array($show_data)) {
        $TenHH = $response['TenHH'];
        $QuyCach = $response['QuyCach'];
        $SoLuongHang = $response['SoLuongHang'];
        $Gia = $response['Gia'];
        $MaLoaiHang = $response['MaLoaiHang'];
      ?>
      <form class="form-control-sm" action="" method="POST">
        <div class="modal__content">
          <div class="mb-3">
            <label for="MSNV" class="form-label">Tên hàng hóa</label>
            <input type="text" class="form-control" name="TenHH" value="<?php echo $TenHH ?>"/>
          </div>
          <div class="mb-3">
            <label for="product-desc" class="form-label">Quy cách</label>
            <textarea name="QuyCach" rows="40" cols="80" id=editor class="form-control" id="product-desc" value="<?php echo $QuyCach ?>"/><?php echo $QuyCach ?></textarea>
          </div>
          <div class="mb-3">
            <label for="product-number" class="form-label">Số lượng hàng</label>
            <input type="number" class="form-control" name="SoLuongHang" value="<?php echo $SoLuongHang ?>"/>
          </div>
          <div class="mb-3">
            <label for="product-price" class="form-label">Giá</label>
            <input type="number" class="form-control" name="Gia" value="<?php echo $Gia ?>"/>
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
          <button type="submit" name="update-product" class="btn btn-primary">Cập nhật</button>
        </footer>
      </form>  
     <?php
           }
      ?>
    </div>
  </body>
</html>

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
<?php 
  if(isset($_POST['update-product'])){
    echo $TenHH = $response['TenHH'];
    echo $QuyCach = $response['QuyCach'];
    echo $SoLuongHang = $response['SoLuongHang'];
    echo $Gia = $response['Gia'];
    echo $MaLoaiHang = $response['MaLoaiHang'];

	$response = mysqli_query($conn, $sql_update);
	if ($response) {

		echo '<script type="text/javascript">';
		echo ' alert("Cập nhật sản phẩm thành công")';
		echo '</script>';

		echo '<script type="text/javascript">';
		echo 'window.location.replace("./manage-product.php");';
		echo '</script>';

	} else {
		echo '<script type="text/javascript">';
		echo ' alert("Cập nhật sản phẩm không thành công. Hãy thử lại !")';
		echo '</script>';
	}
  }
?>