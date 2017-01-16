<template>
  <transition name="fade">
    <span class="tag" :class="[typeClass, sizeClass, roundedClass]" :style="colorStyle" v-show="isShow">
      <slot></slot>
      <button v-if="closable" class="delete"
              :class="btnClass"
              @click="handleClose"></button>
    </span>
  </transition>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    size: {
      type: String,
    },
    color: {
      type: String,
    },
    closable: {
      type: Boolean,
      default: false,
    },
    onClose: {
      type: Function,
      default() {},
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isShow: true,
    };
  },

  computed: {
    typeClass() {
      return this.type ? `is-${this.type}` : null;
    },
    sizeClass() {
      return this.size ? `is-${this.size}` : null;
    },
    btnClass() {
      return this.size === 'large' ? null : 'is-small';
    },
    colorStyle() {
      return this.color ? { backgroundColor: this.color } : null;
    },
    roundedClass() {
      return this.rounded ? null : 'is-square';
    },
  },

  methods: {
    handleClose() {
//      this.$emit('close', e);// the way official suggested
      this.isShow = false;
      this.onClose();
      // the author of vue suggest delete component by 'data-driven' way
      setTimeout(() => {
        this.$destroy();
        this.$el.remove();
      }, 100);
    },
  },
};
</script>
