## Aside

Create a smooth off-canvas sidebar that slides in and out of the page

### Examples

::: demo
<summary>
  #### Basic
  * aside component is inherited from modal component,so it has all feature of modal
  * Sets which side that that the component slides from by `placement`，accept left and right
</summary>

```html
<b-aside :is-show="isShow" title="Left Aside!" @close="isShow=false">
  <h3>Dolor sit amet</h3>
  <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
    fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
  </p>
  <h3>Dolor sit amet</h3>
  <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
    fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
  </p>
</b-aside>
<button @click="toggle" class="button is-primary">Left Aside</button>

<b-aside :is-show="isShowRight" title="Right Aside!" :show-footer="false" placement="right" :backdrop="false" @close="isShowRight=false">
  <h3>Dolor sit amet</h3>
  <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
    fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
  </p>
  <h3>Dolor sit amet</h3>
  <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
    fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
  </p>
  <p><code>Right Aside with no footer</code></p>
</b-aside>
<button @click="toggleRight" class="button is-primary">Right Aside</button>

```
:::

### API

Aside component is inherited from modal component,so it has all feature of modal,Consult
<router-link to="/en/components/modal">Modal's documentation</router-link> to find more APIs.

| Properties        | Description           | Type        | Default       |
|------------|-----------|--------|--------------|
| placement  | position       | String | left    |
| width      | width       | Number | 400     |

<script>
export default {
  data() {
    return {
      isShow: false,
      isShowRight: false,
    };
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
    toggleRight() {
      this.isShowRight = !this.isShowRight;
    },
  },
};
</script>
