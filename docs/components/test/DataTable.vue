<template>
  <div class="data-table-container">
    <slot></slot>
    <div class="data-table-header" ref="header" v-if="height">
      <table class="table data-table is-bordered">
        <colgroup>
          <col v-for="col in cols" :width="col">
        </colgroup>
        <table-header :data="showData" :showIndex="showIndex"></table-header>
      </table>
    </div>

    <div class="data-table-main" :style="mainStyle">
      <table class="table is-bordered data-table">
        <colgroup>
          <col v-for="col in cols" :width="col">
        </colgroup>
        <template v-if="!height">
          <table-header :state="state" :checkable="checkable" :showIndex="showIndex"></table-header>
        </template>
        <table-body :state="state" :checkable="checkable" :data="showData" :showIndex="showIndex"></table-body>
      </table>
    </div>
    <pagination :total="pagination.total" align="right" :change="handlePageChange" :pageSizeChange="handlePageSizeChange"></pagination>
  </div>
</template>
<script>
import map from 'lodash/map';
import sortBy from 'lodash/sortBy';
import utils from '../../../src/utils/utils';

import TableHeader from './TableHeader';
import TableBody from './TableBody';

export default {
  components: { TableHeader, TableBody },
  name: 'DataTable',
  props: {
    data: Array,
    change: {
      type: Function,
      default() {},
    },
    height: Number,
    checkable: {
      type: Boolean,
      default: false,
    },
    showIndex: Boolean,
    pagination: {},
  },

  data() {
    return {
      state: {
        sortKey: '',
        reverse: '',
        pagination: this.pagination,
      },
      cols: [],
      columns: [],
      selected: [],
      isTable: true,
      interData: [],
      showData: [],
    };
  },

  computed: {
    mainStyle() {
      return this.height ? { height: `${this.height}px`, overflow: 'scroll' } : null;
    },
  },

  watch: {
    columns(newVal) {
      console.log(newVal);
    },
    data(val) {
      console.log(val);
      this.interData = val;
      this.handleReorganizeData();
    },
  },

  methods: {
    calcColumnWidth() {
      let width = this.$el.offsetWidth;
      let length = this.columns.length;

      if (this.checkable) {
        width -= 40;
        this.cols.push(40);
      }

      if (this.showIndex) {
        width -= 40;
        this.cols.push(40);
      }

      map(this.columns, (column) => {
        if (column.width) {
          width -= column.width;
          length -= 1;
        }
      });
      const avgWidth = width / length;

      map(this.columns, (column) => {
        if (column.width) {
          this.cols.push(column.width);
        } else {
          this.height ? this.cols.push(avgWidth) : this.cols.push('');
        }
      });
    },

    handleToggleSort(column) {
      if (!column.sorter || !column.field) return;
      this.state.sortKey = column.field;
      this.state.reverse = !this.state.reverse;
      if (utils.isFunction(column.sorter) || column.sorter === 'custom') {
        this.interData = sortBy(this.interData, column.field);
        if (this.state.reverse) this.interData.reverse();
      } else {
        console.log('remote');
      }
      this.handleTableChange();
    },

    handlePageSizeChange(current, pageSize) {
      console.log(current);
      this.state.pagination.pageSize = pageSize;
      this.handleTableChange();
    },

    handlePageChange(current) {
      this.state.pagination.current = current;
      const onPageChange = this.state.pagination.change;
      if (onPageChange && utils.isFunction(onPageChange)) {
        onPageChange(current);
      }
      this.handleTableChange();
    },

    handleInitTable() {},

    handleTableChange() {
      // listen to pageSize or sorter
      this.change(this.state);
      this.handleReorganizeData();
    },

    handleReorganizeData() {
      console.log('handleReorganizeData');
      if (this.state.pagination.total) {
        const current = this.state.pagination.current || 1;
        const pageSize = this.state.pagination.pageSize || 10;

        if (this.interData.length <= pageSize) {
          this.showData = this.interData;
        } else {
          const start = (current - 1) * pageSize;
          const end = start + pageSize;
          this.showData = this.interData.slice(start, end);
        }
      } else {
        this.showData = this.interData;
      }
    },

  },

  created() {
    this.interData = this.data;
  },

  mounted() {
    this.calcColumnWidth();
    this.handleReorganizeData();
  },
};
</script>
<style lang="scss">
.data-table{
  thead tr{
    background-color: #f6f7f8;
    .icon{
      vertical-align: middle;
    }
    .filter-key{
      cursor: pointer;
    }
    .is-sorting{
      background-color: #fafafa;
    }
    th{
      position: relative;
    }
  }
  .sortable{
    cursor: pointer;
    &:hover{
       background-color: #fafafa;
    }
  }
  .sort-trigger{
    position: absolute;
    right: 5px;
    top: 50%;
    margin-top: -10px;
    .fa{
      vertical-align: baseline;
    }
    &.sort-asc{
      margin-top: -6px;
    }
    &.sort-desc{
      margin-top: -13px;
    }
  }
}
.data-table-header{
  .table{
    margin-bottom: 0;
    th{
      border-bottom: none;
    }
  }
}
.table.is-bordered{
  th{
    border-color: #e6e3e3;
  }
}
.table-toolbar{
  &.level{
    margin-bottom: 10px;
  }
}
</style>

