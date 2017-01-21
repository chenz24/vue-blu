/*eslint-disable */
import EnRouter from './router.en';

let router = [
  {
    path: '/',
    component: require('./components/Index.vue'),
    children: [{
        path: '',
        component: require('./pages/cn/gettingStarted.md'),
      }, {
        path: 'changelog',
        component: require('./pages/cn/changelog.md'),
      }, {
        path: 'customize',
        component: require('./pages/cn/Customize.md'),
      },
    ],
  },
  {
    path: '/components',
    component: require('./components/components.vue'),
    children: [{
        path: 'helper',
        component: require('./pages/cn/Helper.md'),
      },{
        path: 'layout',
        component: require('./pages/cn/Layout.md'),
      },{
        path: 'button',
        component: require('./pages/cn/Button.md'),
      }, {
        path: 'icon',
        component: require('./pages/cn/Icon.md'),
      }, {
        path: 'transition',
        component: require('./pages/cn/Transition.md'),
      }, {
        path: 'affix',
        component: require('./pages/cn/Affix.md'),
      }, {
        path: 'scrollto',
        component: require('./pages/cn/ScrollTo.md'),
      }, {
        path: 'tabs',
        component: require('./pages/cn/Tabs.md'),
      }, {
        path: 'tag',
        component: require('./pages/cn/Tag.md'),
      }, {
        path: 'breadcrumb',
        component: require('./pages/cn/Breadcrumb.md'),
      }, {
        path: 'progress',
        component: require('./pages/cn/Progress.md'),
      }, {
        path: 'timeline',
        component: require('./pages/cn/Timeline.md'),
      }, {
        path: 'modal',
        component: require('./pages/cn/Modal.md'),
      }, {
        path: 'aside',
        component: require('./pages/cn/Aside.md'),
      }, {
        path: 'alert',
        component: require('./pages/cn/Alert.md'),
      }, {
        path: 'notify',
        component: require('./pages/cn/Notify.md'),
      }, {
        path: 'collapse',
        component: require('./pages/cn/Collapse.md'),
      }, {
        path: 'tooltip',
        component: require('./pages/cn/Tooltip.md'),
      }, {
        path: 'popover',
        component: require('./pages/cn/Popover.md'),
      }, {
        path: 'popconfirm',
        component: require('./pages/cn/PopConfirm.md'),
      }, {
        path: 'datatable',
        component: require('./pages/cn/DataTable.md'),
      }, {
        path: 'checkbox',
        component: require('./pages/cn/Checkbox.md'),
      }, {
        path: 'radio',
        component: require('./pages/cn/Radio.md'),
      }, {
        path: 'switch',
        component: require('./pages/cn/Switch.md'),
      }, {
        path: 'dropdown',
        component: require('./pages/cn/Dropdown.md'),
      }, {
        path: 'pagination',
        component: require('./pages/cn/Pagination.md'),
      }, {
        path: 'steps',
        component: require('./pages/cn/Steps.md'),
      }, {
        path: 'menu',
        component: require('./pages/cn/Menu.md'),
        children: [{
          path: 'submenu1',
          component: require('./pages/cn/Menu.md'),
        }, {
          path: 'submenu2',
          component: require('./pages/cn/Menu.md'),
        }, {
          path: 'submenu3',
          component: require('./pages/cn/Menu.md'),
        },],
      },{
        path: 'inputnumber',
        component: require('./pages/cn/InputNumber.md'),
      },{
        path: 'form',
        component: require('./pages/cn/Form.md'),
      },{
        path: 'datepicker',
        component: require('./pages/cn/DatePicker.md'),
      },{
        path: 'select',
        component: require('./pages/cn/Select.md'),
      }

    ],
  },
];

router = router.concat(EnRouter);
export default router;
/*eslint-disable */
