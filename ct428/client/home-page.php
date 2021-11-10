<?php include "../config/database.php"?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="../assets//css//home-page.css" />
    <link rel="stylesheet" href="../assets/css/reset.css" />
  </head>
  <body>
    <div class="container">
      <?php include "./header.php"?>
      <div class="banner">
        <img src="../assets/images/banner.jpg" alt="" />
      </div>
      <div class="meals">
        <div class="meal">
          <h2>Món lẻ : GIAO TẬN NƠI - SHIP ĐỒNG GIÁ 29K</h2>
          <div class="meal__list">
          <?php 
          $sql_show_list1 = "SELECT * from hanghoa,hinhhanghoa WHERE hanghoa.MaLoaiHang = 29 AND hanghoa.MSHH = hinhhanghoa.MSHH LIMIT 8";
          $show_list1 = mysqli_query($conn, $sql_show_list1);
          if ($show_list1->num_rows > 0) {
            while ($response = mysqli_fetch_array($show_list1)) { 
              $MSHH = $response['MSHH'];
              $TenHH = $response['TenHH'];
              $TenHinh = $response['TenHinh'];
              $Gia = $response['Gia'];
            ?> 
                <a href="./detail-page.php?product_detail_id=<?php echo $MSHH?>" class="meal__item">
                  <div class="meal__image">
                  <img src="<?php echo 'http://localhost/ct428/admin/' . $TenHinh . '' ?>" width="200" height="150"/>
                  </div>
                  <div class="meal__more">
                    <div class="meal__title"><?php echo $TenHH?></div>
                    <div class="meal__price"><span>Giá: </span><?php echo $Gia?></div>
                  </div>
                </a>
            <?php
            }
          }
          ?>
            </div>
        </div>
        <div class="meal">
          <h2>Party: MÓN KHAI VỊ - SẮC MÀU - 60 PHÚT</h2>
          <div class="meal__list">
          <?php 
          $sql_show_list2 = "SELECT * from hanghoa,hinhhanghoa WHERE hanghoa.MaLoaiHang = 34 AND hanghoa.MSHH = hinhhanghoa.MSHH LIMIT 8";
          $show_list2 = mysqli_query($conn, $sql_show_list2);
          if ($show_list1->num_rows > 0) {
            while ($response = mysqli_fetch_array($show_list2)) { 
              $MSHH = $response['MSHH'];
              $TenHH = $response['TenHH'];
              $TenHinh = $response['TenHinh'];
              $Gia = $response['Gia'];
            ?> 
               <a href="./detail-page.php?product_detail_id=<?php echo $MSHH?>"  class="meal__item">
                  <div class="meal__image">
                  <img src="<?php echo 'http://localhost/ct428/admin/' . $TenHinh . '' ?>" width="200" height="150"/>
                  </div>
                  <div class="meal__more">
                    <div class="meal__title"><?php echo $TenHH?></div>
                    <div class="meal__price"><span>Giá: </span><?php echo $Gia?></div>
                  </div>
              </a>
            <?php
            }
          }
          ?>
          </div>
        </div>
        <div class="meal">
          <h2>Party: MÓN HẤP - SANG TRỌNG - 60 PHÚT</h2>
          <div class="meal__list">
          <?php 
          $sql_show_list3 = "SELECT * from hanghoa,hinhhanghoa WHERE hanghoa.MaLoaiHang = 35 AND hanghoa.MSHH = hinhhanghoa.MSHH ";
          $show_list3 = mysqli_query($conn, $sql_show_list3);
          if ($show_list3->num_rows > 0) {
            while ($response = mysqli_fetch_array($show_list3)) { 
              $MSHH = $response['MSHH'];
              $TenHH = $response['TenHH'];
              $TenHinh = $response['TenHinh'];
              $Gia = $response['Gia'];
            ?> 
                <a href="./detail-page.php?product_detail_id=<?php echo $MSHH?>"  class="meal__item">
                  <div class="meal__image">
                  <img src="<?php echo 'http://localhost/ct428/admin/' . $TenHinh . '' ?>" width="200" height="150"/>
                  </div>
                  <div class="meal__more">
                    <div class="meal__title"><?php echo $TenHH?></div>
                    <div class="meal__price"><span>Giá: </span><?php echo $Gia?></div>
                  </div>
              </a>
            <?php
            }
          }
          ?>
          </div>
        </div>
        <div class="meal">
          <h2>Party: MÓN CHIÊN NƯỚNG - HẤP DẪN - 60 PHÚT</h2>
          <div class="meal__list">
          <?php 
          $sql_show_list4 = "SELECT * from hanghoa,hinhhanghoa WHERE hanghoa.MaLoaiHang = 36 AND hanghoa.MSHH = hinhhanghoa.MSHH ";
          $show_list4 = mysqli_query($conn, $sql_show_list4);
          if ($show_list4->num_rows > 0) {
            while ($response = mysqli_fetch_array($show_list4)) { 
              $MSHH = $response['MSHH'];
              $TenHH = $response['TenHH'];
              $TenHinh = $response['TenHinh'];
              $Gia = $response['Gia'];
            ?> 
                <a href="./detail-page.php?product_detail_id=<?php echo $MSHH?>"  class="meal__item">
                  <div class="meal__image">
                  <img src="<?php echo 'http://localhost/ct428/admin/' . $TenHinh . '' ?>" width="200" height="150"/>
                  </div>
                  <div class="meal__more">
                    <div class="meal__title"><?php echo $TenHH?></div>
                    <div class="meal__price"><span>Giá: </span><?php echo $Gia?></div>
                  </div>
              </a>
            <?php
            }
          }
          ?>
          </div>
        </div>
        <div class="meal">
          <h2>Party: MÓN NẤU - KỲ CÔNG - 60 PHÚT</h2>
          <div class="meal__list">
          <?php 
          $sql_show_list5 = "SELECT * from hanghoa,hinhhanghoa WHERE hanghoa.MaLoaiHang = 37 AND hanghoa.MSHH = hinhhanghoa.MSHH ";
          $show_list5 = mysqli_query($conn, $sql_show_list5);
          if ($show_list5->num_rows > 0) {
            while ($response = mysqli_fetch_array($show_list5)) { 
              $MSHH = $response['MSHH'];
              $TenHH = $response['TenHH'];
              $TenHinh = $response['TenHinh'];
              $Gia = $response['Gia'];
            ?> 
                <a href="./detail-page.php?product_detail_id=<?php echo $MSHH?>"  class="meal__item">
                  <div class="meal__image">
                  <img src="<?php echo 'http://localhost/ct428/admin/' . $TenHinh . '' ?>" width="200" height="150"/>
                  </div>
                  <div class="meal__more">
                    <div class="meal__title"><?php echo $TenHH?></div>
                    <div class="meal__price"><span>Giá: </span><?php echo $Gia?></div>
                  </div>
              </a>
            <?php
            }
          }
          ?>
          </div>
        </div>
      </div>
    <?php include "./footer.php"?>
    </div>
    <script
      type="module"
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
    ></script>
    <script
      nomodule
      src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
    ></script>
  </body>
</html>
