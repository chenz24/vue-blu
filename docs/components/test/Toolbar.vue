<template>
  <div class="table-toolbar level">
    <div class="level-left">
      <div class="level-item">
        <a class="button is-primary" @click="handleRefresh"><i class="fa fa-refresh"></i></a>
      </div>
      <div class="level-item">
        <dropdown>
          <a class="button is-primary" @click="handleRefresh"><i class="fa fa-eye"></i></a>
          <div slot="content">
            <menus>
              <menu-item icon="user"
                         v-for="(column, index) in columns"
                         :icon="column.isShowIcon"
                         :click="handleColumnControl.bind(this, index)">{{ column.label }}</menu-item>
            </menus>
          </div>
        </dropdown>
      </div>
      <div class="level-item">
        <p class="control has-addons">
          <input class="input" type="text" placeholder="Find a post">
          <button class="button">Search</button>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    hasRefresh: Boolean,
    hasColumnControl: Boolean,
  },

  data() {
    return {
      columns: [],
    };
  },

  methods: {
    handleRefresh() {
      console.log('refresh');
    },
    handleColumnControl(index) {
      this.$parent.columns[index].visible = !this.$parent.columns[index].visible;
      this.$parent.columns[index].isShowIcon = this.$parent.columns[index].visible ? 'check' : 'remove';
    },
  },

  created() {
    this.columns = this.$parent.columns;
  },
//
//  mounted() {
//    this.columns = this.$parent.columns.map((column) => {
//      column.icon = column.visible ? 'fa-check' : '';
//      return column;
//    });
//    console.log('columns', this.columns);
//  },
};
</script>
