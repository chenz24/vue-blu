export default {
  name: 'TableHeader',
  props: {
    columns: Array,
    checkable: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    cols() {
      return this.$parent.columns;
    },
  },

  // mounted() {
  //   console.log(this.$parent.columns);
  // },

  render(h) {// eslint-disable-line
    return (
      <thead>
      <tr>
        {
          this._l(this.cols, (column, cellIndex) =>
            <td key={cellIndex}>
              {column.label}
            </td>
          )
        }
      </tr>
      </thead>
    );
  },
};
