<template>
  <transition name="fade">
    <div class="aside" v-show="isActive" :class="[{ 'is-active': isActive }, placementClass]">
      <div class="modal-background" v-if="backdrop" @click="backdropClose"></div>
      <transition :name="transitionName">
        <div class="modal-card" :style="modalWidth" v-show="isActive">
        <header class="modal-card-head aside-header" v-if="showHeader">
          <slot name="header">
            <p class="modal-card-title">{{ title }}</p>
            <span class="close" @click="handleCancel">×</span>
          </slot>
        </header>
        <section class="modal-card-body aside-body">
          <slot></slot>
        </section>
        <footer class="modal-card-foot aside-footer" v-if="showFooter">
          <slot name="footer">
            <a class="button" @click="handleCancel" v-if="showCancel">{{ cancelText }}</a>
            <a class="button is-primary" :class="{'is-loading': isLoading}" @click="handleOk" v-if="showOk">{{ okText }}</a>
          </slot>
        </footer>
      </div>
      </transition>
    </div>
  </transition>
</template>
<script>
import ModalMixin from '../modal/ModalMixin';

export default {
  mixins: [ModalMixin],

  props: {
    width: {
      type: Number,
      default: 450,
    },
    placement: {
      type: String,
      default: 'left',
    },
    transition: {
      type: String,
      default: 'fadeLeft',
    },
  },

  computed: {
    placementClass() {
      if (this.placement && this.placement !== 'left') {
        return `aside-${this.placement}`;
      }
      return null;
    },
    transitionName() {
      if (this.placement === 'right' && this.transition === 'fadeLeft') {
        return 'fadeRight';
      }
      return this.transition;
    },
  },
};
</script>
