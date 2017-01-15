<template>
  <div class="table-toolbar level">
    <div class="level-left">
      <div class="level-item" v-if="hasRefresh">
        <a class="button is-primary" @click="handleRefresh"><i class="fa fa-refresh"></i></a>
      </div>
      <div class="level-item" v-if="hasColumnsControl">
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
      <slot name="left"></slot>
    </div>
    <div class="level-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    hasRefresh: Boolean,
    hasColumnsControl: Boolean,
  },

  data() {
    return {
      columns: [],
    };
  },

  methods: {
    handleRefresh() {
      this.$parent.handleRefresh();
    },
    handleColumnControl(index) {
      this.$parent.columns[index].visible = !this.$parent.columns[index].visible;
      this.$parent.columns[index].isShowIcon = this.$parent.columns[index].visible ? 'check' : 'remove';
    },
  },

  created() {
    this.columns = this.$parent.columns;
  },
};
</script>
