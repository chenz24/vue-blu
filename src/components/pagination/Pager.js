export default {
  props: {
    active: Boolean,
    pageNo: Number,
    size: String,
  },
  render(h) {// eslint-disable-line
    const activeClass = this.active ? `button is-primary ${this.size}` : `button ${this.size}`;
    return (
      <li><a class={activeClass} onClick={this.$parent.handleChangePage.bind(this, this.pageNo)}>{this.pageNo}</a></li>
    );
  },
};
