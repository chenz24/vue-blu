export default {
  name: 'TableBody',
  props: {
    columns: Array,
    data: Array,
  },
  data() {
    return {
      cols: [],
    };
  },
  computed: {
    cols() {
      return this.$parent.columns;
    },
  },
  watch: {
    cols(newVal) {
      console.log(newVal);
    },
  },
  created() {

  },
  render(h) {// eslint-disable-line
    return (
      <tbody>
        {
          this._l(this.data, (row, $index) =>
            <tr>
              {this._l(this.cols, (column, cellIndex) =>
                <td key={`${$index}${cellIndex}`}>
                  {column.renderCell.call(this._renderProxy, h, { row, column, $index, store: this.store, _self: this.context || this.$parent.$vnode.context })}
                </td>
              )}
            </tr>
          )
        }
      </tbody>
    );
  },
};
