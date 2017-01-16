<template>
  <transition name="fade">
    <div class="modal modal-confirm align-baseline is-active borderless" v-show="isShow">
      <div class="modal-background" v-if="backdrop" @click="backdropClose"></div>
      <transition :name="transition">
        <div class="modal-card" :style="modalWidth" v-show="isShow">
        <header class="modal-card-head" v-if="showHeader">
          <slot name="header">
            <p class="modal-card-title">{{ title }}</p>
            <span class="close" @click="handleCancel">×</span>
          </slot>
        </header>
        <section class="modal-card-body">
          <article class="media" :class="[typeClass]">
            <div class="media-left" v-if="icon"><i class="fa" :class="[iconClass]"></i></div>
            <div class="media-content">{{ content }}</div>
          </article>
        </section>
        <footer class="modal-card-foot" v-if="showFooter">
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
    content: String,
    icon: String,
    width: {
      type: Number,
      default: 400,
    },
    autoClose: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      default: 'info',
    },
  },

  methods: {
    handleClose() {
//      this.$emit('close');
      setTimeout(() => {
        this.$destroy();
        this.$el.remove();
      }, 100);
    },
    close() {
      this.handleClose();
    },
  },

  computed: {
    modalWidth() {
      if (this.width !== 400 && this.width !== 0) {
        return { width: `${this.width}px` };
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

  mounted() {
    setTimeout(() => {
      this.isShow = true;
    }, 100);

    if (this.autoClose) {
      setTimeout(() => {
        this.handleClose();
      }, this.autoClose * 1000);
    }
  },
};
</script>
