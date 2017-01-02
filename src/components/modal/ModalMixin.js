
const ModalMixin = {
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
    okText: {
      type: String,
      default: 'OK',
    },
    cancelText: {
      type: String,
      default: 'Cancel',
    },
    onOk: {
      type: Function,
      default() {},
    },
    onCancel: {
      type: Function,
      default() {},
    },
    backdrop: {
      type: Boolean,
      default: true,
    },
    backdropClosable: {
      type: Boolean,
      default: true,
    },
    okLoading: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 640,
    },
    showOk: {
      type: Boolean,
      default: true,
    },
    showCancel: {
      type: Boolean,
      default: true,
    },
    transition: {
      type: String,
      default: 'fade',
    },
    showHeader: {
      type: Boolean,
      default: true,
    },
    showFooter: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      isActive: false,
      isLoading: false,
    };
  },

  computed: {
    modalWidth() {
      if (this.width !== 640 && this.width !== 0) {
        return { width: `${this.width}px` };
      }
      return null;
    },
  },

  methods: {
    active() {
      this.isActive = true;
    },
    handleOk() {
      if (this.okLoading) {
        this.isLoading = true;
        this.onOk();
      } else {
        this.onOk();
        this.handleClose();
      }
    },
    handleCancel() {
      this.onCancel();
      this.handleClose();
    },
    handleClose() {
      this.$emit('close');
    },
    backdropClose() {
      if (this.backdropClosable) {
        this.handleCancel();
      }
    },
  },

  watch: {
    isShow(val) {
      this.isActive = val;
      if (!val && this.isLoading) {
        this.isLoading = false;
      }
    },
  },

  mounted() {
    this.$nextTick(() => {
      document.body.appendChild(this.$el);
    });
  },

  beforeDestroy() {
    this.$el.remove();
  },
};

export default ModalMixin;
