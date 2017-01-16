<template>
  <span>
    <slot></slot>
    <transition name="fade">
      <div class="popover popover-confirm" ref="popper" v-show="isShow" :style="popperStyle">
        <div class="popover-title" v-if="title">{{ title }}</div>
        <div class="popover-content">
          <article class="media" :class="[typeClass]">
            <div class="media-left" v-if="icon"><i class="fa" :class="[iconClass]"></i></div>
            <div class="media-content">{{ content }}</div>
          </article>
        </div>
        <div class="popover-footer">
          <a class="button is-small" @click="handleCancel" v-if="showCancel">{{ cancelText }}</a>
          <a class="button is-small is-primary" @click="handleOk" v-if="showOk">{{ okText }}</a>
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
    width: {
      type: Number,
    },
    trigger: {
      type: String,
      default: 'click',
    },
    title: {
      type: String,
      default: '',
    },
    showOk: {
      type: Boolean,
      default: true,
    },
    showCancel: {
      type: Boolean,
      default: true,
    },
    okText: {
      type: String,
      default: 'OK',
    },
    cancelText: {
      type: String,
      default: 'Cancel',
    },
    onOk: {
      type: Function,
      default() {},
    },
    onCancel: {
      type: Function,
      default() {},
    },
    icon: String,
    type: {
      type: String,
      default: 'info',
    },
  },

  computed: {
    popperStyle() {
      if (this.width && this.width !== 210) {
        return { width: `${this.width}px`, maxWidth: 'none' };
      }
      return null;
    },
    iconClass() {
      if (this.icon) {
        return `fa-${this.icon}`;
      }
      return null;
    },
    typeClass() {
      if (this.type) {
        return `is-${this.type}`;
      }
      return null;
    },
  },

  methods: {
    handleOk(e) {
      this.onOk();
      this.handleClose(e);
    },
    handleCancel(e) {
      this.onCancel();
      this.handleClose(e);
    },
    handleClose(e) {
      e.stopPropagation();
      this.hidePopper();
    },
  },
};
</script>
