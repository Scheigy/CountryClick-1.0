    <section class="col-lg-offset-1 col-lg-5">
      <aside>
        <form class="form-horizontal" role="form" action="inscription.php" method="post">
          <h1>Inscription</h1><br />
          <div class="form-group">
            <label for="inputPseudo" class="col-sm-3 control-label">Pseudo</label>
            <div class="col-sm-8">
              <input type="text" name="pseudo" class="form-control" id="inputEmail3" placeholder="Pseudo" required>
            </div>
          </div>
          <div class="form-group">
            <label for="inputEmail" class="col-sm-3 control-label">Email</label>
            <div class="col-sm-8">
              <input type="email" name="mail" class="form-control" id="inputEmail3" placeholder="Email" required>
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
              <button type="submit" class="btn btn-primary">S'inscrire</button>
            </div>
          </div>
        </form>
        <form class="form-horizontal" role="form" action="connexion.php" method="post">
          <h1>Connexion</h1><br />
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
                  <input type="checkbox">Se souvenir de moi
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
      </aside>
    </section>