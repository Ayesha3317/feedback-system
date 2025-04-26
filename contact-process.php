<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    // Configure your email settings
    $to = "your-email@example.com";
    $headers = "From: $email";
    $emailBody = "Name: $name\nEmail: $email\nSubject: $subject\n\nMessage:\n$message";
    
    if (mail($to, $subject, $emailBody, $headers)) {
        header("Location: thank-you.html");
        exit();
    } else {
        echo "Error sending message";
    }
}
?>