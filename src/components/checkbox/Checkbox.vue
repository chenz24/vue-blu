<template>
  <label class="checkbox blu-checkbox" @click.prevent="toggle" :class="[{'on': isChecked}, typeClass, {'is-disabled': disabled}]">
    <input type="checkbox"
           :name="name"
           ref="checkbox"
           :checked="isChecked"
           :disabled="disabled"
           v-model="realVal"
           @change="$emit('change', $event)"
           :value="realVal"
           >
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
    change: {
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
    realVal(val) {
      this.change(val);
    },
    checked(val) {
      this.handleChecked(val);
    },
  },

  methods: {
    toggle() {
      this.isChecked = !this.isChecked;

      if (this.val && !this.isChecked) {
        this.realVal = '';
        this.$emit('input', this.realVal);
      } else if (this.val && this.isChecked) {
        this.realVal = this.val;
        this.$emit('input', this.realVal);
      } else if (!this.val && this.isChecked) {
        this.realVal = true;
        this.$emit('input', this.realVal);
      } else {
        this.realVal = false;
        this.$emit('input', this.realVal);
      }
      this.$parent.isCheckboxGroup && this.$parent.updateValue();
//      this.change(e);
    },
    handleChecked(isChecked) {
      this.isChecked = isChecked;
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
