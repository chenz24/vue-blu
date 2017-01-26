/*!
 * vue-blu v0.1.9
 * (c) 2017 Chenz <chenz8606@gmail.com>
 * Released under the MIT License.
 * Documentation: https://chenz24.github.io/vue-blu/#/
 */
import './scss/main.scss';

import Affix from './components/affix';
import Tooltip from './components/tooltip';
import Popover from './components/popover';
import Dropdown from './components/dropdown';
import { Timeline, TimelineItem } from './components/timeline';
import Tag from './components/tag';
import Modal from './components/modal';
import ProgressBar from './components/progressbar';
import Alert from './components/alert';
import { Breadcrumb, BreadcrumbItem } from './components/breadcrumb';
import { Collapse, CollapseItem } from './components/collapse';
import { Tabs, TabItem } from './components/tab';
import { Menus, MenuItem } from './components/menu';
import Aside from './components/aside';
import PopConfirm from './components/pop-confirm';
import ScrollTo from './components/scroll-to';
import { DataTable, Column, TableToolbar } from './components/data-table';
import { Checkbox, CheckboxGroup } from './components/checkbox';
import { Radio, RadioGroup, RadioButton } from './components/radio';
import Switch from './components/switch';
import Pagination from './components/pagination';
import { Steps, Step } from './components/steps';
import InputNumber from './components/input-number';
import Datepicker from './components/datepicker';
import { Select, Option } from './components/select';

import Notify from './components/notify';
import MessageModal from './components/message-modal';

const components = {
  Affix,
  Tooltip,
  Popover,
  Dropdown,
  Timeline,
  TimelineItem,
  Tag,
  Modal,
  ProgressBar,
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Collapse,
  CollapseItem,
  Tabs,
  TabItem,
  Menus,
  MenuItem,
  bAside: Aside,
  PopConfirm,
  ScrollTo,
  DataTable,
  Column,
  TableToolbar,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  RadioButton,
  bSwitch: Switch,
  Pagination,
  Steps,
  Step,
  InputNumber,
  Datepicker,
  bSelect: Select,
  bOption: Option,
};

const install = function (Vue, options) {// eslint-disable-line
  if (install.installed) return;

  Object.keys(components).forEach(key => Vue.component(key, components[key]));

  Vue.prototype.$notify = Notify;
  Vue.prototype.$modal = MessageModal;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  version: '0.1.9',
  install,
};
