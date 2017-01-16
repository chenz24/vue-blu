<template>
  <transition name="fade">
    <div class="modal align-baseline" v-show="isActive" :class="{ 'is-active': isActive }">
      <div class="modal-background" v-if="backdrop" @click="backdropClose"></div>
      <transition :name="transition">
        <div class="modal-card" :style="modalWidth" v-show="isActive">
        <header class="modal-card-head" v-if="showHeader">
          <slot name="header">
            <p class="modal-card-title">{{ title }}</p>
            <span class="close" @click="handleCancel">×</span>
          </slot>
        </header>
        <section class="modal-card-body">
          <slot></slot>
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
import ModalMixin from './ModalMixin';

export default {
  mixins: [ModalMixin],
};
</script>
