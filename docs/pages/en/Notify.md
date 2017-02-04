## Notify

Display global messages as feedbacks to user operations.

### Examples

::: demo
<summary>
  #### Basic
  * Six types，`primary` `info` `success` `danger` `warning` and default
  * Can be called by `this.$notify.info({...})`(or `this.$notify.success({...})` ...)
  * Auto closed in 4.5s
</summary>

```html
<button class="button" @click="basicNotify">Click me</button>
<button class="button is-primary" @click="primaryNotify">Click me</button>
<button class="button is-info" @click="infoNotify">Click me</button>
<button class="button is-success" @click="successNotify">Click me</button>
<button class="button is-warning" @click="warningNotify">Click me</button>
<button class="button is-danger" @click="dangerNotify">Click me</button>
<button class="button is-info" @click="loadingNotify">Loading</button>
<script>
  export default {
    methods: {
      basicNotify() {
        this.$notify.open({content: 'You clicked me!',});
      },
      primaryNotify() {
        this.$notify.open({content: 'You clicked me!', type: 'primary'});
      },
      infoNotify() {
        this.$notify.info({content: 'You clicked me!'});
      },
      successNotify() {
        this.$notify.success({content: 'You clicked me!'});
      },
      warningNotify() {
        this.$notify.warning({content: 'You clicked me!'});
      },
      dangerNotify() {
        this.$notify.open({content: 'You clicked me!', type: 'danger'});
      },
      loadingNotify() {
        this.$notify.open({content: 'Loading...', type: 'loading'});
      },
    },
  };
</script>
```
:::


::: demo
<summary>
  #### More
  * Customize notify display duration by setting `duration` parameter
  * Sets icon by `icon`
  * Enable or disable close button by setting `closable` parameter
  * There are 12 placement options available including `top-right` `top-center` `top-left` `bottom-right` `bottom-center` `bottom-left`
  * support `transition`
</summary>

```html
<button class="button" @click="durationNotify">auto-close</button>
<button class="button" @click="iconNotify">Icon</button>
<button class="button" @click="placementNotify">top-center</button>
<button class="button" @click="transitionNotify">Transition</button>
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
          content: 'customize icon！',
          icon: 'smile-o',
        });
      },
      placementNotify() {
        this.$notify.open({
          content: 'customize position！',
          icon: 'smile-o',
          placement: 'top-center',
        });
      },
      transitionNotify() {
        this.$notify.open({
          content: 'customize transition！',
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

| Properties        | Description           | Type        | Default       |
|------------|----------------|--------------------|--------------|
| type    | type of notify，one of `primary` `info` `success` `danger` `warning` | String | -  |
| title | title of notify | String | - |
| content | content of notify | String | - |
| duration | The duration visibility in seconds | Number | 4.5 |
| icon | icon of notify | String | - |
| placement | position of notify,one of`top-right` `top-center` `top-left` `bottom-right` `bottom-center` `bottom-left` | String | top-right   |
| closable | Whether or not the notify can be closed  | Boolean | true   |
| transition | transition effect，accepted value: <router-link to="/en/components/transition" exact>Transition</router-link>  | String | -  |


<script>
export default {
  methods: {
    basicNotify() {
      this.$notify.open({content: 'You clicked me!',});
    },
    primaryNotify() {
      this.$notify.open({content: 'You clicked me!', type: 'primary'});
    },
    infoNotify() {
      this.$notify.info({content: 'You clicked me!'});
    },
    successNotify() {
      this.$notify.success({content: 'You clicked me!'});
    },
    warningNotify() {
      this.$notify.warning({content: 'You clicked me!'});
    },
    dangerNotify() {
      this.$notify.open({content: 'You clicked me!', type: 'danger'});
    },
    loadingNotify() {
      this.$notify.open({content: 'Loading...', type: 'loading'});
    },
    durationNotify() {
      this.$notify.open({
        content: 'auto closed in 10s！',
        duration: 10000,
      });
    },
    iconNotify() {
      this.$notify.open({
        content: 'customize icon！',
        icon: 'smile-o',
      });
    },
    placementNotify() {
      this.$notify.open({
        content: 'customize position！',
        icon: 'smile-o',
        placement: 'top-center',
      });
    },
    transitionNotify() {
      this.$notify.open({
        content: 'customize transition！',
        icon: 'smile-o',
        placement: 'top-center',
        transition: 'bounce',
        type: 'danger',
      });
    },
  },
};
</script>
