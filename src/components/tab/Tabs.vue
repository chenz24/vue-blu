<template>
  <div class="tabs is-layout-top" :class="[alignClass, typeClass, sizeClass, layoutClass, fullWidthClass]">
    <ul class="tab-list">
      <li v-for="(tab, index) in tabPanes"
          :class="{ 'is-active': isActive(index), 'is-disabled': tab.disabled, }"
          @click.prevent="handleSelect(index)"
          role="tab">
        <a>
          <span class="icon" :class="{'is-small': size !== 'large'}" v-if="tab.icon"><i class="fa" :class="[`fa-${tab.icon}`]"></i></span>
          <span>{{ tab.label }}</span>
        </a>
      </li>
    </ul>
    <div class="tab-content is-flex">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isFullWidth: Boolean,
    layout: {
      type: String,
      default: 'top',
      validator(val) {
        return ['top', 'bottom', 'left', 'right'].indexOf(val) > -1;
      },
    },
    type: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    alignment: {
      type: String,
      default: '',
    },
    activeIndex: {
      type: Number,
      default: 0,
    },
    animation: {
      type: String,
      default: 'fade',
    },
    onlyFade: {
      type: Boolean,
      default: true,
    },
    onTabClick: {
      type: Function,
      default() {},
    },
    transition: {
      type: String,
      default: 'fade',
    },
  },

  data() {
    return {
      tabPanes: [],
      selectedIndex: 0,
      prevSelectedIndex: -1,
    };
  },

  watch: {
    activeIndex(val) {
      this.selectedIndex = val;
    },
  },

  computed: {
    alignClass() {
      return this.alignment ? `is-${this.alignment}` : null;
    },
    typeClass() {
      return this.type ? `is-${this.type}` : null;
    },
    sizeClass() {
      return this.size ? `is-${this.size}` : null;
    },
    layoutClass() {
      return this.layout ? `is-layout-${this.layout}` : null;
    },
    fullWidthClass() {
      return this.isFullWidth ? 'is-fullwidth' : null;
    },
  },

  methods: {
    isActive(index) {
      return index === this.selectedIndex;
    },

    handleSelect(index) {
      if (this.prevSelectedIndex !== -1) {
        this.tabPanes[this.selectedIndex].deActivated();
      }
      this.prevSelectedIndex = this.selectedIndex;
      this.selectedIndex = index;
      this.tabPanes[index].onActivated(index, this.prevSelectedIndex);
      this.onTabClick(index);
    },
  },

  mounted() {
    this.tabPanes = this.$children.filter(child => child.isTabPane);

    this.handleSelect(this.activeIndex);
  },
};
</script>
<style lang="scss">
  @import '~bulma/sass/utilities/variables';
  .tabs {
    position: relative;
    flex: 1;
    .tab-list {
      flex: 0 1 auto;
      li{
        padding: 0;
        margin: 0;
        line-height: 24px;
      }
    }
    .tab-content {
      flex-direction: column;
      overflow: hidden;
      position: relative;
      margin: 10px;
      flex: 1 1;
    }
    .tab-pane {
      user-select: text;
      -moz-user-select: text;
      -ms-user-select: text;
      -webkit-user-select: text;
      width: 100%;
      flex: 1 1;
      &.is-active {
        transform: translateZ(0);
      }
      &[class*="leave-active"] {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transform: translateX(0);
        transform: translateY(0);
      }
    }
    &.is-layout-top {
      flex-direction: column;
    }
    &.is-layout-bottom {
      flex-direction: column-reverse;
    }
    &.is-layout-left {
      flex-direction: row;
      overflow-x: hidden;
      overflow-y: auto;
      .tab-list {
        flex-direction: column;
        align-items: flex-start;
        max-width: calc(100% / 5);
        border-bottom: none;
        border-right: 1px solid $grey-light;
      }
      li {
        width: 100%;
        a {
          border-bottom: none;
          border-right: 1px solid $grey-light;
          margin-bottom: 0;
          margin-right: -1px;
          justify-content: flex-end;
          &:hover {
            border-right-color: $grey-darker;
          }
        }
        &.is-active {
          a {
            border-right-color: $turquoise;
          }
        }
      }
    }
    &.is-layout-right {
      flex-direction: row-reverse;
      overflow-x: hidden;
      overflow-y: auto;
      .tab-list {
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-start;
        max-width: calc(100% / 5);
        border-bottom: none;
        border-left: 1px solid $grey-light;
        li {
          width: 100%;
          a {
            border-bottom: none;
            border-left: 1px solid $grey-light;
            margin-bottom: 0;
            margin-left: -1px;
            justify-content: flex-start;
            &:hover {
              border-left-color: $grey-darker;
            }
          }
          &.is-active {
            a {
              border-left-color: $turquoise;
            }
          }
        }
      }
    }
  }
  .is-slideshow{
    .tab-content{
      margin: 0;
    }
    .tab-list{
      display: block;
      position: absolute;
      bottom: 10px;
      left: 50%;
      z-index: 15;
      width: 60%;
      padding-left: 0;
      margin-left: -30%;
      border: none;
      text-align: center;
      list-style: none;
      li{
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 1px 2px;
        text-indent: -999px;
        cursor: pointer;
        background-color: #000 \9;
        background-color: rgba(0,0,0,0);
        border: 1px solid #fff;
        border-radius: 10px;
        a{
          border: none;
        }
        &.is-active{
          background: #fff;
          a{
            /*background: #fff;*/
          }
        }
      }
    }
  }
</style>

