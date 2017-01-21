## DatePicker 日期时间选择器

日期时间选择器,基于轻量且强大的 [flatpickr](https://chmln.github.io/flatpickr/)


### 代码演示

::: demo
<summary>
  #### 基本
  * 可使用 `v-model` 绑定数据
  * 通过配置项 `enableTime` 开启时间选择
  * 可通过 `minDate` `maxDate` 配置可选时间范围
  * 丰富的格式化选项
</summary>

```html
<div class="columns">
  <div class="column is-3">
    <datepicker placeholder="Select Date.."></datepicker>
  </div>
</div>

<div class="columns">
  <div class="column is-3">
    <datepicker placeholder="默认值及数据绑定" :options="dateOptions" v-model="date1"></datepicker>
  </div>
  <div class="column is-2">{{ date1 }}</div>
</div>

<div class="columns">
  <div class="column is-3">
    <datepicker placeholder="开启时间选择.." :options="{enableTime: true}"></datepicker>
  </div>
</div>

<div class="columns">
  <div class="column is-4">
    <datepicker placeholder="格式化时间.." :options="{enableTime: true, altInput: true, altFormat: 'F j, Y h:i K'}"></datepicker>
  </div>
</div>

<div class="columns">
  <div class="column is-4">
    <datepicker placeholder="设置可选范围.." :options="{minDate: new Date(), maxDate: '2017-12-20',}"></datepicker>
  </div>
</div>

<datepicker placeholder="按钮选择" :options="{wrap: true, clickOpens: false,}" class="is-grouped"></datepicker>

```
:::

#### 禁止或开启某个日期的选择

::: demo
<summary>
  #### 禁止 & 开启
  * 可通过配置禁用某些日期的选择(接受函数配置)
</summary>

```html

<div class="columns">
  <div class="column is-3">
    <datepicker placeholder="奇数日期不可选" :options="disableOddDays"></datepicker>
  </div>
</div>

<div class="columns">
  <div class="column is-3">
    <datepicker placeholder="七日内可选" :options="enableOddDays"></datepicker>
  </div>
</div>

<script>
  export default {
    data() {
      return {
        disableOddDays: {
          disable: [
            function(date){ // disable odd days
              return date.getDate()%2 > 0;
            }
          ]
        },
        enableOddDays: {
          enable: [
            {
              from: "today",
              to: new Date().fp_incr(7) // 7 days from now
            }
          ]
        },
      };
    },
  };
</script>

```
:::

#### 时间选择

::: demo
<summary>
  #### 时间选择
  * 设置 `weekNumbers` 为 true
</summary>

```html
<div class="columns">
  <div class="column is-4">
    <datepicker placeholder="时间选择" :options="{enableTime: true, enableSeconds: true, noCalendar: true, time_24hr: true}"></datepicker>
  </div>
</div>
```
:::


#### 日期范围

::: demo
<summary>
  #### 范围
  * 设置`mode`为range
</summary>

```html
<div class="columns">
  <div class="column is-3">
    <datepicker placeholder="范围" :options="{mode: 'range'}"></datepicker>
  </div>
</div>
```
:::

#### 同时选择多个日期

::: demo
<summary>
  #### 多选
  * 设置 `mode` 为multiple
</summary>

```html
<div class="columns">
  <div class="column is-5">
    <datepicker placeholder="多选" :options="{mode: 'multiple'}"></datepicker>
  </div>
</div>
```
:::


#### inline模式

::: demo
<summary>
  #### inline
  * 设置 `inline` 为 true
</summary>

```html
<div class="columns">
  <div class="column is-4">
    <datepicker placeholder="inline模式" :options="{inline: true}"></datepicker>
  </div>
</div>
```
:::

#### 显示第几周

::: demo
<summary>
  ####
  * 设置 `weekNumbers` 为 true
</summary>

```html
<div class="columns">
  <div class="column is-4">
    <datepicker placeholder="显示周" :options="{inline: true, weekNumbers: true}"></datepicker>
  </div>
</div>
```
:::

#### 国际化

::: demo
<summary>
  #### l10n
  * 通过 `locale` 设置语言
</summary>

```html
<div class="columns">
  <div class="column is-4">
    <datepicker placeholder="国际化" :options="localeOption"></datepicker>
  </div>
</div>

<script>
import { zh } from 'flatpickr/dist/l10n/zh';

export default {
  data() {
    return {
      localeOption: {
        locale: zh,
      },
    };
  },
};
</script>
```
:::

#### 更多

`注` flatpickr有更详尽的配置说明，请参见 [flatpickr](https://chmln.github.io/flatpickr/)

<script>
import { zh } from 'flatpickr/dist/l10n/zh';

export default {
  data() {
    return {
      dateOptions: {
      },
      dateOptions2: {
        wrap: true,
        clickOpens: false,
      },
      disableOddDays: {
        disable: [
          function(date){ // disable odd days
            return date.getDate()%2 > 0;
          }
        ]
      },
      enableOddDays: {
        enable: [
          {
            from: "today",
            to: new Date().fp_incr(7) // 7 days from now
          }
        ]
      },
      date1: '2016-10-20',
      localeOption: {
        locale: zh,
      },
    };
  },
};
</script>
