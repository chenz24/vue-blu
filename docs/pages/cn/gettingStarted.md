# Vue-Blu

Vue-Blu是基于[Vuejs](http://www.vuejs.org/)和[Bulma](http://bulma.io/)开发的开源UI组件库。旨在为PC端的前端开发(特别是中后台产品)提供一个快速且灵活的解决方案。

## 特性

- 基于 npm + webpack + babel 开发，支持 ES2015
- 全面、灵活且强大的ui组件，API友好
- 样式基于Bulma框架(Flexbox based)，布局简单、响应式
- 可定制化

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

::: demo
<summary>
  #### Tag
  * 默认有五种主题颜色的tag，包括`primary` `info` `success` `danger` `warning`，通过`type`来设置
</summary>

```html
<tag type="primary">Tag Primary</tag>
<tag type="info">Tag Info</tag>
<tag type="success">Tag Success</tag>
<tag type="danger">Tag Danger</tag>
<tag type="warning">Tag Warning</tag>
<tag type="primary" color="#f50" :closable="true">Tag Color</tag>
```
:::


## 版本

- 0.1.8 beta

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
