<template>
  <div class="progress-wrap" :class="[infoOutsideClass]">
    <div class="progress" :class="[stripedClass, animatedClass, sizeClass]">
      <div class="progress-bar" :class="[typeClass, sizeClass]" :style="{width: percent + '%'}">
        <span v-if="showinfo" class="progress-info">{{ info }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    size: {
      type: String,
    },
    percent: {
      type: Number,
      required: true,
      default: 0,
    },
    striped: Boolean,
    animated: Boolean,
    showinfo: Boolean,
    infoInside: {
      type: Boolean,
      default: true,
    },
    format: {
      type: Function,
      default(percent) { return `${percent}%`; },
    },
  },

  data() {
    return {
      info: '',
    };
  },

  computed: {
    typeClass() {
      return this.type ? `is-${this.type}` : null;
    },
    sizeClass() {
      return this.size ? `is-${this.size}` : null;
    },
    stripedClass() {
      return this.striped ? 'progress-striped' : null;
    },
    animatedClass() {
      return this.animated ? 'animated' : null;
    },
    infoOutsideClass() {
      return this.infoInside ? null : 'info-outside';
    },
  },

  watch: {
    percent(val) {
      this.info = this.format(val);
    },
  },

  mounted() {
    this.info = this.format(this.percent);
  },
};
</script>

<style lang="scss">
  @import "../../scss/variables.scss";

  .progress-wrap{
    position: relative;
    &.info-outside{
      margin-right: 40px;
      .progress-info{
        position: absolute;
        right: -40px;
        color: $font;
      }
    }
  }
  .progress {
    display: block;
    width: 100%;
    height: 1rem;
    margin-bottom: 1rem;
    border-radius: .25rem;
    overflow: hidden;
    background-color: rgba(0,0,0,.065);
  }
  .progress-bar {
    display: inline-block;
    float: left;
    height: 100%;
    text-align: center;
    border-radius: .25rem;
    background-color: #0074d9;
    font-size: .8em;
    color: rgba(255,255,255,.9);
    -webkit-transition: width .6s ease;
    transition: width .6s ease;
    &.is-info{
      background-color: $info;
    }
    &.is-danger{
      background-color: $danger;
    }
    &.is-danger{
      background-color: $danger;
    }
    &.is-warning{
      background-color: $warning;
    }
    &.is-success{
      background-color: $success;
    }
    &.is-large{
      font-size: 1em;
    }
  }
  .progress-bar-striped, .progress-striped .progress-bar {
    background-image: -webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
    background-image: -o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
    background-image: linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);
    -webkit-background-size: 40px 40px;
    background-size: 40px 40px;
  }
  .progress-bar.animated, .progress.animated .progress-bar {
    -webkit-animation: progress-bar-stripes 2s linear infinite;
    -o-animation: progress-bar-stripes 2s linear infinite;
    animation: progress-bar-stripes 2s linear infinite;
  }
  @-webkit-keyframes progress-bar-stripes {
    from {
      background-position:40px 0
    }
    to {
      background-position:0 0
    }
  }
  @-o-keyframes progress-bar-stripes {
    from {
      background-position:40px 0
    }
    to {
      background-position:0 0
    }
  }
  @keyframes progress-bar-stripes {
    from {
      background-position:40px 0
    }
    to {
      background-position:0 0
    }
  }
</style>
