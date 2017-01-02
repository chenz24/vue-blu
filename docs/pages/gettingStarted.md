# Vue-Blu

Vue-Blu是基于[Vuejs](http://www.vuejs.org/)和[Bulma](http://bulma.io/)开发的开源UI组件库。旨在为PC端的前端开发(特别是中后台产品)提供一个快速且灵活的解决方案。

## 特性

- 基于 npm + webpack + babel 开发，支持 ES2015
- 全面、灵活且强大的ui组件，API友好
- 样式基于Bulma框架(Flexbox based)，能够轻松布局并可定制化

## 安装

```bash
$ npm install vue-blu --save
```

## 快速开始


```
import Vue from 'vue'
import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'

Vue.use(VueBlu)

```

## 示例

<tooltip content="测试内容" :always="false" placement="topLeft">
  <button class="button is-primary">tooltip button</button>
</tooltip>


## 版本

- 0.1.2 beta

## 兼容性

- 基于Vuejs2.x
- 现代浏览器及IE10+

## 相关链接

- [Vuejs官方](http://www.vuejs.org)
- [Bulma官方](http://bulma.io/)

## Credits

- [Vue](https://github.com/vuejs/vue)
- [Bulma](https://github.com/jgthms/bulma)
- [vue-admin](https://github.com/vue-bulma/vue-admin) 最早的想法起源于此
- [ant-design](https://github.com/ant-design/ant-design) 参考借鉴了某些API的设计
- [element-ui](http://github.com/elemefe) 参考了开发文档的组织方式(vue-markdown-loader)

## 其他

几个月前我在一个项目中使用到Vue，迅速被他的简洁、优雅、清晰所吸引。但在当时却没有一个成熟的组件库（Like Antd of React）来加速我们的开发，于是开发中我们断断续续写了一些组件，但不成系统。
随着开发的进行和对Vue的了解加深，开始有了写一套组件库的想法。特别是9月份我参加了"JSConf CN 2016"，更是被Vue作者和开发者们热情所感染。于是有了Vue-Blu，Vue-Blu是构筑在开源之上的一套组件库，
比如样式和布局的部分用到了Bulma，Tooltip用到了popover。同时，开发的过程中也参考了一些其他同类型项目，包括Ant Design、Element等，在这里向这些开源项目表示感谢。。。

**Open Source is changing the world!**


<script>
export default {
  methods: {
    onAffix(status) {
      console.log(status);
    },
    toggle() {
      this.isShow = !this.isShow;
    },
    openNotify() {
      this.$notify.open({
        title: '提示信息',
        type: 'success',
        duration: 50000,
      });
    },
    click() {
      console.log(this);
    },
  },
  data() {
    return {
      disabled: true,
      tabShow: true,
      isShow: false,
      percent: 45,
    };
  },
};
</script>
