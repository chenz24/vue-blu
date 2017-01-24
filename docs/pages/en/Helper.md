## Helper

Vue-Blu's style library uses Bulma -- a new,Flexbox based,modern pure css framework.With a powerful layout feature and
rich style settings.As we can easily write pages with bootstrap,with Bulma will greatly reduce the front end in the style
and layout of the workload.Even,bulma in this respect will do better than bootstrap.Vue-Blu based on bulma, can be said
to have a congenital advantage.Use Blu can not only have a rich Vue components can also use Bulma to bring the layout
and style of convenience.

The following will be related to the basic functions of Bulma, color, etc. to do some introduction.

### Helpers

| Properties           | Description           |
|----------------|--------------------|
| `is-clearfix`   | Fixes an element's floating children|
|  `is-pulled-left`  | Moves an element to the left(float:left)  |
|  `is-pulled-right`  | Moves an element to the right(float:right)  |
|  `is-overlay`  | Completely covers the first positioned parent  |
|  `is-fullwidth`  | Takes up the whole width (100%)|
|  `has-text-centered`  | Centers the text  |
|  `has-text-left`  | Text is left-aligned  |
|  `has-text-right`  | Text is right-aligned  |
|  `is-disabled`  | Removes any click event  |
|  `is-marginless`  | Removes any margin  |
|  `is-paddingless`  | Removes any padding  |
|  `is-unselectable`  | Prevents the text from being selectable |


### Colors

::: demo
<summary>
  #### Colors
  * Five primary colors `is-primary` `is-info` `is-success` `is-warning` `is-danger`
</summary>

```html
<div class="columns">
  <div class="column">
    <p class="notification is-primary">is-primary</p>
  </div>
  <div class="column">
    <p class="notification is-info">is-info</p>
  </div>
  <div class="column">
    <p class="notification is-success">is-success</p>
  </div>
  <div class="column">
    <p class="notification is-warning">is-warning</p>
  </div>
  <div class="column">
    <p class="notification is-danger">is-danger</p>
  </div>
</div>
```
:::

### More detail

`Note：` For more information: [Bulma Documentation](http://bulma.io/documentation/overview/start/)



