<template>
  <div class="progress-wrap" :class="[infoOutsideClass]">
    <div class="progress" :class="[stripedClass, animatedClass, sizeClass]">
      <div class="progress-bar" :class="[typeClass, sizeClass]" :style="{width: percent + '%'}">
        <span v-if="showinfo" class="progress-info">{{ info }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    size: {
      type: String,
    },
    percent: {
      type: Number,
      required: true,
      default: 0,
    },
    striped: Boolean,
    animated: Boolean,
    showinfo: Boolean,
    infoInside: {
      type: Boolean,
      default: true,
    },
    format: {
      type: Function,
      default(percent) { return `${percent}%`; },
    },
  },

  data() {
    return {
      info: '',
    };
  },

  computed: {
    typeClass() {
      return this.type ? `is-${this.type}` : null;
    },
    sizeClass() {
      return this.size ? `is-${this.size}` : null;
    },
    stripedClass() {
      return this.striped ? 'progress-striped' : null;
    },
    animatedClass() {
      return this.animated ? 'animated' : null;
    },
    infoOutsideClass() {
      return this.infoInside ? null : 'info-outside';
    },
  },

  watch: {
    percent(val) {
      this.info = this.format(val);
    },
  },

  mounted() {
    this.info = this.format(this.percent);
  },
};
</script>
