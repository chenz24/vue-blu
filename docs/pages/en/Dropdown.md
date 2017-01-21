## Dropdown

A dropdown list.

::: demo
<summary>
  #### Examples
  * The dropdown component is used with the menu component,put the dropdown list in `slot='content'`
</summary>

```html
<dropdown>
  <button class="button is-primary">Basic Dropdown!</button>
  <div slot="content">
    <menus>
      <menu-item icon="user" to="/components/menu/submenu2">Members</menu-item>
      <menu-item icon="ticket">Tickets</menu-item>
      <menu-item icon="lock">Settings</menu-item>
      <div class="divider"></div>
      <menu-item icon="">Sign out</menu-item>
    </menus>
  </div>
</dropdown>
```
:::

::: demo
<summary>
  #### Multilevel
  * The menu has multiple levels.
</summary>

```html
<dropdown>
  <a class="button is-primary">
    <span>Dropdown Menu</span>
    <span class="icon is-small">
      <i class="fa fa-angle-down"></i>
    </span>
  </a>
  <div slot="content">
    <menus>
      <menu-item>Members</menu-item>
      <menu-item>Tickets</menu-item>
      <menu-item>Articles</menu-item>
      <menu-item>
        <span>Settings</span>
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
  #### Trigger Mode
  * Sets Trigger Mode by `trigger`
</summary>

```html
<dropdown trigger="hover">
  <a class="button is-white">
    <span>Dropdown Menu</span>
      <span class="icon is-small">
      <i class="fa fa-angle-down"></i>
    </span>
  </a>
  <div slot="content">
    <menus>
      <menu-item icon="user">Members</menu-item>
      <menu-item icon="ticket">Tickets</menu-item>
      <menu-item icon="lock">Settings</menu-item>
      <div class="divider"></div>
      <menu-item icon="">Sign out</menu-item>
    </menus>
  </div>
</dropdown>
```
:::


### API

| Properties        | Description           | Type               | Default       |
|------------|----------------|--------------------|--------------|
| trigger    | trigger mode,accepted `click` `hover`   | String | `click`  |
