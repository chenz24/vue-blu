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
