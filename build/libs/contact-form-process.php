<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require 'vendor/autoload.php'; // เรียกใช้ PHPMailer

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$errorMSG = "";

// รับค่าจาก form
$contact_name = $_POST["contact_name"];
$business_type = $_POST["business_type"];
$email = $_POST["email"];
$country_code = $_POST["country_code"];
$phone = $_POST["phone"];
$message = $_POST["message"];
$notRobot = isset($_POST["notRobot"]) ? $_POST["notRobot"] : 0;

// ====== Validation ======
if (empty($contact_name)) {
    $errorMSG .= "Name is required. ";
}
if (empty($business_type)) {
    $errorMSG .= "Business type is required. ";
}
if (empty($email)) {
    $errorMSG .= "Email is required. ";
}
if (empty($country_code) || empty($phone)) {
    $errorMSG .= "Phone number is required. ";
}
if ($notRobot != 1) {
    $errorMSG .= "Please confirm you are not a robot. ";
}

if (!empty($errorMSG)) {
    echo $errorMSG;
    exit;
}

$Body = "";
$Body .= "Contact Name: " . $contact_name . "\n";
$Body .= "Business Type: " . $business_type . "\n";
$Body .= "Email: " . $email . "\n";
$Body .= "Phone: " . $country_code . " " . $phone . "\n";
$Body .= "Message: " . $message . "\n";

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'win07-mail.zth.netdesignhost.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'admin@ws777.co.th';
    $mail->Password = 'Ws11223344!';
    $mail->SMTPSecure = 'ssl';   // เปลี่ยนจาก 'tls' เป็น 'ssl'
    $mail->Port = 465;  

    $mail->setFrom('admin@ws777.co.th', 'Contact Form');
    $mail->addAddress('augkarapon.au@gmail.com');
    $mail->addReplyTo($email, $contact_name);

    $mail->Subject = 'Contact Form Submission';
    $mail->Body    = $Body;

    $mail->send();
    echo 'success';
} catch (Exception $e) {
    echo "Mailer Error: " . $mail->ErrorInfo;
}
?>
