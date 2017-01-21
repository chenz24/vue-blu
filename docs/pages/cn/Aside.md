## Aside 侧边模态框

从侧边滑出的模态框

### 代码演示

::: demo
<summary>
  #### 基本
  * aside基本拥有modal所有的特性
  * 通过`placement`设置侧边模态框的位置，目前支持 left 和 right
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
<button @click="toggle" class="button is-primary">左侧模态框</button>

<b-aside :is-show="isShowRight" title="Right Aside!" :show-footer="false" placement="right" :backdrop="false" @close="isShowRight=false">
  <h3>Dolor sit amet</h3>
  <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
    fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
  </p>
  <h3>Dolor sit amet</h3>
  <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
    fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
  </p>
  <p><code>右侧Aside并且不显示footer</code></p>
</b-aside>
<button @click="toggleRight" class="button is-primary">右侧模态框</button>

```
:::

### API

Aside是基于modal的组件，所以它拥有modal所有的特性，具体的参数可参考modal的文档，唯一不同的是Aside通过`placement`设置位置

| 成员        | 说明       | 类型   | 默认值       |
|------------|-----------|--------|--------------|
| placement  | 位置       | String | left    |
| width      | 宽度       | Number | 400     |

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
