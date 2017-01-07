export default {
  name: 'Column',
  props: {
    label: String,
    width: Number,
    className: String,
    field: String,
    sorter: [Boolean, Function, String],
    selectable: Boolean,
    filters: Array,
    onFilter: Function,
    visible: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      column: {},
    };
  },

  created() {
    const isShowIcon = this.visible ? 'check' : 'remove';
    this.column = {
      label: this.label,
      width: this.width,
      className: this.className,
      field: this.field,
      sorter: this.sorter,
      selectable: this.selectable,
      scopedSlots: this.$scopedSlots,
      visible: this.visible,
      isShowIcon,
    };

    this.column.renderCell = (h, { row, column }) => {// eslint-disable-line
      if (this.$scopedSlots.default) {
        return h('div', { class: 'child' }, [
          this.$scopedSlots.default(row),
        ]);
      }
      return row[column.field];
    };
  },

  mounted() {
    this.$parent.columns.push(this.column);
  },

  render(h) {// eslint-disable-line
    return null;
  },
};
