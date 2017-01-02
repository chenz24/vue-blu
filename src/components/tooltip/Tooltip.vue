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
<style lang="scss">
  .tooltip{
    background: #383838;
    color: #fff;
    padding: 8px 10px;
    font-size: 12px;
    /*font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;*/
    line-height: 12px;
    white-space: nowrap;
    /*text-shadow: 0 -1px 0 #000;*/
    box-shadow: 4px 4px 8px rgba(0,0,0,.3);
  }
  .tooltip-arrow{
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
  }
  .tooltip, .tooltip-arrow{
    z-index: 1000000;
    pointer-events: none;
  }
  .tooltip[x-placement^="bottom"]{
    margin-top: 8px;
    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-color: transparent transparent #383838 transparent;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  .tooltip[x-placement^="top"]{
    margin-bottom: 8px;
    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-color: #383838 transparent transparent transparent;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  .tooltip[x-placement^="right"]{
    margin-left: 8px;
    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-color: transparent #383838 transparent transparent;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  .tooltip[x-placement^="left"]{
    margin-right: 8px;
    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-color: transparent transparent transparent #383838;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }
</style>
