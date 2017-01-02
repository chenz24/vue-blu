<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    value: Array,
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
      console.log();
      this.$emit('input', this.checkedList);
    },
    initChecked() {
      this.$children.forEach((child) => {
        if (this.value.indexOf(child.val) >= 0) {
          console.log(child);
          child.isChecked = true;
        }
      });
    },
  },

  mounted() {
    this.initChecked();
  },
};
</script>
