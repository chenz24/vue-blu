<template>
  <label class="switch-wrap" @click.prevent="toggle" :class="[{'is-disabled': disabled}, sizeClass]">
    <input type="checkbox" style="display: none" :checked="on" :name="name">
    <span class="switchery" :class="[{'on': on}, typeClass, sizeClass, {'has-text': hasText}]">
      <small class="switcher"></small>
      <span class="text">{{ showText }}</span>
    </span>
    <slot></slot>
  </label>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'success',
    },
    size: String,
    onText: String,
    offText: String,
    checked: Boolean,
    disabled: Boolean,
    value: {},
    name: String,
    onChange: {
      type: Function,
      default() {},
    },
  },

  data() {
    return {
      on: false,
      showText: '',
    };
  },

  computed: {
    typeClass() {
      return this.type ? `is-${this.type}` : 'is-success';
    },
    sizeClass() {
      return this.size ? `is-${this.size}` : null;
    },
    hasText() {
      return this.onText || this.offText;
    },
  },

//  watch: {
//    on(val) {
//      this.showText = val ? this.onText : this.offText;
//    },
//  },

  methods: {
    toggle() {
      this.on = !this.on;
      this.showText = this.on ? this.onText : this.offText;
      this.$emit('input', this.on);
      this.onChange(this.on);
    },
  },

  mounted() {
    if (this.checked || this.value) {
      this.on = true;
      this.showText = this.onText;
    } else {
      this.showText = this.offText;
    }
  },
};
</script>
