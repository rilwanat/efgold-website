<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Ensure PHPMailer is installed via Composer

// Set CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Check if the request is POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
    exit;
}

// Validate and retrieve form data
$companyName = $_POST['company_name'] ?? '';
$address = $_POST['address'] ?? '';
$phoneNumber = $_POST['phone_number'] ?? '';
$email = $_POST['email'] ?? '';
$contactName = $_POST['contact_name'] ?? '';
$remark = $_POST['remark'] ?? '';
$productsOfInterest = $_POST['prodcts_of_interest'] ?? '';

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Invalid email address"]);
    exit;
}

// Initialize PHPMailer
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'mail.efgold.net'; // SMTP Server
    $mail->SMTPAuth = true;
    $mail->Username = 'hello@efgold.net'; // SMTP Username
    $mail->Password = '6jD~[I.M1s4b'; // Use your email password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL Encryption
    $mail->Port = 465; // SMTP Port

    $mail->setFrom('hello@efgold.net', 'EF Gold');
    $mail->addAddress('info@efgold.net'); // Recipient email
    $mail->addBCC('bcc.gegbuchulam@gmail.com');


    // Email Subject & Body
    $mail->Subject = 'EF Gold Contact Form Submission';
    $mail->Body = "Company Name: $companyName\nAddress: $address\nPhone: $phoneNumber\nEmail: $email\nContact Name: $contactName\nRemark: $remark\nProducts of Interest: $productsOfInterest";

    // Handle file attachment
    if (!empty($_FILES['upload_file']['name'])) {
        $fileTmpPath = $_FILES['upload_file']['tmp_name'];
        $fileName = $_FILES['upload_file']['name'];

        if (move_uploaded_file($fileTmpPath, __DIR__ . "/uploads/" . $fileName)) {
            $mail->addAttachment(__DIR__ . "/uploads/" . $fileName);
        } else {
            echo json_encode(["success" => false, "message" => "File upload failed"]);
            exit;
        }
    }

    // Send the email
    $mail->send();
    echo json_encode(["success" => true, "message" => "Message Sent"]);
} catch (Exception $e) {
    echo json_encode(["success" => false, "message" => "Mailer Error: " . $mail->ErrorInfo]);
}
?>
