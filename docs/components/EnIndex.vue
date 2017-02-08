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
      <div class="hero-body">
        <div class="container">
          <div class="column is-vcentered">
            <div class="">
              <p class="has-text-centered logo-icon"><img src="../assets/logo-icon.png" width="100"></p>
              <p class="title has-text-centered">Vue-Blu</p>
              <p class="has-text-centered">A flexible and powerful UI components library for developing fast and powerful web application</p>
            </div>
          </div>
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
  </div>
</template>
<script>
import SideMenu from './SideMenuEn';

export default {
  components: { SideMenu },
};
</script>
<style lang="scss">
  .logo-icon{
    margin-top: 40px;
    margin-bottom: 30px;
    img{
      max-width: 150px;
    }
  }
  #app{

    .is-brand{
      img{
        max-height: 30px;
      }
    }
  }
  .list-group{

    .list-group-item {
      position: relative;
      display: block;
      padding: 5px 0px;
    }
  }
</style>
