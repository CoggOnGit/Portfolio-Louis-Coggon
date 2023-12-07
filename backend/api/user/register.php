<?php

//Call API header
require_once '../../config/request_config.php';

//Connect to the database
require_once '../../config/dbconfig.php';

//Output values
function createResponse($status, $message, $data = []) 
{
    $response = [
        'status' => $status,
        'message' => $message,
        'data' => $data
    ];
    return json_encode($response);
}

//Processing API requests
if($_SERVER['REQUEST_METHOD'] == 'POST') 
{
    //Check and process entered data
    $data = json_decode(file_get_contents('php://input'), true);
    if($data) 
    {
        $username = isset($data['username']) ? $data['username'] : '';
        $password = isset($data['password']) ? $data['password'] : '';

        // Hash the password
        $encrypted_password = password_hash($password, PASSWORD_ARGON2ID, [
            'memory_cost' => 2048,
            'time_cost'   => 4,
            'threads'     => 2,
        ]);

        // Save the username and hashed password to the database
        try {
            saveUser($conn, $username, $encrypted_password);
            echo createResponse('success', 'Account registered successfully.', [
                'username' => $username,
                'password' => $encrypted_password,
            ]);
        } catch (Exception $e) {
            echo createResponse('error', $e->getMessage());
        }
    } 
    else 
    {
        echo createResponse('error', 'Wrong request.', []);
    }
}

// Save the user to the database
function saveUser($connection, $username, $password) {
    $query = $connection->prepare("INSERT INTO user (username, password) VALUES (:username, :password)");
    $query->bindParam(':username', $username, PDO::PARAM_STR);
    $query->bindParam(':password', $password, PDO::PARAM_STR);
    $query->execute();
}

?>