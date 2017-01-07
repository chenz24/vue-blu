/*eslint-disable */
export default [
  {
    path: '/',
    component: require('./components/Index.vue'),
    children: [{
        name: 'gettingStarted',
        path: '',
        component: require('./pages/gettingStarted.md'),
      }, {
        name: 'changelog',
        path: 'changelog',
        component: require('./pages/changelog.md'),
      }, {
        name: 'customize',
        path: 'customize',
        component: require('./pages/Customize.md'),
      },
    ],
  },
  {
    path: '/test',
    component: require('./components/test.vue'),
  },
  {
    path: '/table-test',
    component: require('./components/Table.vue'),
  },
  {
    path: '/components',
    name: 'components',
    component: require('./components/components.vue'),
    children: [{
        path: 'helper',
        component: require('./pages/Helper.md'),
      },{
        path: 'layout',
        component: require('./pages/Layout.md'),
      },{
        path: 'button',
        component: require('./pages/Button.md'),
      }, {
        path: 'icon',
        component: require('./pages/Icon.md'),
      }, {
        path: 'transition',
        component: require('./pages/Transition.md'),
      }, {
        path: 'affix',
        component: require('./pages/Affix.md'),
      }, {
        path: 'scrollto',
        component: require('./pages/ScrollTo.md'),
      }, {
        path: 'tabs',
        component: require('./pages/Tabs.md'),
      }, {
        path: 'tag',
        component: require('./pages/Tag.md'),
      }, {
        path: 'breadcrumb',
        component: require('./pages/Breadcrumb.md'),
      }, {
        path: 'progress',
        component: require('./pages/Progress.md'),
      }, {
        path: 'timeline',
        component: require('./pages/Timeline.md'),
      }, {
        path: 'modal',
        component: require('./pages/Modal.md'),
      }, {
        path: 'aside',
        component: require('./pages/Aside.md'),
      }, {
        path: 'alert',
        component: require('./pages/Alert.md'),
      }, {
        path: 'notify',
        component: require('./pages/Notify.md'),
      }, {
        path: 'collapse',
        component: require('./pages/Collapse.md'),
      }, {
        path: 'tooltip',
        component: require('./pages/Tooltip.md'),
      }, {
        path: 'popover',
        component: require('./pages/Popover.md'),
      }, {
        path: 'popconfirm',
        component: require('./pages/PopConfirm.md'),
      }, {
        path: 'datatable',
        component: require('./pages/DataTable.md'),
      }, {
        path: 'checkbox',
        component: require('./pages/Checkbox.md'),
      }, {
        path: 'radio',
        component: require('./pages/Radio.md'),
      }, {
        path: 'switch',
        component: require('./pages/Switch.md'),
      }, {
        path: 'dropdown',
        component: require('./pages/Dropdown.md'),
      }, {
        path: 'pagination',
        component: require('./pages/Pagination.md'),
      }, {
        path: 'steps',
        component: require('./pages/Steps.md'),
      }, {
        path: 'menu',
        component: require('./pages/Menu.md'),
        children: [{
          path: 'submenu1',
          component: require('./pages/Menu.md'),
        }, {
          path: 'submenu2',
          component: require('./pages/Menu.md'),
        }, {
          path: 'submenu3',
          component: require('./pages/Menu.md'),
        },],
      },{
        path: 'inputnumber',
        component: require('./pages/InputNumber.md'),
      },{
        path: 'form',
        component: require('./pages/Form.md'),
      },{
        path: 'datepicker',
        component: require('./pages/DatePicker.md'),
      }

    ],
  },
];
/*eslint-disable */
// export default routes;
