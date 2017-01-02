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
        this.popper.destroy(); // destroy popper when hide
        this.popper = null;
      }, 300);
    },
  },
};
</script>
<style lang="scss">
.popover{
  z-index: 1060;
  max-width: 276px;
  padding: 1px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: left;
  white-space: normal;
  background-color: #fff;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 6px;
  -webkit-box-shadow: 0 5px 10px rgba(0,0,0,.2);
  box-shadow: 0 5px 10px rgba(0,0,0,.2);
}
.popover-title {
  padding: 8px 14px;
  margin: 0;
  font-size: 14px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-radius: 5px 5px 0 0;
}
.popover-content {
  padding: 9px 14px;
}
.popover-arrow, .popover-arrow::after{
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent;
  position: absolute;
  /*margin: 10px;*/
}
.popover-arrow{
  border-width: 10px;
  position: absolute;
}
.popover-arrow::after {
  content: "";
  border-width: 9px;
}
.popover[x-placement^="bottom"]{
  margin-top: 15px;
  .popover-arrow {
    border-top-width: 0;
    border-bottom-color: rgba(0,0,0,.25);
    top: -10px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
    &:after{
       top: 1px;
       margin-left: -9px;
       border-top-width: 0;
       border-bottom-color: #fff;
     }
  }
}
.popover[x-placement^="top"]{
  margin-bottom: 15px;
  .popover-arrow {
    border-top-color: #999;
    border-top-color: rgba(0,0,0,.25);
    border-bottom-width: 0;
    bottom: -10px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
    &:after{
     bottom: 1px;
     border-top-color: #fff;
     border-bottom-width: 0;
     margin-left: -9px;
    }
  }
}
.popover[x-placement^="left"]{
  margin-right: 15px;
  .popover-arrow {
    border-right-width: 0;
    border-left-color: #999;
    border-left-color: rgba(0,0,0,.25);
    right: -10px;
    top: calc(50% - 5px);
    &:after{
     right: 1px;
     border-right-width: 0;
     border-left-color: #fff;
     margin-top: -9px;
   }
  }
}
.popover[x-placement^="right"]{
  margin-left: 15px;
  .popover-arrow {
    border-left-width: 0;
    border-right-color: #999;
    border-right-color: rgba(0,0,0,.25);
    left: -10px;
    top: calc(50% - 5px);
    &:after{
     left: 1px;
     border-left-width: 0;
     border-right-color: #fff;
     margin-top: -9px;
   }
  }
}

</style>
