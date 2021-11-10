<?php include "../config/database.php"?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Trang thông tin khách hàng</title>
        <link rel="stylesheet" href="../bootstrap/css/bootstrap.css" />
        <link rel="stylesheet" href="../assets//css//client-info.css" />
        <link rel="stylesheet" href="../assets//css//detail-page.css" />
        <link rel="stylesheet" href="../assets//css//home-page.css" />
        <link rel="stylesheet" href="../assets/css/reset.css" />
    </head>
    <body>
        <?php include "./header.php"?>
        <form action="" method="POST" class="form-info">
            <p class="form-info__heading">Thông tin nhận hàng </p>

            <div class="mb-3">
                <label for="name" class="form-label">Họ Tên : </label>
                <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="HoTenKH"
                    placeholder="Họ tên"
                />
            </div>
            <div class="mb-3">
                <label for="company-name" class="form-label"
                    >Tên Công Ty :
                </label>
                <input
                    type="text"
                    class="form-control"
                    id="company-name"
                    name="TenCongTy"
                    placeholder="Tên công ty"
                />
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Số Điện Thoại : </label>
                <input
                    type="text"
                    class="form-control"
                    id="phone"
                    name="SoDienThoai"
                    placeholder="Số điện thoại"
                />
            </div>
            <div class="mb-3">
                <label for="fax" class="form-label">Số Fax : </label>
                <input
                    type="text"
                    class="form-control"
                    id="fax"
                    name="SoFax"
                    placeholder="Số Fax"
                />
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">Địa chỉ : </label>
                <textarea
                    class="form-control"
                    id="address"
                    rows="3"
                    name="DiaChi"
                    placeholder="Địa chỉ"
                ></textarea>
            </div>
            <button type="submit" name="order-product" class="button-info">
                Đặt hàng
            </button>
        </form>
        <?php include "./footer.php"?>
    </body>
</html>

<?php        
                       
            if(isset($_GET['MSHH'])){
                $MSHH = $_GET['MSHH'];
            }
            if(isset($_POST['order-product'])){
                $HoTenKH = (isset($_POST['HoTenKH']) ? $_POST['HoTenKH'] : '');
                $TenCongTy = (isset($_POST['TenCongTy']) ? $_POST['TenCongTy'] : '');
                $SoDienThoai = (isset($_POST['SoDienThoai']) ? $_POST['SoDienThoai'] : '');
                $SoFax = (isset($_POST['SoFax']) ? $_POST['SoFax'] : '');
                $DiaChi = (isset($_POST['DiaChi']) ? $_POST['DiaChi'] : '');

                    
                $sql = "INSERT INTO khachhang (HoTenKH, TenCongTy, SoDienThoai,SoFax) VALUES ('$HoTenKH', '$TenCongTy', '$SoDienThoai','$SoFax')";

                mysqli_query($conn, $sql);

                $sql_get_MSKH = "SELECT * FROM khachhang ORDER BY khachhang.MSKH DESC LIMIT 1";
                $sql_result = mysqli_query($conn, $sql_get_MSKH);

                $result = mysqli_fetch_array($sql_result);
                $MSKH = $result['MSKH'];

                $sql_add_address = "INSERT INTO diachikh (DiaChi, MSKH) VALUES ('$DiaChi', '$MSKH')";

                $response = mysqli_query($conn, $sql_add_address);
                
            if ($response) {
                echo '<script type="text/javascript">';
                echo ' alert("Thêm thành công!")';
                echo '</script>';

                echo '<script type="text/javascript">';
                echo 'window.location.replace("./client-order.php?MSHH='.$MSHH.'&MSKH='.$MSKH.'");';
                echo '</script>';
            } else {
                echo '<script type="text/javascript">';
                echo ' alert("Thêm không thành công. Hãy thử lại !")';
                echo '</script>';
            }
            }

            ?>