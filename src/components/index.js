import Affix from './affix';
import Tooltip from './tooltip';

const components = {
  Affix,
  Tooltip,
};

export default {
  install(Vue) {
    Object.keys(components).forEach(key => Vue.component(key, components[key]));
  },
};
