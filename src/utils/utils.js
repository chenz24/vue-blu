export default {
  isEmpty(obj) {
    if (obj === null) return true;
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;
    if (typeof obj !== 'object') return true;
    let flag = true;
    Object.keys(obj).every((key) => {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        flag = false;
        return false;
      }
      return true;
    });
    return flag;
  },

  isFunction(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
  },

  getScroll(target, top) {
    if (typeof window === 'undefined') {
      return 0;
    }

    const prop = top ? 'pageYOffset' : 'pageXOffset';
    const method = top ? 'scrollTop' : 'scrollLeft';
    const isWindow = target === window;

    let ret = isWindow ? target[prop] : target[method];
    // ie6,7,8 standard mode
    if (isWindow && typeof ret !== 'number') {
      ret = window.document.documentElement[method];
    }

    return ret;
  },

};
