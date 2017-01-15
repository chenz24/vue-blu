import Popper from 'popper.js';

const PopperMixin = {
  props: {
    always: {
      type: Boolean,
      default: false,
    },
    trigger: {
      type: String,
      default: 'hover',
    },
    appendToBody: {
      type: Boolean,
      default: true,
    },
    content: {
      type: String,
      default: '',
    },
    placement: {
      type: String,
      default: 'top',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      reference: null,
      popper: null,
      isShow: false,
    };
  },

  watch: {
    disabled(val) {
      if (!val) {
        this.runPopper();
      } else {
        this.destroy();
      }
    },
  },

  methods: {
    toggle() {
      this.isShow = !this.isShow;
      if (!this.isShow) {
        this.timer = setTimeout(() => {
          this.popper.destroy();
          this.popper = null;
        }, 300);
      }
    },
    // add delay
    hidePopper() {
      this.isShow = false;
      this.timer = setTimeout(() => {
        this.popper.destroy(); // destroy popper when hide
        this.popper = null;
      }, 300);
    },
    showPopper() {
      this.isShow = true;
      if (this.timer) clearTimeout(this.timer);
      if (this.popperTimer) clearTimeout(this.popperTimer);
    },

    createInstance() {
      // this.isShow = true;
      this.showPopper();
      if (this.popper) {
        this.popper.update();
        return;
      }
      const placementMapper = {
        top: 'top',
        left: 'left',
        right: 'right',
        bottom: 'bottom',
        topLeft: 'top-end',
        topRight: 'top-start',
        leftTop: 'left-end',
        leftBottom: 'left-start',
        bottomLeft: 'bottom-end',
        bottomRight: 'bottom-start',
        rightTop: 'right-end',
        rightBottom: 'right-start',
      };
      const placement = placementMapper[this.placement] ? placementMapper[this.placement] : 'bottom';

      const reference = this.reference = this.reference || this.$el.children[0];
      const popperEl = this.$refs.popper;
      const options = {
        placement,
      };
      if (this.appendToBody) document.body.appendChild(popperEl);
      this.popper = new Popper(reference, popperEl, options);
    },

    handleClick(e) {
      e.stopPropagation();
      if (this.$el.contains(e.target)) {
        if (this.isShow) {
          // this.isShow = false;
          this.hidePopper();
        } else {
          this.createInstance();
        }
      } else if (this.$refs.popper.contains(e.target)) {
        // this.isShow = true;
        this.showPopper();
      } else {
        // this.isShow = false;
        /*eslint-disable */
        if (this.isShow) this.hidePopper();
        /*eslint-disable */
      }
    },

    bindEvent() {
      const reference = this.reference = this.reference || this.$el.children[0];
      const popper = this.$refs.popper;
      if (!reference || !popper) return;

      if (this.trigger === 'hover') {
        reference.addEventListener('mouseenter', this.createInstance);
        reference.addEventListener('mouseleave', this.hidePopper);
        popper.addEventListener('mouseenter', this.showPopper);
        popper.addEventListener('mouseleave', this.hidePopper);
      } else {
        reference.addEventListener('click', this.handleClick);
        popper.addEventListener('click', this.showPopper);
        document.documentElement.addEventListener('click', this.handleClick);
      }
    },

    runPopper() {
      if (this.disabled) return;
      if (this.always) {
        this.createInstance();
      } else {
        this.bindEvent();
      }
    },

    destroy() {
      if (this.popper) {
        this.popper.destroy();
        this.popper = null;
      }
    },

    removeEvent() {
      if (!this.reference) return;
      const popper = this.$refs.popper;
      if (this.trigger === 'focus') {
        this.reference.removeEventListener('focus', this.createInstance);
        this.reference.removeEventListener('blur', this.toggle);
      } else if (this.trigger === 'click') {
        this.reference.removeEventListener('click', this.handleClick);
        popper.removeEventListener('click', this.showPopper);
        document.documentElement.removeEventListener('click', this.handleClick);
      } else {
        this.reference.removeEventListener('mouseenter', this.createInstance);
        this.reference.removeEventListener('mouseleave', this.toggle);
      }
    },

  },

  mounted() {
    // todo disabled,
    this.runPopper();
  },

  beforeDestroy() {
    this.removeEvent();
    this.$refs.popper.remove();
    this.destroy();
  },

};

export default PopperMixin;
