<?php include "../config/database.php"?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Trang quản lý đơn hàng</title>
    <link rel="stylesheet" href="../assets/css/admin-page.css" />
    <link rel="stylesheet" href="../bootstrap//css//bootstrap.css" />
    <link rel="stylesheet" href="../bootstrap//css//bootstrap.css" />
    <link rel="stylesheet" href="../assets//css//header.css" />
  </head>
  <style>
    .orders-content__table{
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
<div class="orders-content__table">
              <p class="panel-content__title">Quản lý đơn hàng</p>
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Số đơn ĐH</th>
                    <th scope="col">Tên KH</th>
                    <th scope="col">Tên hàng hóa</th>
                    <th scope="col">Ngày ĐH</th>
                    <th scope="col">Ngày GH</th>
                    <th scope="col">Địa chỉ KH</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Trạng thái ĐH</th>
                    <th scope="col">Sửa</th>
                  </tr>
                </thead>
                <?php
	$sql_show = "SELECT * from dathang";
	$show_data = mysqli_query($conn, $sql_show);

	while ($response = mysqli_fetch_array($show_data)) {
    $SoDonDH = $response['SoDonDH']; 
    $MSKH = $response['MSKH']; 
    $NgayDH = $response['NgayDH']; 
    $NgayGH = $response['NgayGH']; 
    $TrangThaiDH = $response['TrangThaiDH']; 

    $sql_get_DiaChi = "SELECT * FROM diachikh WHERE MSKH = '.$MSKH.'";
    $sql_result2 = mysqli_query($conn,  $sql_get_DiaChi);
    $result2 = mysqli_fetch_array($sql_result2);
    $DiaChi = $result2['DiaChi'];

    $sql_get_HoTenKH = "SELECT * FROM khachhang WHERE MSKH = $MSKH";
    $sql_result = mysqli_query($conn, $sql_get_HoTenKH );
    $result = mysqli_fetch_array($sql_result);
    $HoTenKH = $result['HoTenKH'];

    $sql_get_MSHH = "SELECT * FROM chitietdathang WHERE SoDonDH = $SoDonDH";
    $sql_result2 = mysqli_query($conn, $sql_get_MSHH );
    $result2 = mysqli_fetch_array($sql_result2);
    $MSHH = $result2['MSHH'];

    $sql_get_TenHH = "SELECT * FROM hanghoa WHERE MSHH = $MSHH";
    $sql_result3 = mysqli_query($conn, $sql_get_TenHH );
    $result3 = mysqli_fetch_array($sql_result3);
    $TenHH = $result3['TenHH'];

    $sql_get_GiaDatHang = "SELECT * FROM chitietdathang WHERE SoDonDH = $SoDonDH";
    $sql_result4 = mysqli_query($conn, $sql_get_GiaDatHang );
    $result4 = mysqli_fetch_array($sql_result4);
    $GiaDatHang = $result4['GiaDatHang'];

		?>
                <tbody>
                  <tr>
                    <th scope="row"><?php echo $SoDonDH ?></th>
                    <td ><?php echo $HoTenKH ?></td>
                    <td ><?php echo $TenHH ?></td>
                    <td><?php echo $NgayDH?></td>
                    <td><?php echo $NgayGH?></td>
                    <td><?php echo $DiaChi?></td>
                    <td><?php echo $TrangThaiDH?></td>
                    <td><?php echo $GiaDatHang?></td>
                    <td>
                          <button class="btn btn-danger">
                            <a style="color:white;text-decoration:none" href="?delete_SoDonDH=<?php echo $SoDonDH ?>">Xóa </a>
                          </button>    
                    </td>
                  </tr>
                </tbody>
                <?php
}
?>
              </table>
            </div>

            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <script src="../assets//js//accordion.js"></script>
    <script src="../assets/js//dark-mode.js"></script>
    <script src="../bootstrap/js/bootstrap.js"></script>

  </body>
</html>
<?php
if (isset($_GET["delete_SoDonDH"])) {
	$MSKH = $_GET["delete_SoDonDH"];
	$sql_delete = "DELETE from dathang where SoDonDH = $SoDonDH";
	$response = mysqli_query($conn, $sql_delete);
  if ($response) {
		echo '<script type="text/javascript">';
		echo ' alert("Xóa thành công")';
		echo '</script>';

    echo '<script type="text/javascript">';
		echo 'window.location.replace("./manage-orders.php");';
		echo '</script>';

	} else {
		echo '<script type="text/javascript">';
		echo ' alert("Xóa không thành công. Hãy xóa khóa ngoại trước. !")';
		echo '</script>';
	}
}
?>