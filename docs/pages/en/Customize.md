## Customize Theme

Vue-Blu allows to custom themes so as to meet the  user's personalized needs.Only need the front-end build environment
supports sass compilation without the need for any other additional tools.You can configure fonts, colors, borders,
backgrounds, and so on by defining sass variables. Here's how:

#### How

1.Set the sass variables and import the entry file of the library

```javascript
$blue: #3c81df;
$turquoise: #00c0ef;
$red: #f56954;
$green: #6cc788;
$orange: #f2a654;
$purple: #926dde;
$yellow: #f39c12;
// import the entry file
@import "~vue-blu/src/scss/blu"
```

2.Import the variables file (Suppose the path is `'path/to/css/variables.scss'`)

```javascript
import Vue from 'vue'
import VueBlu from 'vue-blu'
import 'path/to/css/variables.scss'

Vue.use(VueBlu)

```

#### Variables

<table class="table is-bordered is-striped">
  <tbody><tr><th colspan="2">1. Initial variables</th></tr>

  <tr><th colspan="2">Colors</th></tr>
  <tr>
    <td width="150"><code>$black</code></td>
    <td>
      <span class="color" style="background-color: #0a0a0a;"></span>
      #0a0a0a
    </td>
  </tr>
  <tr>
    <td><code>$grey-darker</code></td>
    <td>
      <span class="color" style="background-color: #363636;"></span>
      #363636
    </td>
  </tr>
  <tr>
    <td><code>$grey-dark</code></td>
    <td>
      <span class="color" style="background-color: #4a4a4a;"></span>
      #4a4a4a
    </td>
  </tr>
  <tr>
    <td><code>$grey</code></td>
    <td>
      <span class="color" style="background-color: #7a7a7a;"></span>
      #7a7a7a
    </td>
  </tr>
  <tr>
    <td><code>$grey-light</code></td>
    <td>
      <span class="color" style="background-color: #b5b5b5;"></span>
      #b5b5b5
    </td>
  </tr>
  <tr>
    <td><code>$grey-lighter</code></td>
    <td>
      <span class="color" style="background-color: #dbdbdb;"></span>
      #dbdbdb
    </td>
  </tr>
  <tr>
    <td><code>$white</code></td>
    <td>
      <span class="color" style="background-color: #fff;"></span>
      #fff
    </td>
  </tr>
  <tr>
    <td><code>$blue</code></td>
    <td>
      <span class="color" style="background-color: #3c81df;"></span>
      #3c81df
    </td>
  </tr>
  <tr>
    <td><code>$green</code></td>
    <td>
      <span class="color" style="background-color: #6cc788;"></span>
      #6cc788
    </td>
  </tr>
  <tr>
    <td><code>$orange</code></td>
    <td>
      <span class="color" style="background-color: #f2a654;"></span>
      #f2a654
    </td>
  </tr>
  <tr>
    <td><code>$purple</code></td>
    <td>
      <span class="color" style="background-color: #926dde;"></span>
      #926dde
    </td>
  </tr>
  <tr>
    <td><code>$red</code></td>
    <td>
      <span class="color" style="background-color: #f56954;"></span>
      #f56954
    </td>
  </tr>
  <tr>
    <td><code>$turquoise</code></td>
    <td>
      <span class="color" style="background-color: #00c0ef;"></span>
      #00c0ef
    </td>
  </tr>
  <tr>
    <td><code>$yellow</code></td>
    <td>
      <span class="color" style="background-color: #f39c12;"></span>
      #f39c12
    </td>
  </tr>

  <tr><th colspan="2">Typography</th></tr>
  <tr>
    <td><code>$family-sans-serif</code></td>
    <td>"Alright Sans LP", "Avenir Next", "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Source Han Sans SC", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi MicroHei", sans-serif;</td>
  </tr>
  <tr>
    <td><code>$family-monospace</code></td>
    <td>"Inconsolata", "Consolas", "Monaco", monospace</td>
  </tr>
  <tr>
    <td><code>$size-1</code></td>
    <td>3.5rem</td>
  </tr>
  <tr>
    <td><code>$size-2</code></td>
    <td>2.75rem</td>
  </tr>
  <tr>
    <td><code>$size-3</code></td>
    <td>2rem</td>
  </tr>
  <tr>
    <td><code>$size-4</code></td>
    <td>1.5rem</td>
  </tr>
  <tr>
    <td><code>$size-5</code></td>
    <td>1.25rem</td>
  </tr>
  <tr>
    <td><code>$size-6</code></td>
    <td>14px</td>
  </tr>
  <tr>
    <td><code>$size-7</code></td>
    <td>0.75rem</td>
  </tr>
  <tr>
    <td><code>$weight-light</code></td>
    <td>300</td>
  </tr>
  <tr>
    <td><code>$weight-normal</code></td>
    <td>400</td>
  </tr>
  <tr>
    <td><code>$weight-semibold</code></td>
    <td>500</td>
  </tr>
  <tr>
    <td><code>$weight-bold</code></td>
    <td>700</td>
  </tr>

  <tr><th colspan="2">Breakpoints</th></tr>
  <tr>
    <td><code>$tablet</code></td>
    <td>769px</td>
  </tr>
  <tr>
    <td><code>$desktop</code></td>
    <td>1000px (960px + 40px container)</td>
  </tr>
  <tr>
    <td><code>$widescreen</code></td>
    <td>1192px (1152px+ 40px container)</td>
  </tr>

  <tr><th colspan="2">Miscellaneous</th></tr>
  <tr>
    <td><code>$easing</code></td>
    <td>ease-out</td>
  </tr>
  <tr>
    <td><code>$radius</code></td>
    <td>3px</td>
  </tr>
  <tr>
    <td><code>$radius-small</code></td>
    <td>2px</td>
  </tr>
  <tr>
    <td><code>$radius-large</code></td>
    <td>5px</td>
  </tr>
  <tr>
    <td><code>$speed</code></td>
    <td>86ms</td>
  </tr>
  <tr>
    <td><code>$transition-speed</code></td>
    <td>.3s</td>
  </tr>

  <tr><th colspan="2">2. Primary colors</th></tr>
  <tr>
    <td><code>$primary</code></td>
    <td>$blue</td>
  </tr>
  <tr>
    <td><code>$info</code></td>
    <td>$turquoise</td>
  </tr>
  <tr>
    <td><code>$success</code></td>
    <td>$green</td>
  </tr>
  <tr>
    <td><code>$warning</code></td>
    <td>$yellow</td>
  </tr>
  <tr>
    <td><code>$danger</code></td>
    <td>$red</td>
  </tr>
  <tr>
    <td><code>$light</code></td>
    <td>$white-ter</td>
  </tr>
  <tr>
    <td><code>$dark</code></td>
    <td>$grey-darker</td>
  </tr>

  <tr><th colspan="2">3. Generated variables</th></tr>

  <tr><th colspan="2">Invert colors</th></tr>
  <tr>
    <td><code>$primary-invert</code></td>
    <td>findColorInvert($primary)</td>
  </tr>
  <tr>
    <td><code>$info-invert</code></td>
    <td>findColorInvert($info)</td>
  </tr>
  <tr>
    <td><code>$success-invert</code></td>
    <td>findColorInvert($success)</td>
  </tr>
  <tr>
    <td><code>$warning-invert</code></td>
    <td>findColorInvert($warning)</td>
  </tr>
  <tr>
    <td><code>$danger-invert</code></td>
    <td>findColorInvert($danger)</td>
  </tr>
  <tr>
    <td><code>$light-invert</code></td>
    <td>$dark</td>
  </tr>
  <tr>
    <td><code>$dark-invert</code></td>
    <td>$light</td>
  </tr>

  <tr><th colspan="2">General colors</th></tr>
  <tr>
    <td><code>$body-background</code></td>
    <td>$grey-lighter</td>
  </tr>
  <tr>
    <td><code>$background</code></td>
    <td>$grey-lighter</td>
  </tr>
  <tr>
    <td><code>$border</code></td>
    <td>$grey-light</td>
  </tr>
  <tr>
    <td><code>$border-hover</code></td>
    <td>$grey</td>
  </tr>

  <tr><th colspan="2">Text colors</th></tr>
  <tr>
    <td><code>$text</code></td>
    <td>$grey-dark</td>
  </tr>
  <tr>
    <td><code>$text-invert</code></td>
    <td>findColorInvert($text)</td>
  </tr>
  <tr>
    <td><code>$text-light</code></td>
    <td>$grey</td>
  </tr>
  <tr>
    <td><code>$text-strong</code></td>
    <td>$grey-darker</td>
  </tr>

  <tr><th colspan="2">Code colors</th></tr>
  <tr>
    <td><code>$code</code></td>
    <td>$red</td>
  </tr>
  <tr>
    <td><code>$code-background</code></td>
    <td>$background</td>
  </tr>
  <tr>
    <td><code>$pre</code></td>
    <td>$text</td>
  </tr>
  <tr>
    <td><code>$pre-background</code></td>
    <td>$background</td>
  </tr>

  <tr><th colspan="2">Link colors</th></tr>
  <tr>
    <td><code>$link</code></td>
    <td>$primary</td>
  </tr>
  <tr>
    <td><code>$link-invert</code></td>
    <td>$primary-invert</td>
  </tr>
  <tr>
    <td><code>$link-visited</code></td>
    <td>$purple</td>
  </tr>
  <tr>
    <td><code>$link-hover</code></td>
    <td>$grey-darker</td>
  </tr>
  <tr>
    <td><code>$link-hover-border</code></td>
    <td>$grey-darker</td>
  </tr>
  <tr>
    <td><code>$link-focus</code></td>
    <td>$grey-darker</td>
  </tr>
  <tr>
    <td><code>$link-focus-border</code></td>
    <td>$primary</td>
  </tr>
  <tr>
    <td><code>$link-active</code></td>
    <td>$grey-darker</td>
  </tr>
  <tr>
    <td><code>$link-active-border</code></td>
    <td>$grey-dark</td>
  </tr>

  <tr><th colspan="2">Typography</th></tr>
  <tr>
    <td><code>$family-primary</code></td>
    <td>$family-sans-serif</td>
  </tr>
  <tr>
    <td><code>$family-code</code></td>
    <td>$family-monospace</td>
  </tr>
  <tr>
    <td><code>$size-small</code></td>
    <td>$size-7</td>
  </tr>
  <tr>
    <td><code>$size-normal</code></td>
    <td>1rem</td>
  </tr>
  <tr>
    <td><code>$size-medium</code></td>
    <td>$size-5</td>
  </tr>
  <tr>
    <td><code>$size-large</code></td>
    <td>$size-4</td>
  </tr>

  <tr><th colspan="2">4. Lists and maps</th></tr>
  <tr>
    <td><code>$colors</code>
    </td><td>
    (white: ($white, $black),
    <br>
    black: ($black, $white),
    <br>
    light: ($light, $light-invert),
    <br>
    dark: ($dark, $dark-invert),
    <br>
    primary: ($primary, $primary-invert),
    <br>
    info: ($info, $info-invert),
    <br>
    success: ($success, $success-invert),
    <br>
    warning: ($warning, $warning-invert),
    <br>
    danger: ($danger, $danger-invert))
  </td>
  </tr>

  <tr>
    <td><code>$sizes</code></td>
    <td>$size-1 $size-2 $size-3 $size-4 $size-5 $size-6</td>
  </tr>
  </tbody></table>

<style>
  .color {
    display: inline-block;
    float: left;
    height: 18px;
    margin-right: 5px;
    width: 18px;
  }
</style>


