<template>
  <div>
    <slot></slot>
    <div class="table-toolbar"></div>
    <div class="data-table-header" ref="header" v-if="height">
      <table class="table data-table is-bordered">
        <colgroup>
          <col v-for="col in cols" :width="col">
        </colgroup>
        <table-header :data="data"></table-header>
      </table>
    </div>

    <div class="data-table-main" :style="mainStyle">
      <table class="table is-bordered is-striped data-table">
        <colgroup>
          <col v-for="col in cols" :width="col">
        </colgroup>
        <template v-if="!height">
          <table-header :params="params" :checkable="checkable"></table-header>
        </template>
        <table-body :params="params" :checkable="checkable" :data="data"></table-body>
      </table>
    </div>

  </div>
</template>
<script>
  import map from 'lodash/map';
  import TableHeader from './TableHeader';
  import TableBody from './TableBody';

  export default {
    components: { TableHeader, TableBody },
    name: 'DataTable',
    props: {
      data: Array,
      onChange: {
        type: Function,
        default() {},
      },
      height: Number,
      checkable: {
        type: Boolean,
        default: false,
      },
    },

    data() {
      return {
        params: {
          sortKey: '',
          reverse: '',
        },
        cols: [],
        columns: [],
        isTable: true,
      };
    },

    computed: {
      mainStyle() {
        return this.height ? { height: `${this.height}px`, overflow: 'scroll' } : null;
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

    },

    mounted() {
      this.calcColumnWidth();
    },
    watch: {
      columns(newVal) {
        console.log(newVal);
      },
    },
  };
</script>
<style lang="scss">
.data-table{
  thead tr{
    background-color: #eceeef;
    .icon{
      vertical-align: middle;
    }
    .filter-key{
      cursor: pointer;
    }
    .is-sorting{
      background-color: #fafafa;
    }
  }
  .sortable{
    cursor: pointer;
    &:hover{
       background-color: #fafafa;
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
</style>
