
<?php include "../config/database.php"?>
<style type="text/css">
  .product-image{
    object-fit: "cover";
  }
  .product-content__table{
    width:65rem;
    margin-left: 19%;
    margin-top: 8%;
    border-radius:4px;
    box-shadow:0 0 4px 0 rgba(0,0,0,.25);
    padding:10px;
  }
</style>
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
<div class="product-content__table">
              <p class="panel-content__title">Quản lý hàng hóa</p>
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">MSHH</th>
                    <th scope="col">Tên hàng hóa</th>
                    <th scope="col">Hình ảnh</th>
                    <th scope="col">Mã loại</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Sửa</th>
                    <th scope="col">Xóa</th>
                  </tr>
                </thead>
      <?php
$sql_show = "SELECT * from hanghoa,hinhhanghoa,loaihanghoa WHERE hanghoa.MSHH = hinhhanghoa.MSHH AND hanghoa.MaLoaiHang = loaihanghoa.MaLoaiHang";
$result = $conn->query($sql_show);
if ($result->num_rows > 0) {
	while ($row = $result->fetch_assoc()) {
		$MSHH = $row['MSHH'];
		$TenHH = $row['TenHH'];
		$SoLuongHang = $row['SoLuongHang'];
		$Gia = $row['Gia'];
		$TenHinh = $row['TenHinh'];
		$TenLoaiHang = $row['TenLoaiHang']

		?>
                    <tbody>
                  <tr>

                    <th scope="row">
                      <?php echo $MSHH ?>
                    </th>
                    <td>
                      <?php echo $TenHH ?>
                    </td>
                    <td>
                      <img src="<?php echo 'http://localhost/ct428/admin/' . $TenHinh . '' ?>" width="200" height="150" class="product-image"/>
                    </td>
                    <td><?php echo $TenLoaiHang ?></td>
                    <td>
                      <?php echo $SoLuongHang ?>
                    </td>

                    <td>
                      <?php echo $Gia ?>
                    </td>
                    <td><a href="./update-product.php?product_id=<?php echo $MSHH ?>"><button class="btn btn-warning">Sửa</button></a> </td>

                  <td>
                    <a href="?delete_product=<?php echo $MSHH ?>">
                        <button class="btn btn-danger">Xóa</button>
                    </a>
                  </td>

                     </tr>
                </tbody>
                <?php
}
}
?>
              </table>
</div>
<?php
if (isset($_GET["delete_product"])) {
	$MSHH = $_GET["delete_product"];
	$sql_delete = "DELETE from hanghoa,hinhhanghoa,loaihanghoa where hanghoa.MSHH = hinhhanghoa.MSHH AND hanghoa.MaLoaiHang = loaihanghoa.MaLoaiHang ";
	$response = mysqli_query($conn, $sql_delete);
  if ($response) {
		echo '<script type="text/javascript">';
		echo ' alert("Xóa thành công")';
		echo '</script>';

    echo '<script type="text/javascript">';
		echo 'window.location.replace("./manage-product.php");';
		echo '</script>';

	} else {
		echo '<script type="text/javascript">';
		echo ' alert("Xóa không thành công. Hãy thử lại !")';
		echo '</script>';
	}

}
?>

<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <script src="../assets//js//accordion.js"></script>
    <script src="../assets/js//dark-mode.js"></script>
    <script src="../bootstrap/js/bootstrap.js"></script>

  </body>
</html>