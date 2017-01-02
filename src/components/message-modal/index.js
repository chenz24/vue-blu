import Vue from 'vue';
import MessageModal from './MessageModal';

function open(propsData) {
  const ModalComponent = Vue.extend(MessageModal);
  return new ModalComponent({
    el: document.createElement('div'),
    propsData,
  });
}

export default {
  open(params) {
    const defaultParam = { title: '消息', content: '' };
    const propsData = Object.assign(defaultParam, params);
    return open(propsData);
  },

  confirm(params) {
    const defaultParam = { title: '提示', content: '', icon: 'question-circle-o', type: 'warning' };
    const propsData = Object.assign(defaultParam, params);
    return open(propsData);
  },

  alert(params) {
    const defaultParam = { title: '提示', type: 'danger', icon: 'exclamation-triangle', content: '', showCancel: false };
    const propsData = Object.assign(defaultParam, params);
    return open(propsData);
  },
};
