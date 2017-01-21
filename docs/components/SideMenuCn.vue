<template>
  <aside class="list-group">
    <router-link to="/" class="list-group-item" exact>快速上手</router-link>
    <router-link to="/customize" class="list-group-item" exact>定制化</router-link>
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
        <li><router-link to="/components/datatable" exact>Table 表格</router-link></li>
      </ul>

      <p class="menu-label">Form</p>
      <ul class="menu-list">
        <li><router-link to="/components/form" exact>Form 表单</router-link></li>
        <li><router-link to="/components/inputnumber" exact>InputNumber 数字输入</router-link></li>
        <li><router-link to="/components/radio" exact>Radio 单选框</router-link></li>
        <li><router-link to="/components/checkbox" exact>Checkbox 复选框</router-link></li>
        <li><router-link to="/components/switch" exact>Switch 开关</router-link></li>
        <!--<li><a href="#">Select</a></li>-->
        <li><router-link to="/components/datepicker" exact>DatePicker 日期选择</router-link></li>
        <!--<li><a href="#">Upload</a></li>-->
        <!--<li><a href="#">Rate</a></li>-->
      </ul>

    </div>
  </aside>
</template>
