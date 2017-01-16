<template>
  <span>
    <slot></slot>
    <transition name="fade">
      <div class="tooltip" ref="popper" v-show="isShow">
        <span v-text="content"></span>
        <div class="tooltip-arrow" x-arrow></div>
      </div>
    </transition>
  </span>
</template>
<script>
import PopperMixin from '../../utils/PopperMixin';

export default {
  mixins: [PopperMixin],

  methods: {
    handleClick() {
      if (this.isShow) {
//        this.isShow = false;
        this.hidePopper();
      } else {
        this.createInstance();
      }
    },

    bindEvent() {
      const reference = this.reference = this.reference || this.$el.children[0];
      if (!reference) return;
      if (this.trigger === 'focus') {
        reference.addEventListener('focus', this.createInstance);
        reference.addEventListener('blur', this.toggle);
      } else if (this.trigger === 'click') {
        reference.addEventListener('click', this.handleClick);
      } else {
        reference.addEventListener('mouseenter', this.createInstance);
        reference.addEventListener('mouseleave', this.hidePopper);
      }
    },

    removeEvent() {
      if (!this.reference) return;
      if (this.trigger === 'focus') {
        this.reference.removeEventListener('focus', this.createInstance);
        this.reference.removeEventListener('blur', this.toggle);
      } else if (this.trigger === 'click') {
        this.reference.removeEventListener('click', this.handleClick);
      } else {
        this.reference.removeEventListener('mouseenter', this.createInstance);
        this.reference.removeEventListener('mouseleave', this.hidePopper);
      }
    },
  },
};
</script>
