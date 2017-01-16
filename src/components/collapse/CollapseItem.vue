<template>
  <div class="card is-fullwidth collapse-item" :class="{ 'is-active': isOpen }">
    <header class="card-header" @click="toggle">
      <div class="card-header-title">{{ title }}</div>
      <span class="card-header-icon"><i class="fa fa-angle-right"></i></span>
    </header>
    <transition name="">
      <div class="card-content" v-show="isOpen">
        <div class="content"><slot></slot></div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    actived: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isOpen: this.actived,
    };
  },

  computed: {
    index() {
      return this.$parent.$collapseItems.indexOf(this);
    },
  },

  watch: {
    isActive(val) {
      this.isOpen = val;
    },
  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
      this.$parent.setActiveIndex(this.index);
    },
  },
};
</script>
