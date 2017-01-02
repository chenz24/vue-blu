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
            this.checkable
              ? <th><input type="checkbox"/></th>
              : ''
          }
          {
            this._l(this.cols, (column, cellIndex) =>
              <th key={cellIndex}>
                {column.label}
              </th>
            )
          }
        </tr>
      </thead>
    );
  },
};
