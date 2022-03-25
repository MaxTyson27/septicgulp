<?php

$recepient = "iosmax@vk.com";
$siteName = "Септик.сайт";

$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$name = trim($_POST["name"]);
$message = "Телефон: $phone\nИмя: $name\nПочта: $email";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>