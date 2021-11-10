<?php include "../config/database.php"?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Trang chi tiết</title>
    <link rel="stylesheet" href="../assets//css//detail-page.css" />
    <link rel="stylesheet" href="../assets//css//home-page.css" />
    <link rel="stylesheet" href="../assets/css/reset.css" />
  </head>
  <body>
    <div class="container" >
    <?php include "./header.php"?>
    <?php  
    if(isset($_GET['product_detail_id'])){
      $MSHH = $_GET['product_detail_id'];
      $sql_show = "SELECT * from hanghoa,hinhhanghoa where hanghoa.MSHH = $MSHH AND hanghoa.MSHH = hinhhanghoa.MSHH"  ;
      $result = $conn->query($sql_show);
      if ($result->num_rows > 0) {
	    while ($response = $result->fetch_assoc()) {
        $MSHH = $response['MSHH'];
        $TenHH = $response['TenHH'];
        $TenHinh = $response['TenHinh'];
        $Gia = $response['Gia'];
        $QuyCach = $response['QuyCach'];
?> 
          <form class="main">
            <div class="main-col">
              <div class="main-col-1">
                <img src="<?php echo 'http://localhost/ct428/admin/' . $TenHinh . '' ?>" width="200" height="150"/>
              </div>
              <div class="main-col-2">
                <div class="path">
                  <span class="path-main"> Món ngon FLYFOOD</span>
                  <span class="path-sub">
                    > <?php echo $TenHH ?>
                  </span>
                </div>
                <h2 class="food-name"><?php echo $TenHH ?></h2>
                <label for="" >Mã sản phẩm: </label>
                <input value="<?php echo $MSHH ?>" name="MSHH" class="food-code"/>
                <div>
                  <a href="./client-info.php?MSHH=<?php echo $MSHH ?>" class="order-button"> Đặt món </a>
                </div>
              </div>
            </div>
          </form>
          <div class="meal-description">
            <p><?php echo $QuyCach ?></p>
          </div>
          <?php 
      }
  }
}
    ?>
      <?php include "./footer.php"?>
    </div>
  </body>
</html>







