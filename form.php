    <section class="col-lg-offset-1 col-lg-5">
      <aside>
        <form class="form-horizontal" role="form" action="connexion.php" method="post">
          <h2>Connexion</h2><br />
          <div class="form-group">
            <label for="inputPseudo" class="col-sm-3 control-label">Pseudo</label>
            <div class="col-sm-8">
              <input type="text" name="pseudo" class="form-control" id="inputEmail3" placeholder="Pseudo" required>
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword3" class="col-sm-3 control-label">Mot de passe</label>
            <div class="col-sm-8">
              <input type="password" name="password" class="form-control" id="inputPassword3" placeholder="Mot de passe" required>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-3 col-sm-9">
              <div class="checkbox">
                <label>
                  <input type="checkbox" name="setcookie">Se souvenir de moi (1 mois)
                </label>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-3 col-sm-9">
              <button type="submit" class="btn btn-primary">Se connecter</button>
            </div>
          </div>
        </form>
        <a href="form_inscription.php" title="Inscription">Pas encore inscrit ?</a>
      </aside>
    </section>