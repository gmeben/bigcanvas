<?php

$x = intval($_REQUEST['x']);
$y = intval($_REQUEST['y']);

if ($_REQUEST['submit']) {
    // Save data to Firestore database
    $data = $_POST['data'];
    $key = "$x,$y";
    $filename = 'tmp/' . $key . '-' . rand()%100;
    file_put_contents($filename, json_encode($key));

    $command = "python save.py '$x' '$y' '$filename' 2>&1";

    if (substr(php_uname(), 0, 7) == "Windows") {
        // Windows
        $result = pclose(popen("start /B " . $command, "r"));
    } else {
        // Linux
        $result = trim(shell_exec($command));
    }

    if ($result != 1) {
        die("Error saving. $result | $command<hr>");
    }
    print "<script>window.location = 'index.php'</script>";
    return;
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <title>bigcanvas PHP | draw</title>
    <link rel="stylesheet" type="text/css" href="/pickr/dist/themes/classic.min.css">
    <link rel="stylesheet" type="text/css" href="/assets/core.css?v=<?=filemtime('assets/core.css')?>">
</head>
<body>
    <h1>bigcanvas PHP | Draw</h1>
    <nav>
        <a href="/">Home</a>
        <button onclick="save(<?=$x?>, <?=$y?>)">Save and Exit</a>
    </nav>
    <main>
        <canvas id="canvas" width="500" height="500"></canvas>
        <div id="pickr"></div>
    </main>
    <script src="/assets/jquery-3.5.1.js"></script>
    <script src="/pickr/dist/pickr.min.js"></script>
    <script src="/assets/draw.js"></script>
</body>
</html>