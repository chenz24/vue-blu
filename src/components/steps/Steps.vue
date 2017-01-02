<template>
  <div class="steps-wrap" :class="[type]">
    <div class="step-header">
      <div class="step-item"
           v-for="(step, index) in steps"
           :class="{'is-active': currentIndex === index, 'is-done': index < currentIndex}"
           :style="{stepStyle}">
        <div class="step-left">
          <div class="step-icon">
            <span v-if="index >= currentIndex">{{ index + 1 }}</span>
            <span v-if="index < currentIndex"><i class="fa fa-check"></i></span>
          </div>
        </div>
        <div class="step-desc">
          <span class="step-title">{{ step.title }}</span>
        </div>
        <div class="step-description">{{ step.description }}</div>
      </div>
    </div>
    <div class="step-content is-flex">
      <slot></slot>
    </div>
    <div class="step-footer has-text-right" v-if="showFooter">
      <button class="button is-primary" @click="prev">{{ prevText }}</button>
      <button class="button is-primary" @click="next">{{ nextText }}</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'pills',
    },
    current: {
      type: Number,
      default: 0,
    },
    prevText: {
      type: String,
      default: 'Prev',
    },
    nextText: {
      type: String,
      default: 'Next',
    },
    onPrev: {
      type: Function,
      default() {},
    },
    onNext: {
      type: Function,
      default() {},
    },
    showFooter: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      steps: [],
      stepStyle: {},
      currentIndex: this.current,
    };
  },

//  computed: {
//    currentIndex() {
//
//    },
//  },
  watch: {
    current(val) {
      this.currentIndex = val;
      this.setActiveIndex(this.currentIndex);
    },
  },

  methods: {
    setActiveIndex(index) {
      this.$children.forEach((item, i) => {
        if (i !== index) {
          item.active = false;
        } else {
          item.active = true;
        }
      });
    },
    next() {
      if (this.currentIndex < this.$children.length) {
        this.currentIndex += 1;
        this.setActiveIndex(this.currentIndex);
        this.onNext(this.currentIndex);
      }
    },
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
        this.setActiveIndex(this.currentIndex);
        this.onPrev(this.currentIndex);
      }
    },
  },

  created() {
    if (this.type === 'pills') {
      const width = `${parseInt(100 / this.steps.length, 10)}%`;
      this.stepStyle['width'] = width;
    }
  },

  mounted() {
    this.setActiveIndex(this.currentIndex);
  },
};
</script>
<style lang="scss">
  @import "../../scss/variables.scss";
  .steps-wrap{
    margin-left: 0;
    margin-right: 0;
    display: block;
  }
  .step-header{
    margin-left: 0;
    margin-right: 0;
    display: flex;
    .step-item{
      position: relative;
      display: block;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -ms-flex-negative: 1;
      flex-shrink: 1;
      i{
        line-height: 23px;
      }
    }
  }
  .line{
    .step-item{
      &:last-child{
        flex-grow: 0;
      }
    }
  }
  .step-content{
    position: relative;
    margin: 25px 0 10px;
    padding: 12px 20px;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -ms-flex: 1 1;
    flex: 1 1;
    &.is-active{
    }
  }
  .step-left{
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .step-icon{
    width: 26px;
    height: 26px;
    font-size: 16px;
    line-height: 26px;
    color: #fff;
    text-align: center;
    background: #d2d6de;
    border-radius: 50%;
  }
  .step-desc{
    padding-left: 40px;
    margin-left: -5px;
    padding-right: 5px;
    .step-title{
      font-weight: bold;
    }
    .step-description{

    }
  }
  .pills{
    .step-item{
      background-color: #f3f7f9;
      padding: 10px;
      &.is-active{
        color: #fff;
        background-color: $primary;
        .step-icon{
          color: $primary;
          background-color: #fff;
        }
      }
      .step-description{
        width: 80%;
        margin-left: 35px;
      }
    }
  }
  .line{
    .step-item{
      .step-desc{
        position: relative;
        display: inline-block;
        z-index: 8;
        background-color: #fff;
      }
      .step-left{
        z-index: 9;
      }
      .step-icon{
        i{
          vertical-align: text-top;
        }
      }
      &.is-active{
        .step-icon{
          background-color: $primary;
        }
      }
      &:before, &:after{
        position: absolute;
        top: 50%;
        width: 100%;
        height: 2px;
        content: "";
        background-color: rgba(0, 0, 0, 0.065);
        -webkit-transition: all .4s ease;
        transition: all .4s ease;
      }
      &:after{
        width: 0;
        background-color: #62a8ea;
      }
      &.is-done{
        &:after{
          width: 100%;
        }
        .step-icon{
          background-color: #62a8ea;
        }
      }
      &:before, &:after{
        left: 20px;
      }
      &:last-child{
        &:before, &:after{
          width: 0;
        }
      }
      .step-description{
        position: absolute;
        width: 80%;
        left: 35px;
      }

    }
  }
</style>
