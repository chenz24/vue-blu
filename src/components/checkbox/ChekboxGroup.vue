<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    value: Array,
    onChange: {
      type: Function,
      default() {},
    },
  },

  data() {
    return {
      checkedList: [],
      isCheckboxGroup: true,
    };
  },

  methods: {
    updateValue() {
      this.checkedList = [];
      this.$children.forEach((child) => {
        child.realVal && this.checkedList.push(child.realVal);
      });
      this.$emit('input', this.checkedList);
      this.onChange(this.checkedList);
    },
    initChecked() {
      this.$children.forEach((child) => {
        if (this.value && this.value.indexOf(child.val) >= 0) {
          child.isChecked = true;
          child.realVal = child.val;
        }
      });
    },
  },

  mounted() {
    this.initChecked();
  },
};
</script>
