## DatePicker

To select or input a date. Base on [flatpickr](https://chmln.github.io/flatpickr/)


### Examples

::: demo
<summary>
  #### Basic
  * two-way binding by `v-model`
  * Make it a datetime picker by setting `enableTime`
  * Limit the range of available dates with `minDate` and `maxDate`
</summary>

```html
<div class="columns">
  <div class="column is-3">
    <datepicker placeholder="Select Date.."></datepicker>
  </div>
</div>

<div class="columns">
  <div class="column is-3">
    <datepicker placeholder="Preloading Dates and two-way binding" :options="dateOptions" v-model="date1"></datepicker>
  </div>
  <div class="column is-2">{{ date1 }}</div>
</div>

<div class="columns">
  <div class="column is-3">
    <datepicker placeholder="enableTime.." :options="{enableTime: true}"></datepicker>
  </div>
</div>

<div class="columns">
  <div class="column is-4">
    <datepicker placeholder="Format time.." :options="{enableTime: true, altInput: true, altFormat: 'F j, Y h:i K'}"></datepicker>
  </div>
</div>

<div class="columns">
  <div class="column is-4">
    <datepicker placeholder="range.." :options="{minDate: new Date(), maxDate: '2017-12-20',}"></datepicker>
  </div>
</div>

<datepicker placeholder="Button Trigger" :options="{wrap: true, clickOpens: false,}" class="is-grouped"></datepicker>

```
:::

#### Enabling or Disabling dates

::: demo
<summary>
  #### enable & disable
  * Disable or enable a date interval, or a specific date(Boolean functions are also supported)
</summary>

```html

<div class="columns">
  <div class="column is-3">
    <datepicker placeholder="disable odd days" :options="disableOddDays"></datepicker>
  </div>
</div>

<div class="columns">
  <div class="column is-3">
    <datepicker placeholder="7 days from now" :options="enableOddDays"></datepicker>
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

#### Time picker

::: demo
<summary>
  #### time picker
  * Enables time picker by `enableTime`
</summary>

```html
<div class="columns">
  <div class="column is-4">
    <datepicker placeholder="enableTime" :options="{enableTime: true, enableSeconds: true, noCalendar: true, time_24hr: true}"></datepicker>
  </div>
</div>
```
:::


#### Selecting a Range of Dates

::: demo
<summary>
  #### range
  * Set `mode: 'range'`
</summary>

```html
<div class="columns">
  <div class="column is-3">
    <datepicker placeholder="range" :options="{mode: 'range'}"></datepicker>
  </div>
</div>
```
:::

#### Selecting Multiple Dates

::: demo
<summary>
  #### multiple
  * Set `mode: 'multiple'`
</summary>

```html
<div class="columns">
  <div class="column is-5">
    <datepicker placeholder="multiple" :options="{mode: 'multiple'}"></datepicker>
  </div>
</div>
```
:::


#### Inline Calendar

::: demo
<summary>
  #### inline
  * Set `inline: true`
</summary>

```html
<div class="columns">
  <div class="column is-4">
    <datepicker placeholder="inline mode" :options="{inline: true}"></datepicker>
  </div>
</div>
```
:::

#### Show weeks

::: demo
<summary>
  ####
  * Set `weekNumbers: true`
</summary>

```html
<div class="columns">
  <div class="column is-4">
    <datepicker placeholder="show weeks" :options="{inline: true, weekNumbers: true}"></datepicker>
  </div>
</div>
```
:::

#### Localization

::: demo
<summary>
  #### l10n
  * Over 25 languages are available.
</summary>

```html
<div class="columns">
  <div class="column is-4">
    <datepicker placeholder="Localization" :options="localeOption"></datepicker>
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

#### More

`Note` For more information，Please refer to [flatpickr](https://chmln.github.io/flatpickr/)

### API

| Properties        | Description           | Type        | Default       |
|------------|----------------|--------------------|--------------|
| options    | DatePicker config (<a href="https://chmln.github.io/flatpickr/">Documentation</a> )   | Object | -    |
| name    | name of input   | String | -  |
| placeholder | placeholder of the datepicker  | String | - |

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
