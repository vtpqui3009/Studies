<?php include "../config/database.php"?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Trang địa chỉ khách hàng</title>
        <link rel="stylesheet" href="../assets//css//client-info.css" />
        <link rel="stylesheet" href="../bootstrap/css/bootstrap.css" />
        <link rel="stylesheet" href="../assets//css//detail-page.css" />
        <link rel="stylesheet" href="../assets//css//home-page.css" />
        <link rel="stylesheet" href="../assets/css/reset.css" />
    </head>
    <style>
        .order-success{
            height:100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction:column;
        }
        .order-success__icon{
            color:green;
            font-size: 40px;
            text-align: center;
            border-radius:50%;  
            display: block;
            font-weight: 600;
            /* transform:translateY(50%); */
            /* position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%); */
            width: 60px;
            height:60px;
            background-color: green;
            color:white;
        }
        .order-success__message{
            color:green;
            text-transform: uppercase;
            font-size: 24px;
        }
        .order-success__desc{
            font-size: 18px;
            width:60%;
            text-align:center;
        }

    </style>
    <body>
        <?php include "./header.php"?>
        <div class="order-success">
            <p class="order-success__icon"><ion-icon name="checkmark-outline"></ion-icon></p>
            <p class="order-success__message">đặt hàng thành công</p>
            <p class="order-success__desc">Đơn hàng của quý khách đã được thêm thành công . Quý khách vui lòng chờ đợi nhận hàng sau 3 ngày kể từ ngày đăng ký. Xin cảm ơn.</p>
            <button class="button-info" style="background:green">
                <a href="./home-page.php" style="color:white">Về trang chủ</a> 
            </button>
        </div>
        <?php include "./footer.php"?>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </body>
</html>

