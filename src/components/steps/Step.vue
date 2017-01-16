<template>
  <transition name="fade">
    <div class="step-panel" v-show="active">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
    isActive: Boolean,
  },

  data() {
    return {
      step: {},
      active: this.isActive,
    };
  },

  created() {
    this.step = {
      title: this.title,
      description: this.description,
      isActive: this.isActive,
    };
    this.$parent.steps.push(this.step);
  },

  mounted() {
  },
};
</script>
