<template>
  <span class="datepicker">
    <span class="control has-addons flatpickr" ref="pickrInput" v-if="isWrap">
      <input class="input"
             :name="name"
             :placeholder="placeholder"
             type="text"
             v-model="interVal" data-input>
      <a class="button" data-toggle><i class="fa fa-calendar"></i></a>
      <a class="button" data-clear><i class="fa fa-close"></i></a>
    </span>
    <p class="control has-icon has-icon-right" v-else>
      <input class="input" :name="name" :value="interVal" :placeholder="placeholder" type="text" v-model="interVal" ref="pickrInput">
      <i class="fa fa-calendar"></i>
      <i class="fa fa-times" @click.prevent="handleClear"></i>
    </p>
  </span>
</template>
<script>
import Flatpickr from 'flatpickr';
import { zh } from 'flatpickr/dist/l10n/zh';// eslint-disable-line

export default {
  props: {
    options: {
      type: Object,
      default() {},
    },
    name: String,
    placeholder: String,
    val: String,
    value: {},
    class: String,
  },

  data() {
    return {
      interVal: this.value,
      flatPickr: null,
    };
  },

  computed: {
    isWrap() {
      if (this.options) {
        return !!this.options.wrap;
      }
      return false;
    },
  },

  methods: {
    changeVal() {
      console.log(this.interVal);
      this.$emit('input', this.interVal);
    },
    handleClear() {
      console.log('clear');
      this.flatPickr && this.flatPickr.clear();
    },
  },

  watch: {
    interVal(val) {
      console.log(val);
      this.interVal = val;
      this.$emit('input', this.interVal);
    },
  },

  mounted() {
    console.log(this.class);
    const pickrEl = this.$refs.pickrInput;
    this.flatPickr = new Flatpickr(pickrEl, this.options);
  },

  beforeDestroy() {
    if (this.flatPickr) {
      this.flatPickr.destroy();
      this.flatPickr = null;
    }
  },
};
</script>
<style lang="scss">
@import '~flatpickr/dist/flatpickr.min.css';
.datepicker{
  .has-icon{
    i{
      -webkit-transition: all .3s;
      transition: all .3s;
    }
    .fa-times{
      display: none;
      cursor: pointer;
      pointer-events: all;
    }
    &:hover{
      .fa-times{
        display: inline-block;
      }
      .fa-calendar{
        display: none;
      }
    }
  }
}
</style>
