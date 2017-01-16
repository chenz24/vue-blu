<template>
  <span>
    <slot></slot>
    <transition name="fade">
      <div class="popover" ref="popper" v-show="isShow" :style="popperStyle">
        <div class="popover-title" v-if="title">{{ title }}</div>
        <div class="popover-content">
          <slot name="content"><div v-text="content"></div></slot>
        </div>
        <div class="popover-arrow" x-arrow></div>
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
  },

  data() {
    return {
      reference: null,
      popper: null,
      isShow: false,
    };
  },

  computed: {
    popperStyle() {
      if (this.width && this.width !== 276) {
        return { width: `${this.width}px`, maxWidth: 'none' };
      }
      return null;
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
};
</script>
