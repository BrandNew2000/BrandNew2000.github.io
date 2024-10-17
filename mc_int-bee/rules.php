<?php
// Specify the file path
$filePath = 'rules.pdf';

// Check if the file exists
if (file_exists($filePath)) {
    // Set headers to trigger the file download
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="'.basename($filePath).'"');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($filePath));
    
    // Read the file and output its content
    readfile($filePath);
    
    // Ensure that no further output is sent
    exit;
} else {
    // Handle the error if the file doesn't exist
    http_response_code(404);
    echo 'File not found.';
}
?>
