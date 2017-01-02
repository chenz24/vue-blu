<template>
  <label class="checkbox blu-checkbox" @click.prevent="toggle" :class="[{'on': isChecked}, typeClass, {'is-disabled': disabled}]">
    <input type="checkbox" :name="name" :checked="isChecked" :value="val" ref="checkbox" :disabled="disabled" v-model="model">
    <span>{{ label }}</span>
  </label>
</template>
<script>
export default {
  props: {
    name: String,
    label: String,
    type: {
      type: String,
      default: 'primary',
    },
    disabled: Boolean,
    checked: Boolean,
    value: {},
    val: [String, Number, Boolean],
    onChange: {
      type: Function,
      default() {},
    },
  },

  data() {
    return {
      isChecked: this.checked,
      realVal: null,
    };
  },

  computed: {
    typeClass() {
      if (this.type) return `is-${this.type}`;
      return null;
    },
  },

  watch: {
//    realVal(val, oldVal) {
//      console.log('new', val);
//      console.log('old', oldVal);
//    },
  },

  methods: {
    toggle() {
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

      this.$parent.isCheckboxGroup && this.$parent.updateValue();
      this.onChange(this.isChecked);
    },
  },

  mounted() {
    if (this.isChecked && !this.value) {
      this.$emit('input', this.$refs.checkbox.value);
    }
    if (this.value === this.val) {
      this.isChecked = true;
    }
  },
};
</script>
<style lang="scss">
@import "../../scss/variables.scss";

.blu-checkbox{
  padding-left: 20px;
  user-select: none;
  input[type="checkbox"]{
    cursor: pointer;
    opacity: 0;
    outline: none!important;
    position: absolute;
  }
  &:before{
    background-color: #ffffff;
    border-radius: 2px;
    border: 1px solid gainsboro;
    content: "";
    display: inline-block;
    height: 16px;
    left: 0;
    position: absolute;
    transition: 0.2s ease-in-out;
    -o-transition: 0.2s ease-in-out;
    -webkit-transition: 0.2s ease-in-out;
    width: 16px;
    outline: none !important;
  }
  &.on:after{
    font: normal normal normal 14px/1 FontAwesome;
    content: "\f00c";
    color: #7a7d84;
    display: inline-block;
    font-size: 11px;
    height: 16px;
    left: 0;
    padding-left: 3px;
    padding-top: 1px;
    position: absolute;
    top: 2px;
    width: 16px;
    transition: 0.2s ease-in-out;
    -o-transition: 0.2s ease-in-out;
    -webkit-transition: 0.2s ease-in-out;
  }
  &.is-primary.on:before{
    background-color: $primary;
    border-color: $primary;
  }
  &.is-primary.on:after{
    color: #fff;
  }

}
</style>
