<template>
  <div class="icon-wrap">
    <div v-for="(item, key) in iconObj">
      <h4>{{ key }}</h4>
      <hr>
      <ul>
        <li v-for="icon in item" @click="copy(icon.class)">
          <i class="fa" :class="icon.class"></i>
          <span>{{ icon.label }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import icons from '../icons';

/*eslint-disable */
function copyToClipboard(text) {
  if (window.clipboardData && window.clipboardData.setData) {
    // IE specific code path to prevent textarea being shown while dialog is visible.
    return clipboardData.setData("Text", text);

  } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand("copy");  // Security exception may be thrown by some browsers.
    } catch (ex) {
      console.warn("Copy to clipboard failed.", ex);
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }
}
/*eslint-disable */

export default {
  data() {
    return {
      iconObj: icons,
    };
  },

  methods: {
    copy(val) {
      copyToClipboard(val);
      this.$notify.open({
        content: 'Copied!',
        icon: 'check-circle',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
  i{
    font-size: 30px;
    margin: 10px auto 20px;
  }
  .icon-wrap{
    li{
      float: left;
      margin: 0 0 15px;
      width: 160px;
      height: 110px;
      text-align: center;
      &:hover{
        cursor: pointer;
        background-color: #f8f8f8;
      }
    }
    span{
      display: block;
      height: 89px;
    }
  }
</style>
