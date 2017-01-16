<template>
  <li :class="{ 'is-active': isActive }">
    <span v-if="!hasChildren">
      <router-link :to="to" v-if="!click" exact>
        <i class="fa" :class="[`fa-${icon}`]" v-if="icon"></i>
        <slot></slot>
      </router-link>
      <a href="javascript:void(0)" v-if="click" @click="click">
        <i class="fa" :class="[`fa-${icon}`]" v-if="icon"></i>
        <slot></slot>
      </a>
    </span>

    <span v-if="hasChildren">
      <a class="has-children" :class="{ 'is-active': isActive, 'is-open': isOpen, }" href="javascript:void(0)" @click="toggle">
        <i class="fa" :class="[`fa-${icon}`]" v-if="icon"></i>
        <slot></slot>
        <span class="nav-right"><i class="fa" :class="[arrowClass]"></i></span>
      </a>
    </span>
    <div v-show="isOpen"><slot name="sub"></slot></div>
  </li>
</template>
<script>
export default {
  props: {
    icon: String,
    to: {
      default: '/',
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    click: {
      type: Function,
    },
    router: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      hasChildren: false,
      isOpen: false,
      arrowClass: 'fa-caret-down',
      type: this.$parent.type,
    };
  },
//
//  computed: {
//    isOpen() {
//      return this.isActive;
//    },
//  },

  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    getChildrenStatus() {
      this.$children.every((item) => {
        if (item.isOpen) this.isOpen = true;
        if (item.type === 'float') this.arrowClass = 'fa-caret-right';
        return true;
      });
    },
  },

  mounted() {
    this.isOpen = this.isActive;
    this.hasChildren = !!this.$slots.sub;
    if (this.hasChildren) {
      this.getChildrenStatus();
      if (this.arrowClass === 'fa-caret-right') {
        this.$el.addEventListener('mouseenter', this.toggle);
        this.$el.addEventListener('mouseleave', this.toggle);
      }
    }
  },

  beforeDestroy() {
    this.$el.removeEventListener('mouseenter', this.toggle);
    this.$el.removeEventListener('mouseleave', this.toggle);
  },
};
</script>
