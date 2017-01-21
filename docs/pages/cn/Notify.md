## 通知

全局的消息提示

### 代码演示

::: demo
<summary>
  #### 基本
  * 默认有六种类型，除了default还包括`primary` `info` `success` `danger` `warning`，通过`type`来设置，也可通过`this.$notify.info({...})`的形式直接调用
  * 默认 4.5秒 自动关闭
</summary>

```html
<button class="button" @click="basicNotify">点击我</button>
<button class="button is-primary" @click="primaryNotify">点击我</button>
<button class="button is-info" @click="infoNotify">点击我</button>
<button class="button is-success" @click="successNotify">点击我</button>
<button class="button is-warning" @click="warningNotify">点击我</button>
<button class="button is-danger" @click="dangerNotify">点击我</button>
<button class="button is-info" @click="loadingNotify">Loading</button>
<script>
  export default {
    methods: {
      basicNotify() {
        this.$notify.open({content: '您点击了我！',});
      },
      primaryNotify() {
        this.$notify.open({content: '您点击了我！', type: 'primary'});
      },
      infoNotify() {
        this.$notify.info({content: '您点击了我！'});
      },
      successNotify() {
        this.$notify.success({content: '您点击了我！'});
      },
      warningNotify() {
        this.$notify.warning({content: '您点击了我！'});
      },
      dangerNotify() {
        this.$notify.open({content: '您点击了我！', type: 'danger'});
      },
      loadingNotify() {
        this.$notify.open({content: '命令执行中...', type: 'loading'});
      },
    },
  };
</script>
```
:::


::: demo
<summary>
  #### 更多配置
  * 通过`duration`设置自动关闭的倒计时时间
  * 通过`icon`设置图标
  * 通过`closable`设置是否可手动关闭
  * 通过`placement`设置notify的显示位置,支持`top-right` `top-center` `top-left` `bottom-right` `bottom-center` `bottom-left`
  * 通过`transition` 设置过度效果
</summary>

```html
<button class="button" @click="durationNotify">10秒关闭</button>
<button class="button" @click="iconNotify">自定义icon</button>
<button class="button" @click="placementNotify">top-center弹出</button>
<button class="button" @click="transitionNotify">自定义transition</button>
<script>
  export default {
    methods: {
      durationNotify() {
        this.$notify.open({
          content: '10秒后自动关闭！',
          duration: 10000,
        });
      },
      iconNotify() {
        this.$notify.open({
          content: '自定义图标！',
          icon: 'smile-o',
        });
      },
      placementNotify() {
        this.$notify.open({
          content: '自定义位置！',
          icon: 'smile-o',
          placement: 'top-center',
        });
      },
      transitionNotify() {
        this.$notify.open({
          content: '自定义transition！',
          icon: 'smile-o',
          placement: 'top-center',
          transition: 'bounce',
          type: 'danger',
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
| type    | 主题颜色，可选值为`default` `primary` `info` `success` `danger` `warning`   | String | 无    |
| title | 标题 | String | 无 |
| content | 内容 | String | 无 |
| duration | 倒计时关闭的秒数，单位秒 | Number | 4.5 |
| icon | 图标 | String | 无 |
| placement | notify的位置,可选值`top-right` `top-center` `top-left` `bottom-right` `bottom-center` `bottom-left` | String | top-right   |
| closable | 是否可关闭  | Boolean | true   |
| transition | 过度效果，可选值见 #link  | String | 无  |


<script>
export default {
  methods: {
    basicNotify() {
      this.$notify.open({content: '您点击了我！',});
    },
    primaryNotify() {
      this.$notify.open({content: '您点击了我！', type: 'primary'});
    },
    infoNotify() {
      this.$notify.info({content: '您点击了我！'});
    },
    successNotify() {
      this.$notify.success({content: '您点击了我！'});
    },
    warningNotify() {
      this.$notify.warning({content: '您点击了我！'});
    },
    dangerNotify() {
      this.$notify.open({content: '您点击了我！', type: 'danger'});
    },
    loadingNotify() {
      this.$notify.open({content: '命令执行中...', type: 'loading'});
    },
    durationNotify() {
      this.$notify.open({
        content: '10秒后自动关闭！',
        duration: 10000,
      });
    },
    iconNotify() {
      this.$notify.open({
        content: '自定义图标！',
        icon: 'smile-o',
      });
    },
    placementNotify() {
      this.$notify.open({
        content: '自定义位置！',
        icon: 'smile-o',
        placement: 'top-center',
      });
    },
    transitionNotify() {
      this.$notify.open({
        content: '自定义transition！',
        icon: 'smile-o',
        placement: 'top-center',
        transition: 'bounce',
        type: 'danger',
      });
    },
  },
};
</script>
