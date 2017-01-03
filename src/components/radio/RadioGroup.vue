<template>
  <div class="control has-addons">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    value: [String, Number],
    onChange: {
      type: Function,
      default() {},
    },
  },

  data() {
    return {
      checked: '',
      isRadioGroup: true,
    };
  },

  computed: {
    radioItems() {
      return this.$children;
    },
  },

  watch: {
    value() {
      this.initChecked();
    },
  },

  methods: {
    updateValue(index) {
      this.checked = '';
      this.$children.forEach((child, i) => {
        if (index !== i) {
          child.isChecked = false;
        } else {
          this.checked = child.val;
        }
      });

      this.$emit('input', this.checked);
      this.onChange(this.checked);
    },
    initChecked() {
      this.$children.forEach((child) => {
        if (this.value && this.value.indexOf(child.val) >= 0) {
          child.isChecked = true;
          child.realVal = child.val;
        } else {
          child.isChecked = false;
          child.realVal = '';
        }
      });
    },
  },

  mounted() {
    this.initChecked();
  },
};
</script>
