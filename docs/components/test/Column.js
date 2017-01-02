export default {
  name: 'Column',
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
      scopedSlots: this.$scopedSlots,
    };

    this.column.renderCell = (h, { row, column }) => {// eslint-disable-line
      console.log(row);
      // let data = {};
      // Object.keys(row).forEach((key) => {
      //   console.log(row[obj]);
      //   data[key] = row[]
      // });
      if (this.$scopedSlots.default) {
        return h('div', { class: 'child'}, [// eslint-disable-line
          this.$scopedSlots.default(row)// eslint-disable-line
        ]);// eslint-disable-line
      }
      return row[column.field];
    };

    // const defaultRender = (h, { row, column }) => {
    //   const field = column.field;
    //   return row[field];
    // };
    //
    // this.customRender = this.$options.render;
    // this.$options.render = (h) => {// eslint-disable-line
    //   return (<div>{ this._t('default') }</div>);
    // };
    //
    // const _self = this;
    // this.column.renderCell = (h, data) => {
    //   if (_self.$vnode.data.inlineTemplate || _self.$scopedSlots.default) {
    //     console.log(_self.inlineTemplate);
    //     data._self = _self.context || data._self;
    //     if (Object.prototype.toString.call(data._self) === '[object Object]') {
    //       Object.assign(data, data._self);
    //       data._staticTrees = _self._staticTrees;
    //       data.$options.staticRenderFns = _self.$options.staticRenderFns;
    //       return _self.customRender.call(data);
    //       // return _self.$scopedSlots.default;
    //       // console.log('');
    //     }
    //   }
    //   return defaultRender(h, data);
    // };
  },

  mounted() {
    this.$parent.columns.push(this.column);
    console.log(this);
  },

  render(h) {// eslint-disable-line
    return (
      <span></span>
    );
  },
};
