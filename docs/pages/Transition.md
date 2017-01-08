## Transition 过渡动画

基于Animate.css，在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。

### 代码演示

::: demo
<summary>
  #### 基本
  * 通过vue的`transition`组件来设置。Vue-Blu部分组件可使用`transition`参数设置，如modal、notify等，具体参考组件文档
  * 过渡效果的`animation-duration` 可通过覆盖`$transition-speed`变量实现自定义
</summary>

```html
<button class="button is-primary" @click="fade">fade</button>
<button class="button is-primary" @click="fadeRight">fadeRight</button>
<button class="button is-primary" @click="fadeLeft">fadeLeft</button>
<button class="button is-primary" @click="fadeLeftBig">fadeLeftBig</button>
<button class="button is-primary" @click="fadeUpBig">fadeUpBig</button>

<br><br>
<button class="button is-primary" @click="rotate">rotate</button>
<button class="button is-primary" @click="rotateDownLeft">rotateDownLeft</button>
<button class="button is-primary" @click="rotateDownRight">rotateDownRight</button>
<button class="button is-primary" @click="rotateUpLeft">rotateUpLeft</button>

<br><br>
<button class="button is-primary" @click="bounce">bounce</button>
<button class="button is-primary" @click="bounceDown">bounceDown</button>
<button class="button is-primary" @click="bounceLeft">bounceLeft</button>
<button class="button is-primary" @click="bounceRight">bounceRight</button>
<button class="button is-primary" @click="bounceUp">bounceUp</button>

<br><br>
<button class="button is-primary" @click="slideDown">slideDown</button>
<button class="button is-primary" @click="slideLeft">slideLeft</button>
<button class="button is-primary" @click="slideRight">slideRight</button>
<button class="button is-primary" @click="slideUp">slideUp</button>

<br><br>
<button class="button is-primary" @click="zoom">zoom</button>
<button class="button is-primary" @click="zoomDown">zoomDown</button>
<button class="button is-primary" @click="zoomLeft">zoomLeft</button>
<button class="button is-primary" @click="zoomRight">zoomRight</button>
<button class="button is-primary" @click="zoomUp">zoomUp</button>

<script>
  export default {
    methods: {
      fadeNotify() {
        this.$notify.open({content: 'fade', transition: 'fade'});
      },
      fadeRight() {
        this.$modal.open({
          autoClose: 3,
          transition: 'fadeRight',
          content: 'fadeRight...'
        });
      },
      fadeLeft() {
        this.$modal.open({
          autoClose: 3,
          transition: 'fadeLeft',
          content: 'fadeLeft...'
        });
      },
      fadeLeftBig() {
        this.$modal.open({
          autoClose: 3,
          transition: 'fadeLeftBig',
          content: 'fadeLeftBig...'
        });
      },
      fadeUpBig() {
        this.$modal.open({
          autoClose: 3,
          transition: 'fadeUpBig',
          content: 'fadeUpBig...'
        });
      },
      fade() {
        this.$modal.open({
          autoClose: 3,
          transition: 'fade',
          content: 'fade...'
        });
      },

      rotate() {
        this.$modal.open({
          autoClose: 3,
          transition: 'rotate',
          content: 'rotate...'
        });
      },
      rotateDownLeft() {
        this.$modal.open({
          autoClose: 3,
          transition: 'rotateDownLeft',
          content: 'rotateDownLeft...'
        });
      },
      rotateDownRight() {
        this.$modal.open({
          autoClose: 3,
          transition: 'rotateDownRight',
          content: 'rotateDownRight...'
        });
      },
      rotateUpLeft() {
        this.$modal.open({
          autoClose: 3,
          transition: 'rotateUpLeft',
          content: 'rotateUpLeft...'
        });
      },

      bounce() {
        this.$modal.open({
          autoClose: 3,
          transition: 'bounce',
          content: 'bounce...'
        });
      },
      bounceDown() {
        this.$modal.open({
          autoClose: 3,
          transition: 'bounceDown',
          content: 'bounceDown...'
        });
      },
      bounceLeft() {
        this.$modal.open({
          autoClose: 3,
          transition: 'bounceLeft',
          content: 'bounceLeft...'
        });
      },
      bounceRight() {
        this.$modal.open({
          autoClose: 3,
          transition: 'bounceRight',
          content: 'bounceRight...'
        });
      },
      bounceUp() {
        this.$modal.open({
          autoClose: 3,
          transition: 'bounceUp',
          content: 'bounceUp...'
        });
      },

      slideDown() {
        this.$modal.open({
          autoClose: 3,
          transition: 'slideDown',
          content: 'slideDown...'
        });
      },
      slideLeft() {
        this.$modal.open({
          autoClose: 3,
          transition: 'slideLeft',
          content: 'slideLeft...'
        });
      },
      slideRight() {
        this.$modal.open({
          autoClose: 3,
          transition: 'slideRight',
          content: 'slideRight...'
        });
      },
      slideUp() {
        this.$modal.open({
          autoClose: 3,
          transition: 'slideUp',
          content: 'slideUp...'
        });
      },

      zoom() {
        this.$modal.open({
          autoClose: 3,
          transition: 'zoom',
          content: 'zoom...'
        });
      },
      zoomDown() {
        this.$modal.open({
          autoClose: 3,
          transition: 'zoomDown',
          content: 'zoomDown...'
        });
      },
      zoomLeft() {
        this.$modal.open({
          autoClose: 3,
          transition: 'zoomLeft',
          content: 'zoomLeft...'
        });
      },
      zoomRight() {
        this.$modal.open({
          autoClose: 3,
          transition: 'zoomRight',
          content: 'zoomRight...'
        });
      },
      zoomUp() {
        this.$modal.open({
          autoClose: 3,
          transition: 'zoomUp',
          content: 'zoomUp...'
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
| transition |可选值有`bounce` `bounceDown` `bounceLeft` `bounceRight` `bounceUp` `fade` `fadeDown` `fadeDownBig` `fadeLeft` `fadeLeftBig` `fadeRight` `fadeRightBig` `fadeUp` `fadeUpBig` `rotate` `rotateDownLeft` `rotateDownRight` `rotateUpLeft` `rotateUpRight` `slideDown` `slideLeft` `slideRight` `slideUp` `zoom` `zoomDown` `zoomLeft` `zoomRight` `zoomUp` | String | 无    |

`注：` 本功能参考了 [vue2-animate](https://github.com/asika32764/vue2-animate)

<script>
export default {
  methods: {
    fadeNotify() {
      this.$notify.open({content: 'fade', transition: 'fade'});
    },
    fadeRight() {
      this.$modal.open({
        autoClose: 3,
        transition: 'fadeRight',
        content: 'fadeRight...'
      });
    },
    fadeLeft() {
      this.$modal.open({
        autoClose: 3,
        transition: 'fadeLeft',
        content: 'fadeLeft...'
      });
    },
    fadeLeftBig() {
      this.$modal.open({
        autoClose: 3,
        transition: 'fadeLeftBig',
        content: 'fadeLeftBig...'
      });
    },
    fadeUpBig() {
      this.$modal.open({
        autoClose: 3,
        transition: 'fadeUpBig',
        content: 'fadeUpBig...'
      });
    },
    fade() {
      this.$modal.open({
        autoClose: 3,
        transition: 'fade',
        content: 'fade...'
      });
    },

    rotate() {
      this.$modal.open({
        autoClose: 3,
        transition: 'rotate',
        content: 'rotate...'
      });
    },
    rotateDownLeft() {
      this.$modal.open({
        autoClose: 3,
        transition: 'rotateDownLeft',
        content: 'rotateDownLeft...'
      });
    },
    rotateDownRight() {
      this.$modal.open({
        autoClose: 3,
        transition: 'rotateDownRight',
        content: 'rotateDownRight...'
      });
    },
    rotateUpLeft() {
      this.$modal.open({
        autoClose: 3,
        transition: 'rotateUpLeft',
        content: 'rotateUpLeft...'
      });
    },

    bounce() {
      this.$modal.open({
        autoClose: 3,
        transition: 'bounce',
        content: 'bounce...'
      });
    },
    bounceDown() {
      this.$modal.open({
        autoClose: 3,
        transition: 'bounceDown',
        content: 'bounceDown...'
      });
    },
    bounceLeft() {
      this.$modal.open({
        autoClose: 3,
        transition: 'bounceLeft',
        content: 'bounceLeft...'
      });
    },
    bounceRight() {
      this.$modal.open({
        autoClose: 3,
        transition: 'bounceRight',
        content: 'bounceRight...'
      });
    },
    bounceUp() {
      this.$modal.open({
        autoClose: 3,
        transition: 'bounceUp',
        content: 'bounceUp...'
      });
    },

    slideDown() {
      this.$modal.open({
        autoClose: 3,
        transition: 'slideDown',
        content: 'slideDown...'
      });
    },
    slideLeft() {
      this.$modal.open({
        autoClose: 3,
        transition: 'slideLeft',
        content: 'slideLeft...'
      });
    },
    slideRight() {
      this.$modal.open({
        autoClose: 3,
        transition: 'slideRight',
        content: 'slideRight...'
      });
    },
    slideUp() {
      this.$modal.open({
        autoClose: 3,
        transition: 'slideUp',
        content: 'slideUp...'
      });
    },

    zoom() {
      this.$modal.open({
        autoClose: 3,
        transition: 'zoom',
        content: 'zoom...'
      });
    },
    zoomDown() {
      this.$modal.open({
        autoClose: 3,
        transition: 'zoomDown',
        content: 'zoomDown...'
      });
    },
    zoomLeft() {
      this.$modal.open({
        autoClose: 3,
        transition: 'zoomLeft',
        content: 'zoomLeft...'
      });
    },
    zoomRight() {
      this.$modal.open({
        autoClose: 3,
        transition: 'zoomRight',
        content: 'zoomRight...'
      });
    },
    zoomUp() {
      this.$modal.open({
        autoClose: 3,
        transition: 'zoomUp',
        content: 'zoomUp...'
      });
    },


  },
};
</script>
