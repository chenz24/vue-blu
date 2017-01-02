<template>
  <li>
    <a v-if="!hasSlot" :href="to">{{ label }}</a>
    <slot></slot>
    <span class="breadcrumb-separator" v-if="separator">{{ separator }}</span>
  </li>
</template>
<script>
import utils from '../../utils/utils';

export default {
  props: {
    label: {
      type: String,
    },
    to: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      separator: '',
    };
  },

  computed: {
    hasSlot() {
      if (utils.isEmpty(this.$slots)) return false;
      return true;
    },
  },

  mounted() {
    const index = this.$parent.$items.indexOf(this);
    const itemsNum = this.$parent.$items.length;
    if (itemsNum !== index + 1) {
      this.separator = this.$parent.separator;
    }
  },
};
</script>
