<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-head">
        <div class="container">
          <nav class="nav">
            <div class="nav-left">
              <a class="nav-item is-brand" href="#"><img src="../assets/logo.png"></a>
            </div>
            <span class="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div class="nav-right nav-menu">
              <span class="nav-item">
                <a class="button is-light is-outlined" href="https://github.com/chenz24/vue-blu" target="_blank">
                  <span class="icon"><i class="fa fa-github"></i></span>
                  <span>GitHub</span>
                </a>
                <router-link class="button is-primary is-active" to="/"><span>中</span></router-link>
              </span>
            </div>
          </nav>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-2 side-nav">
            <side-menu></side-menu>
          </div>
          <div class="column is-10 markdown">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Vue-Blu</strong> by <a href="http://weibo.com/5819529452" target="_blank">Chenz</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          </p>
          <p>
            <a class="icon" href="https://github.com/chenz24/vue-blu">
              <i class="fa fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
    <scroll-to target="top"></scroll-to>
  </div>
</template>
<script>
  import SideMenu from './SideMenuEn';

  export default {
    components: { SideMenu },
  };
</script>
