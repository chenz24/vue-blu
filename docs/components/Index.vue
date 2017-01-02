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
                <!--<a class="button is-primary is-inverted" href="">-->
                  <!--<span class="icon"><i class="fa fa-download"></i></span>-->
                  <!--<span>Download</span>-->
                <!--</a>-->
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
            <aside class="list-group">
              <router-link to="/" class="list-group-item" exact>快速上手</router-link>
              <router-link to="/changelog" class="list-group-item" exact>更新日志</router-link>
              <router-link to="/components" class="list-group-item" exact>Components</router-link>
              <div class="menu">
                <p class="menu-label">Basic</p>
                <ul class="menu-list">
                  <li><router-link to="/components/helper" exact>Helper 帮助说明</router-link></li>
                  <li><router-link to="/components/layout" exact>Layout 布局</router-link></li>
                  <li><router-link to="/components/button" exact>Button 按钮组</router-link></li>
                  <li><router-link to="/components/icon" exact>Icon 图标库</router-link></li>
                  <li><router-link to="/components/transition" exact>Transition 过渡动画</router-link></li>
                </ul>

                <p class="menu-label">Navigation</p>
                <ul class="menu-list">
                  <li><router-link to="/components/affix" exact>Affix 固钉</router-link></li>
                  <li><router-link to="/components/scrollto" exact>ScrollTo 滚动工具</router-link></li>
                  <li><router-link to="/components/breadcrumb" exact>Breadcrumb 面包屑</router-link></li>
                  <li><router-link to="/components/dropdown" exact>Dropdown 下拉菜单</router-link></li>
                  <li><router-link to="/components/pagination" exact>Pagination 分页</router-link></li>
                  <li><router-link to="/components/menu" exact>Menu 菜单</router-link></li>
                  <li><router-link to="/components/steps" exact>Steps 步骤条</router-link></li>
                  <li><router-link to="/components/tabs" exact>Tabs 标签页</router-link></li>
                </ul>

                <p class="menu-label">View</p>
                <ul class="menu-list">
                  <li><router-link to="/components/alert" exact>Alert 警告框</router-link></li>
                  <li><router-link to="/components/aside" exact>Aside 侧边模态框</router-link></li>
                  <li><router-link to="/components/collapse" exact>Collapse 折叠面板</router-link></li>
                  <li><router-link to="/components/modal" exact>Modal 模态框</router-link></li>
                  <!--<li><a href="#">Panel</a></li>-->
                  <li><router-link to="/components/notify" exact>Notify 通知</router-link></li>
                  <li><router-link to="/components/tag" exact>Tag 标签</router-link></li>
                  <li><router-link to="/components/progress" exact>Progress 进度条</router-link></li>
                  <li><router-link to="/components/popover" exact>Popover 气泡弹出框</router-link></li>
                  <li><router-link to="/components/popconfirm" exact>Popconfirm 气泡确认框</router-link></li>
                  <li><router-link to="/components/tooltip" exact>Tooltip 文字提示</router-link></li>
                  <li><router-link to="/components/timeline" exact>Timeline 时间线</router-link></li>
                  <!--<li><a href="#">Tree</a></li>-->
                  <!--<li><router-link to="/components/datatable" exact>Table 表格</router-link></li>-->
                </ul>

                <p class="menu-label">Form</p>
                <ul class="menu-list">
                  <li><router-link to="/components/form" exact>Form 表单</router-link></li>
                  <li><router-link to="/components/inputnumber" exact>InputNumber 数字输入</router-link></li>
                  <li><a href="#">Radio</a></li>
                  <li><router-link to="/components/checkbox" exact>Checkbox 复选框</router-link></li>
                  <li><router-link to="/components/switch" exact>Switch 开关</router-link></li>
                  <!--<li><a href="#">Select</a></li>-->
                  <li><router-link to="/components/datepicker" exact>DatePicker 日期选择</router-link></li>
                  <!--<li><a href="#">Upload</a></li>-->
                  <!--<li><a href="#">Rate</a></li>-->
                </ul>

              </div>
            </aside>
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
