<template>
  <span class="dropdown">
    <slot></slot>
    <transition name="fade">
      <div class="popover popper-dropdown" ref="popper" v-show="isShow" :style="popperStyle">
        <div class="popover-content dropdown-content">
          <slot name="content"><div v-text="content"></div></slot>
        </div>
      </div>
    </transition>
  </span>
</template>
<script>
import PopperMixin from '../../utils/PopperMixin';

export default {
  mixins: [PopperMixin],
  props: {
    title: {
      type: String,
      default: '',
    },
    trigger: {
      type: String,
      default: 'click',
    },
    width: {
      type: Number,
    },
    placement: {
      type: String,
      default: 'bottom',
    },
  },

  methods: {
    // add delay
    hidePopper() {
      if (this.trigger !== 'hover') this.isShow = false;
      this.timer = setTimeout(() => {
        this.isShow = false;
        this.popperTimer = setTimeout(() => {
          this.popper.destroy(); // destroy popper when hide
          this.popper = null;
        }, 300);
      }, 300);
    },
  },

  computed: {
    popperStyle() {
      if (this.width && this.width !== 276) {
        return { width: `${this.width}px`, maxWidth: 'none' };
      }
      return null;
    },
  },
};
</script>
<style lang="scss">
.dropdown-content{
  padding: 3px 0;
}
.popper-dropdown{
  border-radius: 3px;
  .menu-list a i{
    margin-right: 5px;
  }
}
.popper-dropdown[x-placement^="bottom"]{
  margin-top: 5px;
}
</style>
