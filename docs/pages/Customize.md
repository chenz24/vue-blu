## 自定义主题

Vue-Blu 可以轻松实现自定义主题，从而满足使用者个性化的需求。前提只需要前端构建环境支持`sass`编译，无需安装另外的工具。可通过定义sass变量的方式配置字体、颜色、边框、背景等。方法如下：


#### 方法

 1.自定义变量，并引入组件库样式入口文件(假设路径为`'path/to/css/variables.scss'`)

```javascript
$blue: #3c81df;
$turquoise: #00c0ef;
$red: #f56954;
$green: #6cc788;
$orange: #f2a654;
$purple: #926dde;
$yellow: #f39c12;
// import
@import "~vue-blu/src/scss/blu"
```

2.在程序入口文件引入自定义变量

```javascript
import Vue from 'vue'
import VueBlu from 'vue-blu'
import 'path/to/css/variables.scss'

Vue.use(VueBlu)

```

#### 支持变量表




