<template>
  <transition :name="transition">
    <div v-show="isActive"
         class="tab-pane"
         :class="{ 'is-active': isActive }">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    icon: String,
    selected: Boolean,
    disabled: Boolean,
    label: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      isActive: false,
      transition: 'fade',
    };
  },

  beforeCreate() {
    this.isTabPane = true;
  },

  methods: {
    // params (crtIndex, prevIndex)
    onActivated() {
      this.isActive = true;
//      this.transition = crtIndex > prevIndex ? 'fadeRight' : 'fadeRight';
//      console.log(crtIndex);
//      console.log(prevIndex);
    },
    deActivated() {
      this.isActive = false;
    },
  },
};
</script>
