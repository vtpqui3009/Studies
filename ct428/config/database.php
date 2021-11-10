<?php
// session_start();
// define('BASEURL', 'http://localhost/ct428/');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "QuanLyDatHang";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}

?>