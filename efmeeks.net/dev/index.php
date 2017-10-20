<?php
require 'libs/Parsedown.php';
require 'libs/ParsedownExtra.php';
$Extra = new ParsedownExtra();
$text = file_get_contents('article.md');

include ('head.html');
echo ('<article class="markdown-body">');

echo $Extra->text($text);

echo ('</article>'); ?>