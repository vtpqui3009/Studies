<?php 
    include "../config/database.php";


?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Trang thông tin khách hàng</title>
        <link rel="stylesheet" href="../assets//css//client-info.css" />
        <link rel="stylesheet" href="../bootstrap/css/bootstrap.css" />
        <link rel="stylesheet" href="../assets//css//detail-page.css" />
        <link rel="stylesheet" href="../assets//css//home-page.css" />
        <link rel="stylesheet" href="../assets/css/reset.css" />
    </head>
    <style>
        .order-form{
            margin-top: 10%;
            position: absolute;
            top: 30%;
            left: 50%;
            transform: translate(-50%,-50%);
            width:40rem;
        }
        .order-form__item{
            display:flex;
        }
        .order-form__item > :first-child{
            width: 30%;
        }
        .order-form__item > :last-child{
            width: 70%;
            border:2px solid #eee;
            padding:6px;
            border-radius:4px;
        }
        .order-form__item > :last-child:focus{
            outline:none;
            border:2px solid orange;
        }
        .order-form__heading{
            text-align: center;
            display: block;
            margin:20px 0;
            font-size: 22px;

        }
        .order-form__quantity{
            display: flex;
            align-items: center;
        }
        .order-form__quantity > :first-child{
            width: 30%;
        }
        .order-form__quantity > :last-child{
            width: 70%;
        }
    </style>
    <body>  
        <?php 
            include "./header.php";
            if(isset($_GET['MSHH'])){
                 $MSHH = $_GET['MSHH'];
            }
            if(isset($_GET['MSKH'])){
                 $MSKH = $_GET['MSKH'];
            }
            $sql = "SELECT * from hanghoa WHERE MSHH = $MSHH";

            $sql_customer = "SELECT * from khachhang WHERE MSKH = $MSKH";
            $sql_result = mysqli_query($conn, $sql_customer);
            $result = mysqli_fetch_array($sql_result);
            $HoTenKH = $result['HoTenKH'];

            $result = $conn->query($sql);
            if ($result->num_rows > 0) {
            while ($response = $result->fetch_assoc()) {
                $TenHH = $response['TenHH'];
                $Gia = $response['Gia'];
                if(isset($_POST['submit'])){
                     $TenHH = (isset($_POST['TenHH']) ? $_POST['TenHH'] : '');
                     $SoLuong = (isset($_POST['SoLuong']) ? $_POST['SoLuong'] : '');
                     $GiaDatHang = $Gia * $SoLuong;
                     $NgayDH = (isset($_POST['NgayDH']) ? $_POST['NgayDH'] : '');
                     $NgayGH = (isset($_POST['NgayGH']) ? $_POST['NgayGH'] : '');

                     $sql_add = "INSERT INTO dathang(MSKH,MSNV,NgayDH,NgayGH,TrangThaiDH) VALUES ('$MSKH',155,'$NgayDH','$NgayGH','Chưa Duyệt');";
                     mysqli_query($conn, $sql_add);

                     $sql_get_SoDonDH = "SELECT * FROM dathang ORDER BY dathang.SoDonDH DESC LIMIT 1";
                    $sql_result = mysqli_query($conn, $sql_get_SoDonDH);

                    $result = mysqli_fetch_array($sql_result);
                    $SoDonDH = $result['SoDonDH'];

                     $sql_add_detail = "INSERT INTO chitietdathang(SoDonDH,MSHH,SoLuong,GiaDatHang,GiamGia) VALUES ('$SoDonDH','$MSHH','$SoLuong','$GiaDatHang',0)";
                     $response = mysqli_query($conn, $sql_add_detail);

                     if ($response) {          
                         echo '<script type="text/javascript">';
                         echo ' alert("Thêm thành công")';
                         echo '</script>';

                         echo '<script type="text/javascript">';
                         echo 'window.location.replace("./order-success.php");';
                         echo '</script>';
                     } else {
                         echo '<script type="text/javascript">';
                         echo ' alert("Thêm không thành công. Hãy thử lại !")';
                         echo '</script>';
                     }   
                }
        ?>
            <form action="" method=POST class="order-form">
                <p class="order-form__heading">Thông tin đặt hàng</p>
                <div class="mb-3 order-form__item">     
                    <label for="">Tên khách hàng : </label>
                    <input value="<?php echo $HoTenKH?>" name="HoTenKH" >
                </div> 
                <div class="mb-3 order-form__item">     
                    <label for="">Tên hàng hóa : </label>
                    <input value="<?php echo $TenHH?>" name="TenHH" >
                </div> 
                <div class="mb-3 order-form__quantity">     
                    <label for="SoLuong">Số lượng : </label>
                    <div class="order-form__row-counter">
                            <div class="button-subtract">-</div>
                            <input value="1" id="quantity" name="SoLuong"/>
                            <div class="button-plus">+</div>
                    </div>
                </div> 
                <div class="mb-3 order-form__item">
                    <label for="">Ngày đặt hàng : </label>
                    <input value="" name="NgayDH" id="NgayDH" />
                </div>     
                <div class="mb-3 order-form__item">     
                    <label for="NgayGH">Ngày nhận hàng : </label>
                    <input value="" name="NgayGH" id="NgayGH"/>
                </div> 
                <div class="mb-3 order-form__item">     
                    <label for="GiaDatHang">Giá sản phẩm : </label>
                    <input value="<?php echo $Gia ?>" name="GiaDatHang" id="GiaDatHang"/>
                </div> 
                <button type="submit" name="submit" class="button-info">Xác nhận</button>
            </form>
        <?php
            }
        }
        ?>
    
<script type="text/javascript">
      const buttonSubtract = document.querySelector(".button-subtract");
      const buttonPlus = document.querySelector(".button-plus");
        var i = 1;
        function decreaseProduct() {
            document.getElementById('quantity').value = --i;
        }
        function increaseProduct() {
            document.getElementById('quantity').value = ++i;
        }

      buttonSubtract.addEventListener("click",decreaseProduct);
      buttonPlus.addEventListener("click",increaseProduct);

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + "-" + mm + "-" + dd;



        function addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
        }
        var nextDay = addDays(today, 3).toISOString();

        var NgayGH = new Date(nextDay);
        var dd1 = NgayGH.getDate();
        var mm1 = String(NgayGH.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy1 = NgayGH.getFullYear();
         NgayGH = yyyy1 + "-" + mm1 + "-" + dd1;



    document.getElementById("NgayDH").value = today;
    document.getElementById("NgayGH").value = NgayGH;

</script>
