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
      <div id="changelog"><a href="changelog.php">Changelog v1.2</a></div>
    </section>
    <?php 
    if (!isset($_SESSION['pseudo']))
      include("form.php");
    else
      echo '<section class="col-lg-offset-1 col-lg-5">Vous êtes déjà inscrit, cliquez sur Jouer dans le menu pour accéder au jeu !</section>';
    ?>
  </div>
</div>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-52440454-1', 'auto');
  ga('send', 'pageview');

</script>
</body>
</html>