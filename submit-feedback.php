<?php
include('config.php');

// Simple Sentiment Analysis
function analyzeSentiment($text) {
    $positive = ['good', 'excellent', 'happy', 'great', 'awesome'];
    $negative = ['bad', 'poor', 'terrible', 'disappointing', 'worst'];
    
    $score = 0;
    $text = strtolower($text);
    
    foreach ($positive as $word) {
        if (strpos($text, $word) !== false) $score++;
    }
    foreach ($negative as $word) {
        if (strpos($text, $word) !== false) $score--;
    }
    
    return ($score > 0) ? 'positive' : (($score < 0) ? 'negative' : 'neutral');
}

// Process Form Data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $event_id = $_POST['event_id'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $overall_rating = $_POST['overall_rating'];
    $content_rating = $_POST['content_rating'];
    $venue_rating = $_POST['venue_rating'];
    $organization_rating = $_POST['organization_rating'];
    $comments = $_POST['comments'];
    $sentiment = analyzeSentiment($comments);

    // Insert into Database
    $stmt = $conn->prepare("INSERT INTO feedback 
        (event_id, name, email, overall_rating, content_rating, 
        venue_rating, organization_rating, comments, sentiment)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    
    $stmt->bind_param("issiiiiss", 
        $event_id,
        $name,
        $email,
        $overall_rating,
        $content_rating,
        $venue_rating,
        $organization_rating,
        $comments,
        $sentiment
    );
    
    if ($stmt->execute()) {
        header("Location: thank-you.html");
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }
    
    $stmt->close();
    $conn->close();
}
?>