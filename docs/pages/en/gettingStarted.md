# Vue-Blu

Vue-Blu is an UI component library base on [Vuejs](http://www.vuejs.org/) and [Bulma](http://bulma.io/) For
developing fast and powerful web application

## Feature

- Provides a work flow which is based on npm + webpack + babel，supporting ES2015
- High quality UI components, flexible and friendly apis
- Flexbox, Responsive
- Customizable

## Install

```bash
$ npm install vue-blu --save
```

## Quick Start


```
import Vue from 'vue'
import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'

Vue.use(VueBlu)

```

## Demo

::: demo
<summary>
  #### Tag
  * There are 5 types of Tag, `primary` `info` `success` `danger` `warning`
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


## Version

- 0.1.7 beta

## Compatibility

- Vuejs(2.1.x)
- Modern browsers and IE10+

## Useful Links

- [Vuejs](http://www.vuejs.org)
- [Bulma](http://bulma.io/)

## Credits
Blu is inspired or powered by these people or projects so I want to thank them

- [Vue](https://github.com/vuejs/vue) great work
- [Bulma](https://github.com/jgthms/bulma) A modern CSS framework based on Flexbox
- [vue-admin](https://github.com/vue-bulma/vue-admin) for the original idea
- [ant-design](https://github.com/ant-design/ant-design) some api design are referenced from this project
- [element-ui](http://github.com/elemefe) for the vue-markdown-loader


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
