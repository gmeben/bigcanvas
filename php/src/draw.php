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
    <link rel="stylesheet" type="text/css" href="pickr/dist/themes/classic.min.css">
    <link rel="stylesheet" type="text/css" href="core.css?v=<?=filemtime('core.css')?>">
</head>
<body>
    <h1>bigcanvas PHP | Draw</h1>
    <nav>
        <a href="/">Home</a>
    </nav>
    <main>
        <canvas id="canvas" width="500" height="500" style="border: 1px solid #000"></canvas>
        <div id="pickr"></div>
    </main>
    <script src="jquery-3.5.1.js"></script>
    <script src="pickr/dist/pickr.min.js"></script>
    <script src="draw.js"></script>
</body>
</html>