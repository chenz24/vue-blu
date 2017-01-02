import Affix from './components/affix';
import styles from './components/styles';
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
import { DataTable, TableColumn } from './components/data-table';
import { Checkbox, CheckboxGroup } from './components/checkbox';
import Switch from './components/switch';
import Pagination from './components/pagination';
import { Steps, Step } from './components/steps';
import InputNumber from './components/input-number';
import Datepicker from './components/datepicker';

import Notify from './components/notify';
import MessageModal from './components/message-modal';

const components = {
  Affix,
  styles,
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
  TableColumn,
  Checkbox,
  CheckboxGroup,
  bSwitch: Switch,
  Pagination,
  Steps,
  Step,
  InputNumber,
  Datepicker,
};

export default {
  install(Vue, options) {// eslint-disable-line
    Object.keys(components).forEach(key => Vue.component(key, components[key]));

    Vue.prototype.$notify = Notify;
    Vue.prototype.$modal = MessageModal;
  },
};
