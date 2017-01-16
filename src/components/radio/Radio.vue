<template>
  <label class="radio blu-radio" @click.prevent="toggle" :class="[{'on': isChecked}, typeClass, {'is-disabled': disabled}]">
    <input type="radio" :name="name" :checked="isChecked" :value="val" ref="checkbox" :disabled="disabled" v-model="model">
    <span><slot></slot></span>
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
    index() {
      return this.$parent.radioItems ? this.$parent.radioItems.indexOf(this) : null;
    },
  },

  watch: {
    value() {
      this.updateValue();
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
    updateValue() {
//      console.log(this.value);
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
