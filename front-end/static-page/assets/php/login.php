<?php include_once "api-request.php";

/**
 * Author: Ramon Jr. Yniguez
 * Purpose: Verify form info, and issue request
 * Date: Apr 16, 2020
 */
$errorMSG = "";

if (empty($_POST["Username"])) {
    $errorMSG = "Username is required ";
} else {
    $email = $_POST["Username"];
}

if (empty($_POST["Email"])) {
    $errorMSG = "Email is required ";
} else {
    $email = $_POST["Email"];
}

if (empty($_POST["Password"])) {
    $errorMSG = "Password is required ";
} else {
    $password = $_POST["Password"];
}
if (empty($_POST["cmPassword"])) {
    $errorMSG = "Confirm Password does not match ";
} else {
    $cmpassword = $_POST["cmPassword"];
}

// send request
$data_array =  array(
    "Username" => $Username,
    "Email" => $email,
    "Password" => $password,
    "cmPassword" => $cmpassword
);
$make_call = callAPI('POST', 'http://localhost:23456/api', json_encode($data_array));
$response = json_decode($make_call, true);
$errors   = $response['response']['errors'];
$data     = $response['response']['data'][0];

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}
