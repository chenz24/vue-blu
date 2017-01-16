<template>
  <div class="timeline-item" :class="typeClass">
    <div class="timeline-icon" v-if="icon">
      <i class="fa" :class="iconClass"></i>
    </div>
    <div class="timeline-item-main">
      <div class="timeline-item-date">{{ date }}</div>
      <div class="timeline-item-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    icon: String,
    date: String,
    type: String,
    color: String,
  },
  computed: {
    iconClass() {
      return this.icon ? `fa-${this.icon}` : null;
    },
    typeClass() {
      return this.type ? `is-${this.type}` : null;
    },
//    hasColor() {
//      return this.color ? 'has-color' : null;
//    },
  },
};
</script>
