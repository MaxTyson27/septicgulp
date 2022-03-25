<?php

$recepient = "iosmax@vk.com";
$siteName = "Септик.сайт";
$quiestion1 = 'Сколько человек будет проживать в доме?';
$quiestion2 = 'Как долго планируете жить в доме?';
$quiestion3 = 'Где планируете установить септик?';
$quiestion4 = 'Какой тип грунта на вашем участке?';
$quiestion5 = 'Какой уровень грунтовых вод на вашем участке?';
$quiestion6 = 'Куда бы вы хотели выводить очищенную воду?';

$questionOneRadio = trim($_POST["people"]);
$questionTwoRadio = trim($_POST["live"]);
$questionThreeRadio = trim($_POST["home"]);
$questionFourRadio = trim($_POST["type"]);
$questionFiveRadio = trim($_POST["level"]);
$questionSixRadio = trim($_POST["clear"]);
$phone = trim($_POST["phone"]);
$name = trim($_POST["name"]);
$message = "$quiestion1: $questionOneRadio\n$quiestion2: $questionTwoRadio\n$quiestion3: $questionThreeRadio\n$quiestion4: $questionFourRadio\n$quiestion5: $questionFiveRadio\n$quiestion6: $questionSixRadio\nТелефон: $phone\nИмя: $name\nПочта: $email";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>


