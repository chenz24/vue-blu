<template>
  <ul class="breadcrumb">
    <slot></slot>
  </ul>
</template>
<script>
export default {
  props: {
    separator: {
      type: String,
      default: '>',
    },
  },
  computed: {
    $items() {
      return this.$children;
    },
  },
};
</script>
<style lang="scss">
.breadcrumb{
  li{
    display: inline-block;
    margin-left: 0!important;
    padding-left: 0!important;
    a.active{
      color: #666;
      cursor: text;
    }
    i{
      vertical-align: baseline;
      margin-right: 3px;
    }
  }
}
.breadcrumb-separator{
  margin-left: 3px;
  margin-right: 2px;
}
</style>
