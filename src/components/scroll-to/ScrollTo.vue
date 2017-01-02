<template>
  <span class="scroll-to" :class="{ 'scroll-top': isPreset }" v-show="isShow" @click="scrollTo">
    <slot><span class="icon"><i class="fa" :class="[iconClass]"></i></span></slot>
  </span>
</template>
<script>
import jump from 'jump.js';
import utils from '../../utils/utils';

export default {
  props: {
    target: String,
    offset: {
      type: Number,
      default: 500,
    },
    duration: {
      type: Number,
      default: 500,
    },
    distance: Number,
//    options: {
//      type: Object,
//      default() {},
//    },
  },

  data() {
    return {
      isShow: true,
    };
  },

  computed: {
    targetEl() {
      if (this.target === 'top') {
        return document.body;
      } else if (this.distance) {
        return this.distance;
      }
      return this.target;
    },
    isPreset() {
      if (this.target === 'top' || this.target === 'bottom') {
        this.isShow = false;
        return true;
      }
      return false;
    },
    iconClass() {
      if (this.target === 'bottom') return 'fa-arrow-down';
      return 'fa-arrow-up';
    },
  },

  methods: {
    handleScroll() {
      this.isShow = utils.getScroll(window, true) > this.offset;
    },
    scrollTo() {
      jump(this.targetEl, {
        duration: this.duration,
      });
    },
  },

  mounted() {
    if (this.isPreset) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },

  beforeDestroy() {
    if (this.isPreset) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
};
</script>
<style lang="scss">
.scroll-top{
  cursor: pointer;
  position: fixed;
  line-height: 40px;
  bottom: 50px;
  right: 50px;
  color: #fff;
  background-color: rgba(0,0,0,.6);
  padding: 0 8px;
  /*display: none;*/
  -webkit-transition: background-color .2s ease;
  -o-transition: background-color .2s ease;
  transition: background-color .2s ease;
  border-radius: 4px;
}
.scroll-top:hover {
  background-color: rgba(0,0,0,.8);
}
.scroll-top .icon{
  vertical-align: middle;
}
</style>
