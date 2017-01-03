<template>
  <a class="button radio-button" :class="[{'is-primary': isChecked,}]" @click.prevent="toggle">
    <input type="radio" :name="name" :checked="isChecked" :value="val" ref="checkbox" :disabled="disabled" v-model="model">
    <span class="icon is-small" v-if="icon"><i class="fa" :class="[iconClass]"></i></span>
    <span><slot></slot></span>
  </a>
</template>
<script>
export default {
  props: {
    icon: String,
    disabled: Boolean,
    checked: Boolean,
    value: {},
    val: [String, Number, Boolean],
    onChange: {
      type: Function,
      default() {},
    },
    name: String,
  },

  data() {
    return {
      isChecked: this.checked,
      realVal: null,
    };
  },

  computed: {
    index() {
      return this.$parent.radioItems ? this.$parent.radioItems.indexOf(this) : null;
    },
    iconClass() {
      return this.icon ? `fa-${this.icon}` : null;
    },
  },

  methods: {
    toggle() {
      if (this.isChecked) return;
      this.isChecked = !this.isChecked;

      if (this.$refs.checkbox.value && !this.isChecked) {
        this.realVal = '';
        this.$emit('input', this.realVal);
      } else if (this.$refs.checkbox.value && this.isChecked) {
        this.realVal = this.$refs.checkbox.value;
        this.$emit('input', this.realVal);
      } else if (!this.$refs.checkbox.value && this.isChecked) {
        this.realVal = true;
        this.$emit('input', this.realVal);
      } else {
        this.realVal = false;
        this.$emit('input', this.realVal);
      }

      this.$parent.isRadioGroup && this.$parent.updateValue(this.index);
      this.onChange(this.isChecked);
    },
  },
};
</script>
<style lang="scss">
.radio-button{
  input[type="radio"]{
    cursor: pointer;
    opacity: 0;
    outline: none!important;
    position: absolute;
  }
}
</style>
