<template>
  <div class="collapse-wrap">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    accordion: Boolean,
  },

  computed: {
    $collapseItems() {
      return this.$children;
    },
  },

  methods: {
    setActiveIndex(index) {
      if (this.accordion) {
        this.$children.forEach((item, i) => {
          if (i !== index) {
            item.isOpen = false;
          }
        });
      }
    },
  },
};
</script>
