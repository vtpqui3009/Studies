<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Trang quản lí</title>
    <link rel="stylesheet" href="../assets/css/admin-page.css" />
    <link rel="stylesheet" href="../bootstrap//css//bootstrap.css" />
  </head>
  <body>

<div class="sidebar">
        <div class="sidebar-logo">
          <a href="./admin-page.php" 
            ><img src="../assets//images//logo.png" alt=""
          /></a>
        </div>
        <div class="sidebar-list">
          <a href="./admin-page.php" class="sidebar-item">
            Đơn hàng đang chờ
          </a>
          <div class="sidebar-accordion">
            <div class="sidebar-accordion__header">
              <span>Quản lý nhân viên</span>
              <ion-icon
                name="add-outline"
                class="sidebar-accordion__icon"
              ></ion-icon>
            </div>
            <div class="sidebar-accordion__content">
              <a
                href="./add-employee.php" class="sidebar-item sidebar-item__staff-content"
              
              >
              Thêm nhân viên
              </a>
              <a
              href="./manage-employee.php"  class="sidebar-item sidebar-item__staff-content"
              
              >
                Danh sách nhân viên
              </a>
            </div>
          </div>
          <div class="sidebar-accordion">
            <div class="sidebar-accordion__header">
              <span>Quản lý hàng hóa</span>
              <ion-icon
                name="add-outline"
                class="sidebar-accordion__icon"
              ></ion-icon>
            </div>
            <div class="sidebar-accordion__content">
            <a
              href="./add-product-type.php"  class="sidebar-item sidebar-item__staff-content"
              
              >
                Thêm loại hàng hóa
              </a>
              <a
              href="./add-product-image.php"  class="sidebar-item sidebar-item__staff-content"
              
              >
                Thêm hình hàng hóa
              </a>
              <a
                href="./add-product.php"  class="sidebar-item sidebar-item__staff-content"
              
              >
                Thêm hàng hóa
              </a>
              <a
               href="./manage-product.php" class="sidebar-item sidebar-item__staff-content"
              
              >
                Danh sách hàng hóa
              </a>
            </div>
          </div>
          <a href="./manage-customer.php" class="sidebar-item" >Quản lý khách hàng</a>
          <a href="./manage-orders.php" class="sidebar-item" >Quản lý đơn hàng</a>
        </div>
</div>

  </body>
</html>