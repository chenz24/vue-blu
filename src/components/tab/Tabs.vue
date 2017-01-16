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

