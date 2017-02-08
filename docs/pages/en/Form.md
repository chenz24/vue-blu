## Form

All generic form controls, designed for consistency. For more information please refer to [http://bulma.io/documentation/elements/form/](http://bulma.io/documentation/elements/form/)

### Examples

::: demo
<summary>
  #### Basic
  * When combining several controls in a form, use the .control class as a container, to keep the spacing consistent.
  * `.label` `.input` `.textarea` `.select` `.checkbox` `.radio` `.button` `.help` form controls classes are supported
</summary>

```html
<label class="label">Name</label>
<p class="control">
  <input class="input" type="text" placeholder="Text input">
</p>
<label class="label">Username</label>
<p class="control has-icon has-icon-right">
  <input class="input is-success" type="text" placeholder="Text input" value="bulma">
  <i class="fa fa-check"></i>
  <span class="help is-success">This username is available</span>
</p>
<label class="label">Email</label>
<p class="control has-icon has-icon-right">
  <input class="input is-danger" type="text" placeholder="Email input" value="hello@">
  <i class="fa fa-warning"></i>
  <span class="help is-danger">This email is invalid</span>
</p>
<label class="label">Subject</label>
<p class="control">
  <span class="select">
    <select>
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </span>
</p>
<label class="label">Message</label>
<p class="control">
  <textarea class="textarea" placeholder="Textarea"></textarea>
</p>
<p class="control">
  <label class="checkbox">
    <input type="checkbox">
    Remember me
  </label>
</p>
<p class="control">
  <label class="radio">
    <input type="radio" name="question">
    Yes
  </label>
  <label class="radio">
    <input type="radio" name="question">
    No
  </label>
</p>
<p class="control">
  <button class="button is-primary">Submit</button>
  <button class="button is-link">Cancel</button>
</p>
```
:::

#### Colors

::: demo
<summary>
  #### colors
  * `is-primary` `is-info` `is-success` `is-warning` `is-danger`
</summary>

```html
<p class="control">
  <input class="input is-primary" type="text" placeholder="Primary input">
</p>
<p class="control">
  <input class="input is-info" type="text" placeholder="Info input">
</p>
<p class="control">
  <input class="input is-success" type="text" placeholder="Success input">
</p>
<p class="control">
  <input class="input is-warning" type="text" placeholder="Warning input">
</p>
<p class="control">
  <input class="input is-danger" type="text" placeholder="Danger input">
</p>
```
:::

#### Size

::: demo
<summary>
  #### size
  * effective for `input` and `select`, `is-small` `is-medium` `is-large`
</summary>

```html
<p class="control has-icon">
  <input class="input is-small" type="email" placeholder="Email">
  <i class="fa fa-envelope"></i>
</p>
<p class="control has-icon">
  <input class="input" type="email" placeholder="Email">
  <i class="fa fa-envelope"></i>
</p>
<p class="control has-icon">
  <input class="input is-medium" type="email" placeholder="Email">
  <i class="fa fa-envelope"></i>
</p>
<p class="control has-icon">
  <input class="input is-large" type="email" placeholder="Email">
  <i class="fa fa-envelope"></i>
</p>
```
:::

#### State

::: demo
<summary>
  #### state
  * loading or disabled `is-loading` `is-disabled`
</summary>

```html
<p class="control is-loading">
  <input class="input" type="text" placeholder="Loading input">
</p>

<p class="control">
  <input class="input" type="text" placeholder="Disabled input" disabled>
</p>
<p class="control">
  <textarea class="textarea" placeholder="Disabled textarea" disabled></textarea>
</p>
<p class="control">
  <label class="checkbox is-disabled">
    <input type="checkbox" disabled>
    Remember me
  </label>
</p>
<p class="control">
  <label class="radio is-disabled">
    <input type="radio" name="question" disabled>
    Yes
  </label>
  <label class="radio is-disabled">
    <input type="radio" name="question" disabled>
    No
  </label>
</p>
<p class="control">
  <button class="button is-primary" disabled>Submit</button>
  <button class="button" disabled>Cancel</button>
</p>

```
:::

#### Icon With Font Awesome

::: demo
<summary>
  #### Icon
  * Setting icon by `has-icon` class
</summary>

```html
<p class="control has-icon">
  <input class="input" type="email" placeholder="Email">
  <i class="fa fa-envelope"></i>
</p>
<p class="control has-icon">
  <input class="input" type="password" placeholder="Password">
  <i class="fa fa-lock"></i>
</p>
<p class="control">
  <button class="button is-success">
    Login
  </button>
</p>

<p class="control has-icon has-icon-right">
  <input class="input is-small" type="email" placeholder="Email">
  <i class="fa fa-check"></i>
</p>
```
:::


#### Addons Form addons

::: demo
<summary>
  #### addons
  * If you want to attach controls together, use the `has-addons` modifier on the control container
  * Use the is-expanded modifier on the element you want to fill up the remaining space.
  * Use the `has-addons-centered` or the `has-addons-right` modifiers to alter the alignment.
</summary>

```html
<p class="control has-addons">
  <input class="input" type="text" placeholder="Find a repository">
  <a class="button is-info">
    Search
  </a>
</p>
<!-- happy divider line -->
<p class="control has-addons">
  <span class="select">
    <select>
      <option>$</option>
      <option>£</option>
      <option>€</option>
    </select>
  </span>
  <input class="input is-expanded" type="text" placeholder="Amount of money">
  <a class="button">
    Transfer
  </a>
</p>

<p>Alignment</p>
<p class="control has-addons has-addons-centered">
  <span class="select">
    <select>
      <option>$</option>
      <option>£</option>
      <option>€</option>
    </select>
  </span>
  <input class="input" type="text" placeholder="Amount of money">
  <a class="button is-primary">
    Transfer
  </a>
</p>
<p class="control has-addons has-addons-right">
  <span class="select">
    <select>
      <option>$</option>
      <option>£</option>
      <option>€</option>
    </select>
  </span>
  <input class="input" type="text" placeholder="Amount of money">
  <a class="button is-primary">
    Transfer
  </a>
</p>
```
:::

#### Form group

::: demo
<summary>
  #### form group
  * If you want to group controls together, use the is-grouped modifier on the control container.
</summary>

```html
<div class="control is-grouped">
  <p class="control is-expanded">
    <input class="input" type="text" placeholder="Find a repository">
  </p>
  <p class="control">
    <a class="button is-info">
      Search
    </a>
  </p>
  <p class="control has-addons has-addons-right">
  <span class="select">
    <select>
      <option>$</option>
      <option>£</option>
      <option>€</option>
    </select>
  </span>
    <input class="input" type="text" placeholder="Amount of money">
    <a class="button is-primary">
      Transfer
    </a>
  </p>
</div>
```
:::


#### Horizontal form

::: demo
<summary>
  #### horizontal form
  * use the `is-horizontal` modifier on the `control` container.
  * `control-label` for the side label
  * `control` for the input/select/textarea container
</summary>

```html
<div class="control is-horizontal">
  <div class="control-label">
    <label class="label">From</label>
  </div>
  <div class="control is-grouped">
    <p class="control is-expanded">
      <input class="input" type="text" placeholder="Name">
    </p>
    <p class="control is-expanded">
      <input class="input" type="email" placeholder="Email">
    </p>
  </div>
</div>
<div class="control is-horizontal">
  <div class="control-label">
    <label class="label">Subject</label>
  </div>
  <div class="control">
    <div class="select is-fullwidth">
      <select>
        <option>General enquiry</option>
      </select>
    </div>
  </div>
</div>
<div class="control is-horizontal">
  <div class="control-label">
    <label class="label">Question</label>
  </div>
  <div class="control">
    <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
  </div>
</div>
```
:::

