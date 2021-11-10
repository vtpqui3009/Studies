

<?php 
include "../config/database.php";
include "./header.php";
include "./sidebar.php";
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Trang cập nhật thông tin đơn hàng</title>
    <link rel="stylesheet" href="../assets//css//admin-page.css" />
    <link rel="stylesheet" href="../bootstrap//css//bootstrap.css" />
    <link rel="stylesheet" href="../assets//css//admin-page.css" />
    <link rel="stylesheet" href="../assets//css//header.css" />
  </head>
  <body>
    <div class="employee-form">
      <header class="employee-form__header">
        <h2>Cập nhật đơn hàng</h2>
      </header>
      <form class="form-control-sm">
        <div class="modal__content">
          <div class="mb-3">
            <label for="order-customer-name" class="form-label">Tên KH</label>
            <input type="text" class="form-control" id="order-customer-name" />
          </div>
          <div class="mb-3">
            <label for="order-product-name" class="form-label">Tên hàng hóa</label>
            <input type="text" class="form-control" id="order-product-name" />
          </div>
          <div class="mb-3">
            <label for="order-date" class="form-label">Ngày đặt hàng</label>
            <input type="text" class="form-control" id="order-date" />
          </div>
          <div class="mb-3">
            <label for="receive-date" class="form-label">Ngày giao hàng</label>
            <input type="text" class="form-control" id="receive-date" />
          </div>
          <div class="mb-3">
            <label for="order-customer-address" class="form-label">Địa chỉ</label>
            <input type="text" class="form-control" id="order-customer-address" />
          </div>
          <div class="mb-3">
            <label for="order-status" class="form-label">Trạng thái ĐH</label>
            <input type="text" class="form-control" id="order-status" />
          </div>
        </div>
        <footer class="modal-footer">
          <button type="button" class="btn btn-primary">Cập nhật</button>
        </footer>
      </form>
</div>
  </body>
</html>
