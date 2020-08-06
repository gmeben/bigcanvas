<?php
if ($_REQUEST['submit']) {
    print_r($_REQUEST);
    return;
}

$x = intval($_REQUEST['x']);
$y = intval($_REQUEST['y']);
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