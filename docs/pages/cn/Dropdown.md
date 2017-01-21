## Dropdown 下拉菜单

下拉菜单

::: demo
<summary>
  #### 基本
  * dropdown 组件是和 `menu` 组件搭配使用的
</summary>

```html
<dropdown>
  <button class="button is-primary">Basic Dropdown!</button>
  <div slot="content">
    <menus>
      <menu-item icon="user">会员管理</menu-item>
      <menu-item icon="ticket">工单管理</menu-item>
      <menu-item icon="lock">修改密码</menu-item>
      <div class="divider"></div>
      <menu-item icon="">退出</menu-item>
    </menus>
  </div>
</dropdown>
```
:::

::: demo
<summary>
  #### 多级菜单
  * 通过 `menu` 组件的多级菜单来实现
</summary>

```html
<dropdown>
  <a class="button is-primary">
    <span>下拉菜单</span>
    <span class="icon is-small">
    <i class="fa fa-angle-down"></i>
  </span>
  </a>
  <div slot="content">
    <menus>
      <menu-item>会员管理</menu-item>
      <menu-item>工单管理</menu-item>
      <menu-item>修改密码</menu-item>
      <menu-item>
        <span>用户中心</span>
        <menus slot="sub" type="float">
          <menu-item icon="home">Main Nav</menu-item>
          <menu-item icon="home">Sub Nav</menu-item>
        </menus>
      </menu-item>
    </menus>
  </div>
</dropdown>
```
:::

::: demo
<summary>
  #### 触发方式
  * 通过 `trigger` 设置触发方式
</summary>

```html
<dropdown trigger="hover">
  <a class="button is-white">
    <span>下拉菜单</span>
      <span class="icon is-small">
      <i class="fa fa-angle-down"></i>
    </span>
  </a>
  <div slot="content">
    <menus>
      <menu-item icon="user">会员管理</menu-item>
      <menu-item icon="ticket">工单管理</menu-item>
      <menu-item icon="lock">修改密码</menu-item>
      <div class="divider"></div>
      <menu-item icon="">退出</menu-item>
    </menus>
  </div>
</dropdown>
```
:::


### API

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| trigger    | 默认 `click`，可选 `hover`   | String | 无    |
