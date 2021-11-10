<?php 
  include "../config/database.php";
  include "./sidebar.php";
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Trang đơn hàng đang chờ</title>
    <link rel="stylesheet" href="../assets/css/admin-page.css" />
    <link rel="stylesheet" href="../bootstrap//css//bootstrap.css" />
    <link rel="stylesheet" href="../bootstrap//css//bootstrap.css" />
    <link rel="stylesheet" href="../assets//css//header.css" />
  </head>
  <style>
    .pending-content__table{
      width:65rem;
      margin-left: 19%;
      margin-top: 4%;
      border-radius:4px;
      box-shadow:0 0 4px 0 rgba(0,0,0,.25);
      padding:10px;
    }
  </style>
  <body>
<div class="header">
      <div class="header-home">
        <a href="../client/home-page.php">Trang chủ</a>
      </div>
      <div class="header-more">
            <div class="switch-mode">
              <div class="switch-mode__button">
                <span>Tối</span>
                <ion-icon name="moon-outline"></ion-icon>
              </div>
              <div class="switch-mode__button">
                <span>Sáng</span>
                <ion-icon name="sunny-outline"></ion-icon>
              </div>
            </div>
            <button class="btn btn-primary">Đăng xuất</button>
      </div>
</div>    
<div class="panel-content__greeting">
              <h3>Hello, Admin.</h3>
              <p>I hope you have a great day.</p>
</div>
<div class="pending-content__table">
              <p class="panel-content__title">Đơn hàng đang chờ</p>
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Số Đơn ĐH</th>
                    <th scope="col">Tên hàng hóa</th>
                    <th scope="col">Hình hàng hóa</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Người đặt hàng</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Duyệt</th>
                    <th scope="col">Xóa</th>
                  </tr>
                </thead>

<?php
	$sql_show = "SELECT * from dathang WHERE TrangThaiDH = 'Chưa Duyệt'" ;
  $show_data = mysqli_query($conn, $sql_show);
	while ($response = mysqli_fetch_array($show_data)) {
    $SoDonDH = $response['SoDonDH']; 
    $TrangThaiDH = $response['TrangThaiDH'];
    $MSKH = $response['MSKH']; 

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

    $sql_get_TenHinh = "SELECT * FROM hinhhanghoa WHERE MSHH = $MSHH";
    $sql_result5 = mysqli_query($conn, $sql_get_TenHinh );
    $result5 = mysqli_fetch_array($sql_result5);
    $TenHinh = $result5['TenHinh'];

    $sql_get_GiaDatHang = "SELECT * FROM chitietdathang WHERE SoDonDH = $SoDonDH";
    $sql_result4 = mysqli_query($conn, $sql_get_GiaDatHang );
    $result4 = mysqli_fetch_array($sql_result4);
    $GiaDatHang = $result4['GiaDatHang'];
    $SoLuong = $result4['SoLuong'];

    $sql_get_HoTenKH = "SELECT * FROM khachhang WHERE MSKH = $MSKH";
    $sql_result = mysqli_query($conn, $sql_get_HoTenKH );
    $result = mysqli_fetch_array($sql_result);
    $HoTenKH = $result['HoTenKH'];
		?>
                <tbody>
                  <tr>
                    <th scope="row"><?php echo $SoDonDH?></th>
                    <td><?php echo $TenHH?></td>
                    <td>
                    <img src="<?php echo 'http://localhost/ct428/admin/' . $TenHinh . '' ?>" width="200" height="150" class="product-image"/>
                    </td>
                    <td><?php echo $SoLuong?></td>
                    <td><?php echo $GiaDatHang?></td>
                    <td><?php echo $HoTenKH?></td>
                    <td><?php echo $TrangThaiDH?></td>
                    <td>
                        <a href="?approved_product=<?php echo $SoDonDH ?>">
                          <button type="submit" name="submit" class="btn btn-success">
                            Duyệt
                          </button>
                        </a>
                    </td>
                    <td>
                      <button class="btn btn-danger">Xóa</button>
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
if (isset($_GET["approved_product"])) {
	 $SoDonDH = $_GET["approved_product"];
	 $sql = "UPDATE dathang SET TrangThaiDH = 'Đã Duyệt' where SoDonDH = $SoDonDH";
	$response = mysqli_query($conn, $sql);
  if ($response) {
		echo '<script type="text/javascript">';
		echo ' alert("Duyệt thành công")';
		echo '</script>';

    echo '<script type="text/javascript">';
		echo 'window.location.replace("./admin-page.php");';
		echo '</script>';

	} else {
		echo '<script type="text/javascript">';
		echo ' alert("Duyệt không thành công. Hãy thử lại !")';
		echo '</script>';
	}
}
?>
