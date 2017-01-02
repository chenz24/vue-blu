export default {
  name: 'TableColumn',
  props: {
    label: String,
    width: Number,
    className: String,
    field: String,
    sorter: [Boolean, Function],
    selectable: Boolean,
    filters: Array,
    onFilter: Function,
  },

  data() {
    return {
      column: {},
    };
  },

  created() {
    this.column = {
      label: this.label,
      width: this.width,
      className: this.className,
      field: this.field,
      sorter: this.sorter,
      selectable: this.selectable,
    };

    const defaultRender = (h, { row, column }) => {
      const field = column.field;
      return row[field];
    };

    this.customRender = this.$options.render;
    this.$options.render = (h) => {// eslint-disable-line
      return (<div>{ this._t('default') }</div>);
    };

    const _self = this;
    this.column.renderCell = (h, data) => {
      if (_self.$vnode.data.inlineTemplate) {
        data._self = _self.context || data._self;
        if (Object.prototype.toString.call(data._self) === '[object Object]') {
          Object.assign(data, data._self);
          data._staticTrees = _self._staticTrees;
          data.$options.staticRenderFns = _self.$options.staticRenderFns;
          return _self.customRender.call(data);
        }
      }
      return defaultRender(h, data);
    };
  },

  mounted() {
    this.$parent.columns.push(this.column);
  },
};
