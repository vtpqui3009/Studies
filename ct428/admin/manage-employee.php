<?php include "../config/database.php";?>
<style>
  .manage-employee__table{
    width:60rem;
    margin:10% 0 4% 20%  ;
    background-color: #fff;
  } 
  .manage-employee__heading{
    text-align: center;
    font-size: 22px;
    font-weight: 600;
    text-transform: uppercase;
  }
  .manage-employee__header{
    border:1px solid #ccc;
    font-weight: 600;
  }
  .manage-employee__content{
    border-bottom:1px solid #ccc;
    border-right:1px solid #ccc;
    border-left:1px solid #ccc;
  }
  .manage-employee__header,
  .manage-employee__content{
      display:flex;
      align-items:center;
      justify-content:center;
    }
    .manage-employee__content:hover{
      background-color: #eee;
      cursor:pointer;
    }
    .manage-employee__title,
    .manage-employee__item{
      width: calc(100% / 7);
      height:60px;
      padding:10px;
    }
    .manage-employee__title:not(:last-child),
    .manage-employee__item:not(:last-child){
      border-right:1px solid #ccc;
    }
</style>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Trang quản lí</title>
    <link rel="stylesheet" href="../assets//css//admin-page.css" />
    <link rel="stylesheet" href="../bootstrap//css//bootstrap.css" />
    <link rel="stylesheet" href="../assets//css//admin-page.css" />
    <link rel="stylesheet" href="../assets//css//header.css" />
  </head>
  <body>
  <?php 
include "./sidebar.php";
include "./header.php";
?>
 <div class="manage-employee__table">
          <p class="manage-employee__heading">Quản lý nhân viên</p>
          <div class="manage-employee__header">
              <span class="manage-employee__title">MSNV</span>
              <span class="manage-employee__title">Họ tên</span>
              <span class="manage-employee__title">Chức vụ</span>
              <span class="manage-employee__title">Địa chỉ</span>
              <span class="manage-employee__title">Số điện thoại</span>
              <span class="manage-employee__title">Sửa</span>
              <span class="manage-employee__title">Xóa</span>
          </div>
      <?php
$sql_show = "SELECT * from nhanvien";
$result = $conn->query($sql_show);
if ($result->num_rows > 0) {
	while ($row = $result->fetch_assoc()) {
		$MSNV = $row['MSNV'];
		$HoTenNV = $row['HoTenNV'];
		$ChucVu = $row['ChucVu'];
		$DiaChi = $row['DiaChi'];
		$SoDienThoai = $row['SoDienThoai'];
		?>
                <div class="manage-employee__content">
                    <span class="manage-employee__item"><?php echo $MSNV ?></span>
                    <span class="manage-employee__item"><?php echo $HoTenNV  ?></span>
                    <span class="manage-employee__item"><?php echo $ChucVu ?></span>
                    <span class="manage-employee__item"><?php echo $DiaChi ?> </span>
                    <span class="manage-employee__item"><?php echo $SoDienThoai ?></span>
                    <span class="manage-employee__item">
                        <a href="./update-employee.php?update_employee=<?php echo $MSNV ?>">
                          <button class="btn btn-warning">Sửa</button>
                        </a>
                    </span>
                    <span class="manage-employee__item">
                        <a href="?delete_employee=<?php echo $MSNV ?>">
                          <button class="btn btn-danger">Xóa</button>
                        </a>
                    </span>
                </div>;
                <?php
}
}
?>

</div>

<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <script src="../assets//js//accordion.js"></script>
    <script src="../assets/js//dark-mode.js"></script>
    <script src="../bootstrap/js/bootstrap.js"></script>
  </body>
</html>
<?php
if (isset($_GET["delete_employee"])) {
	$MSNV = $_GET["delete_employee"];
	$sql_delete = "DELETE from nhanvien where MSNV = $MSNV";
	$response = mysqli_query($conn, $sql_delete);
  if ($response) {
		echo '<script type="text/javascript">';
		echo ' alert("Xóa thành công")';
		echo '</script>';

    echo '<script type="text/javascript">';
		echo 'window.location.replace("./manage-employee.php");';
		echo '</script>';

	} else {
		echo '<script type="text/javascript">';
		echo ' alert("Xóa không thành công. Hãy thử lại !")';
		echo '</script>';
	}
}
?>
