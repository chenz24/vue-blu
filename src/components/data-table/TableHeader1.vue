<template>
  <thead>
    <tr>
      <th v-if="checkable"><input type="checkbox"></th>
      <th v-for="(column, index) in columns"
          @click="handleToggleSort(column)"
          :class="{sortable: column.sorter, 'is-sorting': column.key === params.sortKey}">
        <span>{{ column.title }}</span>
        <span class="icon is-small is-pulled-right" v-if="column.sorter">
          <i v-if="column.key === params.sortKey" class="fa" :class="{'fa-sort-asc': params.reverse===0, 'fa-sort-desc': params.reverse===1}"></i>
          <i v-if="column.key !== params.sortKey" class="fa fa-sort"></i>
        </span>
        <span class="icon is-small filter-key" @click="handleFilterClick(column, $event)"><i class="fa fa-filter"></i></span>
      </th>
    </tr>
  </thead>
</template>
<script>
export default {
  props: {
    columns: Array,
    checkable: Boolean,
    params: {
      type: Object,
      default() {},
    },
  },

  data() {
    return {
      a: '',
    };
  },

  methods: {
    handleToggleSort(column) {
      if (column.sorter) {
        this.$parent.handleToggleSort(column);
      }
    },

    handleFilterClick(column, event) {
      this.$parent.handleFilterClick(column.key, event);
    },
  },

  mounted() {
    console.log(this.columns);
  },
};
</script>
