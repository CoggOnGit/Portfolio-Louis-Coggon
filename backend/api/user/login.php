<?php

//Call API header
require_once '../../config/request_config.php';

//Connect to the database
require_once '../../config/dbconfig.php';

//Output values
function createResponse($status, $message, $data = []) 
{
    $response = 
    [
        'status' => $status,
        'message' => $message,
        'data' => $data
    ];
    return json_encode($response);
}

//Encrypt
function xorEncrypt($input) 
{

    return base64_encode($input);
}

//Processing API requests
if($_SERVER['REQUEST_METHOD'] == 'POST') {

    //Check and process entered data
    $data = json_decode(file_get_contents('php://input'), true);
    if($data) 
    {

        $username = isset($data['username']) ? $data['username'] : '';
        $password = isset($data['password']) ? $data['password'] : '';

        if (!$data || empty($data['username']) || empty($data['password'])) 
        {
            echo createResponse('error', 'Missing required fields.', []);
            exit;
        }

        $username = $data['username'];
        $password = $data['password'];
       
        $sql = "SELECT * FROM user WHERE username = :username";
        $query = $conn->prepare($sql);
        $query->bindParam(':username', $username, PDO::PARAM_STR);
        $query->execute();
        $row = $query->fetch(PDO::FETCH_ASSOC);
        
        $password_hash = $row['password'];
        if(password_verify($password, $password_hash))
        {
            session_start();
            $_SESSION['username'] = $row['username'];
            $username = $_SESSION['username'];
            echo createResponse('success', 'Logged in successfully.', ['username' => $_SESSION['username']]);
        }
        else 
        {
            echo createResponse('error', "Incorrect login information.", []);
            exit;
        }
    } 
    else 
    {
        echo createResponse('error', 'Wrong request.', []);
        exit;
    }

}

?>