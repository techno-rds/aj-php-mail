<?php
//$postdata = file_get_contents("php://input");
if($_POST)
{
    $data = $_POST;
    file_put_contents('file.txt','Write',FILE_APPEND | LOCK_EX);
} else {
    echo 'Error';
}
function pr($arr)
{
    echo '<pre>';print_r($arr);echo '</pre>';
}
?>