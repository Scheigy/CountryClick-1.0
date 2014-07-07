<?php 
include("header.php"); 

?>
<div class="container">
  <div class="row">
    <section id="desc" class="col-lg-6">
      <h1>Bienvenue sur Country Click</h1>
      <p>
        Notre projet est un jeu par navigateur inspiré de <a href="http://orteil.dashnet.org/cookieclicker/" title="CookieClicker">CookieClicker</a> ou 
        <a href="http://drmeth.com/" title="DrMeth">DrMeth.</a> 
        Vous contrôlerez un État et devrez cliquer pour récolter des Dollars ($). 
        Au départ, 1 clic équivaudra à un dollar.<br/><br/>
        Par la suite, il vous sera possible d'acheter des travailleurs/bâtiments pour augmenter votre production de dollar par seconde. A chaque fois qu'un élément 
        sera acheté, son prix augmentera. Evidemment, plus vous posséderez de dollar, plus il vous sera capable d'acheter de meilleurs éléments (ouvrier, puis cadre, puis une usine etc...).<br/><br/>
        Vous devrez également investir les dollars dans des améliorations pour les travailleurs/bâtiments, toujours dans le but d'augmenter la production du bâtiment 
        concerné. Trois paliers d'améliorations seront disponibles, qui auront pour effet de doubler la production totale de tous les éléments du bâtiment en question. 
        Après respectivement 10, 50 et 100 éléments d'un bâtiment, l'amélioration sera disponible à l'achat.<br/>
        Il sera également possible d'augmenter le nombre de dollar gagné par clic avec d'autres améliorations.<br/><br/>
        Le jeu fonctionnera avec un système de sauvegarde par compte utilisateur.<br/>
      </p>
      <div id="changelog"><a href="changelog.php">Changelog v1.3 (maj 02/07/14)</a></div>
    </section>
    <?php 
    if (!isset($_SESSION['pseudo']))
      include_once("form.php");
    else
      include_once("already_connect.php");
    ?>
  </div>
</div>
<?php include_once("footer.php"); ?>
</body>
</html>