<!doctype html>
<html>
  <head>
    <title>ipme - efmeeks.net</title>
    <?php
    include ('_includes/head.html')
    ?>
  </head>
  <section class="header">
    <?php
    include ('_includes/header.html');
    ?>
  </section>
  <body>
    <script src="/_libs/js/prism.js"></script>
    <?php
    require '_libs/Parsedown.php';
    require '_libs/ParsedownExtra.php';
    $Extra = new ParsedownExtra();
    $content = file_get_contents('ipme/readme.md');
    echo $Extra->text($content);
    ?>
  </body>
</html>
  