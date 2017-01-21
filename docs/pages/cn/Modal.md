## Modal 模态框

模态对话框

### 代码演示


::: demo
<summary>
  #### 基本
  * 通过设置`cancel-text`和`ok-text`自定义按钮文字
  * 设置`backdrop`为false可禁用遮罩层
  * 设置`backdrop-closable`为false可禁用遮罩层关闭
</summary>

```html
<modal title="Modal!" :width="520" :is-show="isShow" transition="fadeDown" @close="isShow=false">
  <h4>Text in a modal</h4>
  <p>
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem. Praesent commodo cursus magna,
    vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
  </p>
</modal>
<button @click="toggle" class="button is-primary">基本模态框</button>

<modal title="自定义按钮文字" :is-show="isShow2" :show-footer="false" :show-header="true" @close="isShow2=false" ok-text="确定" cancel-text="取消">
  <h4>Text in a modal</h4>
  <p>
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem. Praesent commodo cursus magna,
    vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
  </p>
</modal>
<button @click="toggle2" class="button is-primary">自定义按钮文字</button>

<modal title="禁用backdrop背景" :backdrop="false" :is-show="isShow3" @close="isShow3=false">
  <h4>Text in a modal</h4>
  <p>
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem. Praesent commodo cursus magna,
    vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
  </p>
</modal>
<button @click="toggle3" class="button is-primary">禁用backdrop遮罩层</button>

<modal title="禁用遮罩层关闭" :backdrop-closable="false" :is-show="isShow4" @close="isShow4=false">
  <h4>Text in a modal</h4>
  <p>
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem. Praesent commodo cursus magna,
    vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
  </p>
</modal>
<button @click="toggle4" class="button is-primary">禁用backdrop遮罩层关闭</button>


```
:::

::: demo
<summary>
  #### 回调和异步关闭
  * 设置`on-ok`或`on-cancel`，为modal添加回调
</summary>

```html
<modal title="回调处理" :on-ok="okCb" :on-cancel="cancelCb" :is-show="isShowA" @close="isShowA=false">
  <h4>Text in a modal</h4>
  <p>
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem. Praesent commodo cursus magna,
    vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
  </p>
</modal>
<button @click="toggleA" class="button is-primary">回调函数</button>

<modal title="异步关闭" :on-ok="okCloseCb" ok-text="确定" :ok-loading="true" :is-show="isShowC" @close="isShowC=false">
  <h4>Text in a modal</h4>
  <p>
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem. Praesent commodo cursus magna,
    vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
  </p>
</modal>
<button @click="toggleC" class="button is-primary">异步关闭</button>


<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
    okCb() {
      this.$notify.open({
        type: 'success',
        title: `ok回调`,
      });
    },
    cancelCb() {
      this.$notify.open({
        type: 'success',
        title: `cancel回调`,
      });
    },
    okCloseCb() {
      setTimeout(() => {
        this.toggle();
      }, 2000);
    },
  },
};
</script>
```
:::

::: demo
<summary>
  #### 自定义头尾
  * 通过Vue的Slot功能可灵活定义Modal的头部和尾部
  * `slot="header"`定义头部，`slot="footer"`定义尾部
</summary>

```html
<modal title="回调处理" :is-show="isShowE" @close="isShowE=false">
  <div slot="header" class="columns" style="width: 100%">
    <div class="tabs is-pulled-left">
      <ul>
        <li class="is-active"><a>Pictures</a></li>
        <li><a>Music</a></li>
        <li><a>Videos</a></li>
        <li><a>Documents</a></li>
      </ul>
    </div>
    <button class="button is-primary is-pulled-right" @click="toggleE">Close</button>
  </div>
  <h4>Text in a modal</h4>
  <p>
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem. Praesent commodo cursus magna,
    vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
  </p>
  <p><button class="button is-primary" @click="toggleE">Close</button></p>
  <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
  <div slot="footer">我来组成尾部</div>
</modal>
<button @click="toggleE" class="button">自定义头部尾部</button>
```
:::


### 全局方法($modal)

为了方便使用提示信息类的modal，Vue-Blu为Vue.prototype注册了$modal对象，可使用`this.$modal.open(config)`来快捷调用modal

::: demo
<summary>
  #### $modal
  * `this.$modal`包含`open` `confirm` `alert` 三个方法
  * `this.$modal.open(config)`快捷打开modal
  * 通过`icon`自定义图标
  * 通过设置`autoClose`倒计时自动关闭modal
  * $modal实例化后，可通过调用它的`close`方法手动关闭modal
</summary>

```html

<button @click="openModal" class="button">$modal.open</button>
<button @click="openConfirm" class="button is-primary">$modal.confirm</button>
<button @click="openAlert" class="button is-danger">$modal.alert</button>
<button @click="manualClose" class="button is-primary">手动关闭</button>
<button @click="disableHeader" class="button is-primary">不显示Header</button>
<script>
export default {
  methods: {
    openModal() {
      this.$modal.open({
        autoClose: 3,
        content: '将在3秒后自动关闭...'
      });
    },
    openConfirm() {
      this.$modal.confirm({
        content: '确定删除这条信息?',
        onOk: this.okCb,
      });
    },
    openAlert() {
      this.$modal.alert({
        content: '操作失败！请联系管理员',
      });
    },
    manualClose() {
      const m = this.$modal.open({
        content: '将在3秒后调用close()关闭...'
      });
      setTimeout(() => {
        m.close();
      },3000);
    },
    disableHeader() {
      this.$modal.open({
        content: '不显示header',
        showHeader: false,
      });
    },
  },
};
</script>
```
:::


### API

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| is-show    | modal是否显示   | Boolean | false    |
| title | 标题 | String | 无 |
| ok-text | 确定按钮的文字 | String | OK |
| cancel-text | 取消按钮的文字 | String | Cancel |
| on-ok | 点击ok后的回调 | Function | 无   |
| on-cancel | 点击cancel后的回调 | Function | 无   |
| backdrop | 是否显示遮罩层  | Boolean | true   |
| backdrop-closable | 遮罩层是否可关闭modal  | Boolean | true   |
| okLoading | 确定按钮loading（开启后点击ok将不会自动关闭modal）  | Boolean | false   |
| width   | modal的宽度 | Number | 640  |
| transition | 过渡效果,可选值见 #link | String | fade  |
| show-header | 是否显示头部 | Boolean | true  |
| show-footer | 是否显示尾部 | Boolean | true  |
| show-ok | 是否显示ok按钮 | Boolean | true  |
| show-cancel | 是否显示cancel按钮 | Boolean | true  |


#### $modal全局对象

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| width | modal的宽度 | Number | 400  |
| icon    | 图标   | String | 无    |
| title   | 标题   | String |  |
| content | 内容 | String | 无 |
| autoClose | 自动关闭的倒计时秒数 | Number | 0(表示禁用自动关闭) |



<script>
export default {
  data() {
    return {
      isShow: false,
      isShow2: false,
      isShow3: false,
      isShow4: false,
      isShowA: false,
      isShowB: false,
      isShowC: false,
      isShowE: false,
    };
  },

  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
    toggle2() {
      this.isShow2 = !this.isShow2;
    },
    toggle3() {
      this.isShow3 = !this.isShow3;
    },
    toggle4() {
      this.isShow4 = !this.isShow4;
    },
    toggleA() {
      this.isShowA = !this.isShowA;
    },
    toggleB() {
      this.isShowB = !this.isShowB;
    },
    toggleC() {
      this.isShowC = !this.isShowC;
    },
    toggleE() {
      this.isShowE = !this.isShowE;
    },
    okCb() {
      this.$notify.open({
        type: 'success',
        title: `ok回调`,
      });
    },
    cancelCb() {
      this.$notify.open({
        type: 'success',
        title: `cancel回调`,
      });
    },
    okCloseCb() {
      setTimeout(() => {
        this.toggleC();
      }, 2000);
    },
    openModal() {
      this.$modal.open({
        autoClose: 3,
        content: '将在3秒后自动关闭...'
      });
    },

    openConfirm() {
      this.$modal.confirm({
        content: '确定删除这条信息?',
        onOk: this.okCb,
      });
    },
    openAlert() {
      this.$modal.alert({
        content: '操作失败！请联系管理员',
      });
    },
    manualClose() {
      const m = this.$modal.open({
        content: '将在3秒后调用close()关闭...'
      });
      setTimeout(() => {
        m.close();
      },3000);
    },
    disableHeader() {
      this.$modal.open({
        content: '不显示header',
        showHeader: false,
      });
    },
  }
};
</script>
