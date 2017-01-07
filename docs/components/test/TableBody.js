export default {
  name: 'TableBody',
  props: {
    columns: Array,
    data: Array,
    checkable: Boolean,
    showIndex: Boolean,
    state: {
      type: Object,
      default() {},
    },
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
  methods: {
    handleToggleSelect(row, value) {
      console.log(value);
      console.log(row);
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
              {
                this.checkable ? <th><checkbox change={value => this.handleToggleSelect(row, value)}/></th> : ''
              }
              {
                this.showIndex ? <th>{$index + 1}</th> : ''
              }
              {this._l(this.cols, (column, cellIndex) => {
                if (!column.visible) return null;
                return (
                  <td key={`${$index}${cellIndex}`}>
                    {column.renderCell.call(this._renderProxy, h, { row, column, $index, store: this.store, _self: this.context || this.$parent.$vnode.context })}
                  </td>
                );
              })}
            </tr>
          )
        }
      </tbody>
    );
  },
};
