## Menu 菜单

菜单导航

### 代码演示

::: demo
<summary>
  #### 基本
  * 通过 `label` 设置菜单组的标签
  * `icon` 设置菜单项目的图标
  * 设置 `to` 生成vue-router的链接
  * 设置 `click` 为菜单项添加点击事件,如果设置了此项 `to` 参数失效
  * `is-active` 设置菜单项是否是激活状态
  * menu 标签可嵌套
</summary>

```html
<div class="columns" style="margin-top: 20px; background-color: #f0f0f0;">
  <div class="column is-3">
    <div class="menu">
      <menus label="Administration">
        <menu-item icon="twitter">
          <span>子目录1</span>
          <menus slot="sub">
            <menu-item :to="{ path: '/components/menu/submenu1', query: { userId: 321 }}" icon="qq" :is-active="true">子子目录1</menu-item>
            <menu-item icon="google">
              <span>子子目录2</span>
              <menus slot="sub">
                <menu-item icon="home">第三级1</menu-item>
                <menu-item icon="home">第三级2</menu-item>
                <menu-item icon="home">
                  <span>第三级3</span>
                  <menus slot="sub" type="float">
                    <menu-item icon="home">第四级1</menu-item>
                  </menus>
                </menu-item>
              </menus>
            </menu-item>
          </menus>
        </menu-item>
        <menu-item icon="wechat" to="/components/menu/submenu2">子目录2</menu-item>
        <div class="divider"></div>
        <menu-item icon="facebook" to="/components/menu/submenu3"><span>子目录3</span></menu-item>
      </menus>
    </div>
  </div>
</div>
```
:::

::: demo
<summary>
  #### 完整示例
  * `is-dark` 设置黑色主题
</summary>

```html
<div class="columns" style="margin-top: 20px; background-color: #f0f0f0;">
  <div class="column is-3">
    <div class="menu is-dark">
      <menus label="内容管理">
        <menu-item icon="image">
          <span>图片</span>
          <menus slot="sub">
            <menu-item :to="{ path: '/components/menu/submenu1', query: { userId: 321 }}" icon="car" :is-active="true">汽车</menu-item>
            <menu-item icon="slack">
              <span>风景</span>
              <menus slot="sub">
                <menu-item icon="home">Picture</menu-item>
                <menu-item icon="home">Content</menu-item>
                <menu-item icon="home">
                  <span>Nav</span>
                  <menus slot="sub" type="float">
                    <menu-item icon="home">Main Nav</menu-item>
                    <menu-item icon="home">Sub Nav</menu-item>
                  </menus>
                </menu-item>
              </menus>
            </menu-item>
          </menus>
        </menu-item>
        <menu-item icon="music" to="/components/menu/submenu2">音乐</menu-item>
        <menu-item icon="file-text-o" to="/components/menu/submenu4"><span>文章</span></menu-item>
        <menu-item icon="film" to="/components/menu/submenu3"><span>视频</span></menu-item>
      </menus>
      <menus label="系统设置">
        <menu-item icon="users">会员管理</menu-item>
        <menu-item icon="ticket">工单管理</menu-item>
        <menu-item icon="lock">修改密码</menu-item>
        <div class="divider"></div>
        <menu-item icon="sign-out">退出登录</menu-item>
      </menus>
    </div>
  </div>
</div>
```
:::

### API

#### menus

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| label    | String | 菜单集合的标签 | 无    |

#### menu-item

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| icon    | 图标 | String | 无    |
| to    | vue-router的路径，同vue-router的`to`参数 | String | 无    |
| click    | 点击事件，设置此项 `to` 将失效 | Function | 无    |
| is-active | 菜单是否激活 | Boolean | false    |
