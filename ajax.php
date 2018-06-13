<?php

include('src/important-people.php');

header('Content-Type: application/json');
echo json_encode($importantPeople);