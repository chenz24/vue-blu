(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("vue-blu", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["vue-blu"] = factory(require("vue"));
	else
		root["vue-blu"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_83__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _keys = __webpack_require__(57);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	__webpack_require__(185);
	
	var _affix = __webpack_require__(84);
	
	var _affix2 = _interopRequireDefault(_affix);
	
	var _tooltip = __webpack_require__(114);
	
	var _tooltip2 = _interopRequireDefault(_tooltip);
	
	var _popover = __webpack_require__(105);
	
	var _popover2 = _interopRequireDefault(_popover);
	
	var _dropdown = __webpack_require__(95);
	
	var _dropdown2 = _interopRequireDefault(_dropdown);
	
	var _timeline = __webpack_require__(113);
	
	var _tag = __webpack_require__(112);
	
	var _tag2 = _interopRequireDefault(_tag);
	
	var _modal = __webpack_require__(99);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _progressbar = __webpack_require__(106);
	
	var _progressbar2 = _interopRequireDefault(_progressbar);
	
	var _alert = __webpack_require__(85);
	
	var _alert2 = _interopRequireDefault(_alert);
	
	var _breadcrumb = __webpack_require__(87);
	
	var _collapse = __webpack_require__(89);
	
	var _tab = __webpack_require__(111);
	
	var _menu = __webpack_require__(97);
	
	var _aside = __webpack_require__(86);
	
	var _aside2 = _interopRequireDefault(_aside);
	
	var _popConfirm = __webpack_require__(104);
	
	var _popConfirm2 = _interopRequireDefault(_popConfirm);
	
	var _scrollTo = __webpack_require__(108);
	
	var _scrollTo2 = _interopRequireDefault(_scrollTo);
	
	var _dataTable = __webpack_require__(93);
	
	var _checkbox = __webpack_require__(88);
	
	var _radio = __webpack_require__(107);
	
	var _switch = __webpack_require__(110);
	
	var _switch2 = _interopRequireDefault(_switch);
	
	var _pagination = __webpack_require__(103);
	
	var _pagination2 = _interopRequireDefault(_pagination);
	
	var _steps = __webpack_require__(109);
	
	var _inputNumber = __webpack_require__(96);
	
	var _inputNumber2 = _interopRequireDefault(_inputNumber);
	
	var _datepicker = __webpack_require__(94);
	
	var _datepicker2 = _interopRequireDefault(_datepicker);
	
	var _notify = __webpack_require__(100);
	
	var _notify2 = _interopRequireDefault(_notify);
	
	var _messageModal = __webpack_require__(98);
	
	var _messageModal2 = _interopRequireDefault(_messageModal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var components = {
	  Affix: _affix2.default,
	  Tooltip: _tooltip2.default,
	  Popover: _popover2.default,
	  Dropdown: _dropdown2.default,
	  Timeline: _timeline.Timeline,
	  TimelineItem: _timeline.TimelineItem,
	  Tag: _tag2.default,
	  Modal: _modal2.default,
	  ProgressBar: _progressbar2.default,
	  Alert: _alert2.default,
	  Breadcrumb: _breadcrumb.Breadcrumb,
	  BreadcrumbItem: _breadcrumb.BreadcrumbItem,
	  Collapse: _collapse.Collapse,
	  CollapseItem: _collapse.CollapseItem,
	  Tabs: _tab.Tabs,
	  TabItem: _tab.TabItem,
	  Menus: _menu.Menus,
	  MenuItem: _menu.MenuItem,
	  bAside: _aside2.default,
	  PopConfirm: _popConfirm2.default,
	  ScrollTo: _scrollTo2.default,
	  DataTable: _dataTable.DataTable,
	  Column: _dataTable.Column,
	  TableToolbar: _dataTable.TableToolbar,
	  Checkbox: _checkbox.Checkbox,
	  CheckboxGroup: _checkbox.CheckboxGroup,
	  Radio: _radio.Radio,
	  RadioGroup: _radio.RadioGroup,
	  RadioButton: _radio.RadioButton,
	  bSwitch: _switch2.default,
	  Pagination: _pagination2.default,
	  Steps: _steps.Steps,
	  Step: _steps.Step,
	  InputNumber: _inputNumber2.default,
	  Datepicker: _datepicker2.default
	};
	
	var install = function install(Vue, options) {
	  if (install.installed) return;
	
	  (0, _keys2.default)(components).forEach(function (key) {
	    return Vue.component(key, components[key]);
	  });
	
	  Vue.prototype.$notify = _notify2.default;
	  Vue.prototype.$modal = _messageModal2.default;
	};
	
	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	}
	
	module.exports = {
	  version: '0.1.9',
	  install: install
	};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(75);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.7' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(211),
	    getValue = __webpack_require__(240);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(8)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(10);
	var createDesc = __webpack_require__(23);
	module.exports = __webpack_require__(7) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(19);
	var IE8_DOM_DEFINE = __webpack_require__(60);
	var toPrimitive = __webpack_require__(45);
	var dP = Object.defineProperty;
	
	exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(61);
	var defined = __webpack_require__(36);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(42)('wks');
	var uid = __webpack_require__(24);
	var Symbol = __webpack_require__(3).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(65);
	var enumBugKeys = __webpack_require__(37);
	
	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(1);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(15),
	    getRawTag = __webpack_require__(237),
	    objectToString = __webpack_require__(266);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _popper = __webpack_require__(289);
	
	var _popper2 = _interopRequireDefault(_popper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PopperMixin = {
	  props: {
	    always: {
	      type: Boolean,
	      default: false
	    },
	    trigger: {
	      type: String,
	      default: 'hover'
	    },
	    appendToBody: {
	      type: Boolean,
	      default: true
	    },
	    content: {
	      type: String,
	      default: ''
	    },
	    placement: {
	      type: String,
	      default: 'top'
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    }
	  },
	
	  data: function data() {
	    return {
	      reference: null,
	      popper: null,
	      isShow: false
	    };
	  },
	
	
	  watch: {
	    disabled: function disabled(val) {
	      if (!val) {
	        this.runPopper();
	      } else {
	        this.destroy();
	      }
	    }
	  },
	
	  methods: {
	    toggle: function toggle() {
	      var _this = this;
	
	      this.isShow = !this.isShow;
	      if (!this.isShow) {
	        this.timer = setTimeout(function () {
	          _this.popper.destroy();
	          _this.popper = null;
	        }, 300);
	      }
	    },
	    hidePopper: function hidePopper() {
	      var _this2 = this;
	
	      this.isShow = false;
	      this.timer = setTimeout(function () {
	        _this2.popper.destroy();
	        _this2.popper = null;
	      }, 300);
	    },
	    showPopper: function showPopper() {
	      this.isShow = true;
	      if (this.timer) clearTimeout(this.timer);
	      if (this.popperTimer) clearTimeout(this.popperTimer);
	    },
	    createInstance: function createInstance() {
	      this.showPopper();
	      if (this.popper) {
	        this.popper.update();
	        return;
	      }
	      var placementMapper = {
	        top: 'top',
	        left: 'left',
	        right: 'right',
	        bottom: 'bottom',
	        topLeft: 'top-end',
	        topRight: 'top-start',
	        leftTop: 'left-end',
	        leftBottom: 'left-start',
	        bottomLeft: 'bottom-end',
	        bottomRight: 'bottom-start',
	        rightTop: 'right-end',
	        rightBottom: 'right-start'
	      };
	      var placement = placementMapper[this.placement] ? placementMapper[this.placement] : 'bottom';
	
	      var reference = this.reference = this.reference || this.$el.children[0];
	      var popperEl = this.$refs.popper;
	      var options = {
	        placement: placement
	      };
	      if (this.appendToBody) document.body.appendChild(popperEl);
	      this.popper = new _popper2.default(reference, popperEl, options);
	    },
	    handleClick: function handleClick(e) {
	      e.stopPropagation();
	      if (this.$el.contains(e.target)) {
	        if (this.isShow) {
	          this.hidePopper();
	        } else {
	          this.createInstance();
	        }
	      } else if (this.$refs.popper.contains(e.target)) {
	        this.showPopper();
	      } else {
	        if (this.isShow) this.hidePopper();
	      }
	    },
	    bindEvent: function bindEvent() {
	      var reference = this.reference = this.reference || this.$el.children[0];
	      var popper = this.$refs.popper;
	      if (!reference || !popper) return;
	
	      if (this.trigger === 'hover') {
	        reference.addEventListener('mouseenter', this.createInstance);
	        reference.addEventListener('mouseleave', this.hidePopper);
	        popper.addEventListener('mouseenter', this.showPopper);
	        popper.addEventListener('mouseleave', this.hidePopper);
	      } else {
	        reference.addEventListener('click', this.handleClick);
	        popper.addEventListener('click', this.showPopper);
	        document.documentElement.addEventListener('click', this.handleClick);
	      }
	    },
	    runPopper: function runPopper() {
	      if (this.disabled) return;
	      if (this.always) {
	        this.createInstance();
	      } else {
	        this.bindEvent();
	      }
	    },
	    destroy: function destroy() {
	      if (this.popper) {
	        this.popper.destroy();
	        this.popper = null;
	      }
	    },
	    removeEvent: function removeEvent() {
	      if (!this.reference) return;
	      var popper = this.$refs.popper;
	      if (this.trigger === 'focus') {
	        this.reference.removeEventListener('focus', this.createInstance);
	        this.reference.removeEventListener('blur', this.toggle);
	      } else if (this.trigger === 'click') {
	        this.reference.removeEventListener('click', this.handleClick);
	        popper.removeEventListener('click', this.showPopper);
	        document.documentElement.removeEventListener('click', this.handleClick);
	      } else {
	        this.reference.removeEventListener('mouseenter', this.createInstance);
	        this.reference.removeEventListener('mouseleave', this.toggle);
	      }
	    }
	  },
	
	  mounted: function mounted() {
	    this.runPopper();
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.removeEvent();
	    this.$refs.popper.remove();
	    this.destroy();
	  }
	};
	
	exports.default = PopperMixin;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(3);
	var core = __webpack_require__(4);
	var ctx = __webpack_require__(160);
	var hide = __webpack_require__(9);
	var has = __webpack_require__(5);
	var PROTOTYPE = 'prototype';
	
	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && has(exports, key)) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = true;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(252),
	    listCacheDelete = __webpack_require__(253),
	    listCacheGet = __webpack_require__(254),
	    listCacheHas = __webpack_require__(255),
	    listCacheSet = __webpack_require__(256);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(52);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(249);
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	module.exports = getMapData;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(6);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(33);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = toKey;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(80),
	    isLength = __webpack_require__(54);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(16),
	    isObjectLike = __webpack_require__(17);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}
	
	module.exports = isSymbol;


/***/ }),
/* 34 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var ModalMixin = {
	  props: {
	    isShow: {
	      type: Boolean,
	      default: false
	    },
	    title: {
	      type: String
	    },
	    okText: {
	      type: String,
	      default: 'OK'
	    },
	    cancelText: {
	      type: String,
	      default: 'Cancel'
	    },
	    onOk: {
	      type: Function,
	      default: function _default() {}
	    },
	    onCancel: {
	      type: Function,
	      default: function _default() {}
	    },
	    backdrop: {
	      type: Boolean,
	      default: true
	    },
	    backdropClosable: {
	      type: Boolean,
	      default: true
	    },
	    okLoading: {
	      type: Boolean,
	      default: false
	    },
	    width: {
	      type: Number,
	      default: 640
	    },
	    showOk: {
	      type: Boolean,
	      default: true
	    },
	    showCancel: {
	      type: Boolean,
	      default: true
	    },
	    transition: {
	      type: String,
	      default: 'fade'
	    },
	    showHeader: {
	      type: Boolean,
	      default: true
	    },
	    showFooter: {
	      type: Boolean,
	      default: true
	    }
	  },
	
	  data: function data() {
	    return {
	      isActive: false,
	      isLoading: false
	    };
	  },
	
	
	  computed: {
	    modalWidth: function modalWidth() {
	      if (this.width !== 640 && this.width !== 0) {
	        return { width: this.width + 'px' };
	      }
	      return null;
	    }
	  },
	
	  methods: {
	    active: function active() {
	      this.isActive = true;
	    },
	    handleOk: function handleOk() {
	      if (this.okLoading) {
	        this.isLoading = true;
	        this.onOk();
	      } else {
	        this.onOk();
	        this.handleClose();
	      }
	    },
	    handleCancel: function handleCancel() {
	      this.onCancel();
	      this.handleClose();
	    },
	    handleClose: function handleClose() {
	      this.$emit('close');
	    },
	    backdropClose: function backdropClose() {
	      if (this.backdropClosable) {
	        this.handleCancel();
	      }
	    }
	  },
	
	  watch: {
	    isShow: function isShow(val) {
	      this.isActive = val;
	      if (!val && this.isLoading) {
	        this.isLoading = false;
	      }
	    }
	  },
	
	  mounted: function mounted() {
	    var _this = this;
	
	    this.$nextTick(function () {
	      document.body.appendChild(_this.$el);
	      if (_this.isShow) {
	        _this.active();
	      }
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.$el.remove();
	  }
	};
	
	exports.default = ModalMixin;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(57);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(152);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  isEmpty: function isEmpty(obj) {
	    if (obj === null) return true;
	    if (obj.length > 0) return false;
	    if (obj.length === 0) return true;
	    if ((typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) !== 'object') return true;
	    var flag = true;
	    (0, _keys2.default)(obj).every(function (key) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        flag = false;
	        return false;
	      }
	      return true;
	    });
	    return flag;
	  },
	  isFunction: function isFunction(obj) {
	    return !!(obj && obj.constructor && obj.call && obj.apply);
	  },
	  getScroll: function getScroll(target, top) {
	    if (typeof window === 'undefined') {
	      return 0;
	    }
	
	    var prop = top ? 'pageYOffset' : 'pageXOffset';
	    var method = top ? 'scrollTop' : 'scrollLeft';
	    var isWindow = target === window;
	
	    var ret = isWindow ? target[prop] : target[method];
	
	    if (isWindow && typeof ret !== 'number') {
	      ret = window.document.documentElement[method];
	    }
	
	    return ret;
	  }
	};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 38 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(10).f;
	var has = __webpack_require__(5);
	var TAG = __webpack_require__(12)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(42)('keys');
	var uid = __webpack_require__(24);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	var core = __webpack_require__(4);
	var global = __webpack_require__(3);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	
	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: core.version,
	  mode: __webpack_require__(21) ? 'pure' : 'global',
	  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
	});


/***/ }),
/* 43 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(36);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(13);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(3);
	var core = __webpack_require__(4);
	var LIBRARY = __webpack_require__(21);
	var wksExt = __webpack_require__(47);
	var defineProperty = __webpack_require__(10).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(12);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(6),
	    root = __webpack_require__(1);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(257),
	    mapCacheDelete = __webpack_require__(258),
	    mapCacheGet = __webpack_require__(259),
	    mapCacheHas = __webpack_require__(260),
	    mapCacheSet = __webpack_require__(261);
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	module.exports = MapCache;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	
	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}
	
	module.exports = isIndex;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(2),
	    isSymbol = __webpack_require__(33);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}
	
	module.exports = isKey;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(208),
	    isObjectLike = __webpack_require__(17);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};
	
	module.exports = isArguments;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(200),
	    baseKeys = __webpack_require__(214),
	    isArrayLike = __webpack_require__(31);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	module.exports = keys;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(153), __esModule: true };

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(154), __esModule: true };

/***/ }),
/* 58 */
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(13);
	var document = __webpack_require__(3).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(7) && !__webpack_require__(8)(function () {
	  return Object.defineProperty(__webpack_require__(59)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(58);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(21);
	var $export = __webpack_require__(20);
	var redefine = __webpack_require__(66);
	var hide = __webpack_require__(9);
	var Iterators = __webpack_require__(38);
	var $iterCreate = __webpack_require__(164);
	var setToStringTag = __webpack_require__(40);
	var getPrototypeOf = __webpack_require__(171);
	var ITERATOR = __webpack_require__(12)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';
	
	var returnThis = function () { return this; };
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(19);
	var dPs = __webpack_require__(168);
	var enumBugKeys = __webpack_require__(37);
	var IE_PROTO = __webpack_require__(41)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(59)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(162).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(65);
	var hiddenKeys = __webpack_require__(37).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(5);
	var toIObject = __webpack_require__(11);
	var arrayIndexOf = __webpack_require__(159)(false);
	var IE_PROTO = __webpack_require__(41)('IE_PROTO');
	
	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9);


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(25),
	    stackClear = __webpack_require__(274),
	    stackDelete = __webpack_require__(275),
	    stackGet = __webpack_require__(276),
	    stackHas = __webpack_require__(277),
	    stackSet = __webpack_require__(278);
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	module.exports = Stack;


/***/ }),
/* 68 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(73),
	    toKey = __webpack_require__(29);
	
	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);
	
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(209),
	    isObjectLike = __webpack_require__(17);
	
	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Unordered comparison
	 *  2 - Partial comparison
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, bitmask, customizer, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
	}
	
	module.exports = baseIsEqual;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	module.exports = baseUnary;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(2),
	    isKey = __webpack_require__(51),
	    stringToPath = __webpack_require__(279),
	    toString = __webpack_require__(288);
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}
	
	module.exports = castPath;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(195),
	    arraySome = __webpack_require__(201),
	    cacheHas = __webpack_require__(226);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;
	
	  stack.set(array, other);
	  stack.set(other, array);
	
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!cacheHas(seen, othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
	              return seen.push(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, bitmask, customizer, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalArrays;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(32);
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	module.exports = isStrictComparable;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}
	
	module.exports = matchesStrictComparable;


/***/ }),
/* 78 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	module.exports = toSource;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(1),
	    stubFalse = __webpack_require__(287);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	module.exports = isBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(82)(module)))

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(16),
	    isObject = __webpack_require__(32);
	
	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	
	module.exports = isFunction;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(212),
	    baseUnary = __webpack_require__(72),
	    nodeUtil = __webpack_require__(265);
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	module.exports = isTypedArray;


/***/ }),
/* 82 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 83 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_83__;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Affix = __webpack_require__(290);
	
	var _Affix2 = _interopRequireDefault(_Affix);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Affix2.default;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Alert = __webpack_require__(291);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Alert2.default;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Aside = __webpack_require__(292);
	
	var _Aside2 = _interopRequireDefault(_Aside);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Aside2.default;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BreadcrumbItem = exports.Breadcrumb = undefined;
	
	var _Breadcrumb = __webpack_require__(293);
	
	var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);
	
	var _BreadcrumbItem = __webpack_require__(294);
	
	var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Breadcrumb = _Breadcrumb2.default;
	exports.BreadcrumbItem = _BreadcrumbItem2.default;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Checkbox = exports.CheckboxGroup = undefined;
	
	var _Checkbox = __webpack_require__(295);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _ChekboxGroup = __webpack_require__(296);
	
	var _ChekboxGroup2 = _interopRequireDefault(_ChekboxGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.CheckboxGroup = _ChekboxGroup2.default;
	exports.Checkbox = _Checkbox2.default;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CollapseItem = exports.Collapse = undefined;
	
	var _Collapse = __webpack_require__(297);
	
	var _Collapse2 = _interopRequireDefault(_Collapse);
	
	var _CollapseItem = __webpack_require__(298);
	
	var _CollapseItem2 = _interopRequireDefault(_CollapseItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Collapse = _Collapse2.default;
	exports.CollapseItem = _CollapseItem2.default;

/***/ }),
/* 90 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'TableBody',
	  props: {
	    columns: Array,
	    data: Array,
	    checkable: Boolean,
	    showIndex: Boolean,
	    state: {
	      type: Object,
	      default: function _default() {}
	    }
	  },
	  data: function data() {
	    return {};
	  },
	
	  computed: {
	    cols: function cols() {
	      return this.$parent.columns;
	    }
	  },
	  watch: {},
	  methods: {
	    handleToggleSelect: function handleToggleSelect(row, isSelect, index) {
	      this.$parent.handleSelectedChange(row, isSelect, index);
	    }
	  },
	  created: function created() {},
	  render: function render(h) {
	    var _this = this;
	
	    var pagination = this.state.pagination;
	    var selectedRowKeys = this.state.selectedRowKeys;
	    var rowKey = this.$parent.rowKey;
	    return h('tbody', [this._l(this.data, function (row, $index) {
	      var key = row[rowKey] ? row[rowKey] : pagination.current + '-' + $index;
	      var checked = selectedRowKeys.indexOf(key) >= 0;
	      return h('tr', [_this.checkable ? h('th', [h('checkbox', {
	        attrs: { checked: checked, change: function change(value) {
	            return _this.handleToggleSelect(row, value, $index);
	          } },
	        key: key })]) : '', _this.showIndex ? h('th', [$index + 1]) : '', _this._l(_this.cols, function (column, cellIndex) {
	        if (!column.visible) return null;
	        return h(
	          'td',
	          { key: '' + $index + cellIndex },
	          [column.renderCell.call(_this._renderProxy, h, { row: row, column: column, $index: $index, store: _this.store, _self: _this.context || _this.$parent.$vnode.context })]
	        );
	      })]);
	    })]);
	  }
	};

/***/ }),
/* 91 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'Column',
	  props: {
	    label: String,
	    width: Number,
	    className: String,
	    field: String,
	    sorter: [Boolean, Function, String],
	    selectable: Boolean,
	    filters: Array,
	    onFilter: Function,
	    visible: {
	      type: Boolean,
	      default: true
	    }
	  },
	
	  data: function data() {
	    return {
	      column: {}
	    };
	  },
	  created: function created() {
	    var _this = this;
	
	    var isShowIcon = this.visible ? 'check' : 'remove';
	    this.column = {
	      label: this.label,
	      width: this.width,
	      className: this.className,
	      field: this.field,
	      sorter: this.sorter,
	      selectable: this.selectable,
	      scopedSlots: this.$scopedSlots,
	      visible: this.visible,
	      isShowIcon: isShowIcon
	    };
	
	    this.column.renderCell = function (h, _ref) {
	      var row = _ref.row,
	          column = _ref.column;
	
	      if (_this.$scopedSlots.default) {
	        return h('div', { class: 'child' }, [_this.$scopedSlots.default(row)]);
	      }
	      return row[column.field];
	    };
	  },
	  mounted: function mounted() {
	    this.$parent.columns.push(this.column);
	  },
	  render: function render(h) {
	    return null;
	  }
	};

/***/ }),
/* 92 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'TableHeader',
	  props: {
	    columns: Array,
	    checkable: Boolean,
	    showIndex: Boolean,
	    state: {
	      type: Object,
	      default: function _default() {}
	    }
	  },
	
	  computed: {
	    cols: function cols() {
	      return this.$parent.columns;
	    }
	  },
	
	  methods: {
	    handleToggleSelectAll: function handleToggleSelectAll(isCheck) {
	      this.$parent.handleToggleSelectAll(isCheck);
	    }
	  },
	
	  render: function render(h) {
	    var _this = this;
	
	    var state = this.state;
	    var checked = this.$parent.isCheckAll();
	    return h('thead', [h('tr', [this.checkable ? h('th', [h('checkbox', {
	      attrs: { checked: checked, change: function change(value) {
	          return _this.handleToggleSelectAll(value);
	        } }
	    })]) : '', this.showIndex ? h('th', ['#']) : '', this._l(this.cols, function (column, cellIndex) {
	      if (!column.visible) return null;
	      var classes = 'sortable';
	      var sorterEl = '';
	      var sortClass = 'sort';
	      if (column.sorter) {
	        if (state.sortKey === column.field && state.reverse) {
	          sortClass = 'sort-desc';
	        } else if (state.sortKey === column.field && !state.reverse) {
	          sortClass = 'sort-asc';
	        }
	        sorterEl = h(
	          'span',
	          { 'class': 'sort-trigger ' + sortClass },
	          [h('i', { 'class': 'fa fa-' + sortClass })]
	        );
	      }
	      return h(
	        'th',
	        { key: cellIndex,
	          'class': classes,
	          on: {
	            'click': _this.$parent.handleToggleSort.bind(_this, column)
	          }
	        },
	        [h('span', [column.label]), sorterEl]
	      );
	    })])]);
	  }
	};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TableToolbar = exports.Column = exports.DataTable = undefined;
	
	var _DataTable = __webpack_require__(299);
	
	var _DataTable2 = _interopRequireDefault(_DataTable);
	
	var _TableColumn = __webpack_require__(91);
	
	var _TableColumn2 = _interopRequireDefault(_TableColumn);
	
	var _Toolbar = __webpack_require__(300);
	
	var _Toolbar2 = _interopRequireDefault(_Toolbar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.DataTable = _DataTable2.default;
	exports.Column = _TableColumn2.default;
	exports.TableToolbar = _Toolbar2.default;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Datepicker = __webpack_require__(301);
	
	var _Datepicker2 = _interopRequireDefault(_Datepicker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Datepicker2.default;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Dropdown = __webpack_require__(302);
	
	var _Dropdown2 = _interopRequireDefault(_Dropdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Dropdown2.default;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _InputNumber = __webpack_require__(303);
	
	var _InputNumber2 = _interopRequireDefault(_InputNumber);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _InputNumber2.default;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MenuItem = exports.Menus = undefined;
	
	var _Menus = __webpack_require__(305);
	
	var _Menus2 = _interopRequireDefault(_Menus);
	
	var _MenuItem = __webpack_require__(304);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Menus = _Menus2.default;
	exports.MenuItem = _MenuItem2.default;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(56);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _vue = __webpack_require__(83);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _MessageModal = __webpack_require__(306);
	
	var _MessageModal2 = _interopRequireDefault(_MessageModal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _open(propsData) {
	  var ModalComponent = _vue2.default.extend(_MessageModal2.default);
	  return new ModalComponent({
	    el: document.createElement('div'),
	    propsData: propsData
	  });
	}
	
	exports.default = {
	  open: function open(params) {
	    var defaultParam = { title: '消息', content: '' };
	    var propsData = (0, _assign2.default)(defaultParam, params);
	    return _open(propsData);
	  },
	  confirm: function confirm(params) {
	    var defaultParam = { title: '提示', content: '', icon: 'question-circle-o', type: 'warning' };
	    var propsData = (0, _assign2.default)(defaultParam, params);
	    return _open(propsData);
	  },
	  alert: function alert(params) {
	    var defaultParam = { title: '提示', type: 'danger', icon: 'exclamation-triangle', content: '', showCancel: false };
	    var propsData = (0, _assign2.default)(defaultParam, params);
	    return _open(propsData);
	  }
	};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Modal = __webpack_require__(307);
	
	var _Modal2 = _interopRequireDefault(_Modal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Modal2.default;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(56);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _vue = __webpack_require__(83);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _Notify = __webpack_require__(308);
	
	var _Notify2 = _interopRequireDefault(_Notify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _open(propsData) {
	  var NotifyComponent = _vue2.default.extend(_Notify2.default);
	  return new NotifyComponent({
	    el: document.createElement('div'),
	    propsData: propsData
	  });
	}
	
	exports.default = {
	  open: function open(params) {
	    var defaultParam = { direction: 'right', duration: 4500 };
	    var propsData = (0, _assign2.default)(defaultParam, params);
	    return _open(propsData);
	  },
	  info: function info(params) {
	    var defaultParam = { direction: 'right', duration: 4500, type: 'info' };
	    var propsData = (0, _assign2.default)(defaultParam, params);
	    return _open(propsData);
	  },
	  warning: function warning(params) {
	    var defaultParam = { direction: 'right', duration: 4500, type: 'warning' };
	    var propsData = (0, _assign2.default)(defaultParam, params);
	    return _open(propsData);
	  },
	  success: function success(params) {
	    var defaultParam = { direction: 'right', duration: 4500, type: 'success' };
	    var propsData = (0, _assign2.default)(defaultParam, params);
	    return _open(propsData);
	  },
	  danger: function danger(params) {
	    var defaultParam = { direction: 'right', duration: 4500, type: 'danger' };
	    var propsData = (0, _assign2.default)(defaultParam, params);
	    return _open(propsData);
	  }
	};

/***/ }),
/* 101 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    active: Boolean,
	    pageNo: Number,
	    size: String
	  },
	  render: function render(h) {
	    var activeClass = this.active ? "button is-primary " + this.size : "button " + this.size;
	    return h("li", [h(
	      "a",
	      { "class": activeClass, on: {
	          "click": this.$parent.handleChangePage.bind(this, this.pageNo)
	        }
	      },
	      [this.pageNo]
	    )]);
	  }
	};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Pager = __webpack_require__(101);
	
	var _Pager2 = _interopRequireDefault(_Pager);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: { Pager: _Pager2.default },
	  props: {
	    pageSize: {
	      type: Number,
	      default: 10
	    },
	    current: {
	      type: Number,
	      default: 1
	    },
	    total: Number,
	    change: {
	      type: Function,
	      default: function _default() {}
	    },
	    pageSizeChange: {
	      type: Function,
	      default: function _default() {}
	    },
	    size: String,
	    simple: {
	      type: Boolean,
	      default: false
	    },
	    layout: {
	      type: String,
	      default: 'total, pager, sizer, jumper'
	    },
	    sizeOptions: {
	      type: Array,
	      default: function _default() {
	        return [10, 20, 30, 40, 50];
	      }
	    },
	    align: String
	  },
	
	  data: function data() {
	    return {
	      interCurrent: 1,
	      interPageSize: this.pageSize
	    };
	  },
	
	
	  watch: {
	    current: function current(val) {
	      if (val !== this.interCurrent) {
	        this.handleChangePage(val);
	      }
	    },
	    pageSize: function pageSize(val) {
	      if (val !== this.interPageSize) {}
	    }
	  },
	
	  computed: {
	    totalPage: function totalPage() {
	      return this.calcTotalPage();
	    },
	    sizeClass: function sizeClass() {
	      return this.size === 'small' ? 'is-small' : '';
	    },
	    alignClass: function alignClass() {
	      return this.align ? 'is-' + this.align : '';
	    }
	  },
	
	  methods: {
	    calcTotalPage: function calcTotalPage() {
	      return Math.floor((this.total - 1) / this.interPageSize) + 1;
	    },
	    handleChangePage: function handleChangePage(p) {
	      if (p !== this.interCurrent) {
	        this.interCurrent = p;
	        this.change(p);
	      }
	    },
	    handleJumpPrev: function handleJumpPrev() {
	      this.handleChangePage(Math.max(1, this.interCurrent - 5));
	    },
	    handleJumpNext: function handleJumpNext() {
	      this.handleChangePage(Math.min(this.totalPage, this.interCurrent + 5));
	    },
	    hasPrev: function hasPrev() {
	      return this.interCurrent > 1;
	    },
	    hasNext: function hasNext() {
	      return this.interCurrent < this.totalPage;
	    },
	    handlePrev: function handlePrev() {
	      this.handleChangePage(this.interCurrent - 1);
	    },
	    handleNext: function handleNext() {
	      this.handleChangePage(this.interCurrent + 1);
	    },
	    handleQuickJumper: function handleQuickJumper(e) {
	      var page = e.target.value;
	      page = Number(page);
	      if (!page || isNaN(page)) return;
	
	      if (e.keyCode === 13) {
	        this.handleChangePage(page);
	      }
	    },
	    handlePageSizeChange: function handlePageSizeChange(e) {
	      var pageSize = e.target.value;
	      this.interPageSize = pageSize;
	      this.totalPage = this.calcTotalPage(pageSize);
	      if (this.interCurrent > this.totalPage) {
	        this.handleChangePage(this.totalPage);
	      }
	      this.pageSizeChange(this.interCurrent, pageSize);
	    }
	  },
	
	  mounted: function mounted() {
	    this.handleChangePage(this.current);
	  },
	  render: function render(h) {
	    var alignClass = this.alignClass;
	    var sizeClass = this.sizeClass;
	    var pagerList = [];
	    var total = '';
	    var jumper = '';
	    var sizer = '';
	    var pager = null;
	    var prevPager = null;
	    var nextPager = null;
	    var firstPager = null;
	    var lastPager = null;
	
	    var interCurrent = this.interCurrent;
	
	    if (!this.simple) {
	      if (this.totalPage <= 6) {
	        for (var i = 1; i <= this.totalPage; i++) {
	          var active = interCurrent === i;
	          pagerList.push(h(_Pager2.default, {
	            attrs: { pageNo: i, active: active, size: sizeClass },
	            on: {
	              'click': this.handleChangePage.bind(this, i)
	            }
	          }));
	        }
	      } else {
	        prevPager = h(
	          'li',
	          { 'class': 'btn-jumper' },
	          [h(
	            'a',
	            { 'class': 'button is-primary is-inverted ' + sizeClass, on: {
	                'click': this.handleJumpPrev
	              }
	            },
	            [h('i', { 'class': 'fa fa-angle-double-left' })]
	          )]
	        );
	        nextPager = h(
	          'li',
	          { 'class': 'btn-jumper' },
	          [h(
	            'a',
	            { 'class': 'button is-primary is-inverted ' + sizeClass, on: {
	                'click': this.handleJumpNext
	              }
	            },
	            [h('i', { 'class': 'fa fa-angle-double-right' })]
	          )]
	        );
	        firstPager = h(_Pager2.default, {
	          attrs: { active: false, size: sizeClass, pageNo: 1 }
	        });
	        lastPager = h(_Pager2.default, {
	          attrs: { active: false, size: sizeClass, pageNo: this.totalPage }
	        });
	
	        var left = Math.max(1, interCurrent - 2);
	        var right = Math.min(interCurrent + 2, this.totalPage);
	
	        if (interCurrent - 1 <= 2) {
	          right = 1 + 4;
	        }
	
	        if (this.totalPage - interCurrent <= 2) {
	          left = this.totalPage - 4;
	        }
	
	        for (var _i = left; _i <= right; _i++) {
	          var _active = interCurrent === _i;
	          pagerList.push(h(_Pager2.default, {
	            attrs: { pageNo: _i, size: sizeClass, active: _active },
	            on: {
	              'click': this.handleChangePage.bind(this, _i)
	            }
	          }));
	        }
	
	        if (interCurrent - 1 >= 4) {
	          pagerList.unshift(prevPager);
	        }
	        if (this.totalPage - interCurrent >= 4) {
	          pagerList.push(nextPager);
	        }
	
	        if (left !== 1) {
	          pagerList.unshift(firstPager);
	        }
	        if (right !== this.totalPage) {
	          pagerList.push(lastPager);
	        }
	      }
	
	      total = h('span', ['\u5171 ', this.total, ' \u6761']);
	      jumper = h('span', ['\u8DF3\u8F6C\u5230 ', h('input', { 'class': 'input ' + sizeClass, attrs: { type: 'number', min: '1', number: 'true' },
	        on: {
	          'keyup': this.handleQuickJumper
	        }
	      })]);
	      sizer = h(
	        'span',
	        { 'class': 'select ' + sizeClass },
	        [h(
	          'select',
	          {
	            on: {
	              'change': this.handlePageSizeChange
	            }
	          },
	          [this._l(this.sizeOptions, function (option) {
	            return h(
	              'option',
	              {
	                domProps: {
	                  'value': option
	                }
	              },
	              [option, ' \u6761/\u9875']
	            );
	          })]
	        )]
	      );
	
	      var prevClass = this.hasPrev() ? 'button ' + sizeClass : 'button is-disabled ' + sizeClass;
	      var nextClass = this.hasNext() ? 'button ' + sizeClass : 'button is-disabled ' + sizeClass;
	      pager = h('ul', [h('li', [h(
	        'a',
	        { 'class': prevClass, on: {
	            'click': this.handlePrev
	          }
	        },
	        [h('i', { 'class': 'fa fa-angle-left' })]
	      )]), this._l(pagerList, function (page) {
	        return page;
	      }), h('li', [h(
	        'a',
	        { 'class': nextClass, on: {
	            'click': this.handleNext
	          }
	        },
	        [h('i', { 'class': 'fa fa-angle-right' })]
	      )])]);
	    } else {
	      var _prevClass = this.hasPrev() ? 'button ' + sizeClass : 'button is-disabled ' + sizeClass;
	      var _nextClass = this.hasNext() ? 'button ' + sizeClass : 'button is-disabled ' + sizeClass;
	      pager = h('ul', [h('li', [h(
	        'a',
	        { 'class': _prevClass, on: {
	            'click': this.handlePrev
	          }
	        },
	        [h('i', { 'class': 'fa fa-angle-left' })]
	      )]), h('li', [h('input', { 'class': 'input ' + sizeClass, domProps: {
	          'value': this.interCurrent
	        },
	        attrs: { type: 'number', min: '1', number: 'true' },
	        on: {
	          'keyup': this.handleQuickJumper
	        }
	      })]), h('li', ['/ ', this.total]), h('li', [h(
	        'a',
	        { 'class': _nextClass, on: {
	            'click': this.handleNext
	          }
	        },
	        [h('i', { 'class': 'fa fa-angle-right' })]
	      )])]);
	    }
	
	    var items = {
	      total: total, sizer: sizer, pager: pager, jumper: jumper
	    };
	    var components = this.layout.split(',');
	
	    return h(
	      'nav',
	      { 'class': 'pagination ' + sizeClass + ' ' + alignClass },
	      [components.map(function (item) {
	        return items[item.trim()];
	      })]
	    );
	  }
	};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Pagination = __webpack_require__(102);
	
	var _Pagination2 = _interopRequireDefault(_Pagination);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Pagination2.default;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _PopConfirm = __webpack_require__(309);
	
	var _PopConfirm2 = _interopRequireDefault(_PopConfirm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _PopConfirm2.default;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Popover = __webpack_require__(310);
	
	var _Popover2 = _interopRequireDefault(_Popover);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Popover2.default;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ProgressBar = __webpack_require__(311);
	
	var _ProgressBar2 = _interopRequireDefault(_ProgressBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _ProgressBar2.default;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RadioButton = exports.Radio = exports.RadioGroup = undefined;
	
	var _RadioGroup = __webpack_require__(314);
	
	var _RadioGroup2 = _interopRequireDefault(_RadioGroup);
	
	var _Radio = __webpack_require__(312);
	
	var _Radio2 = _interopRequireDefault(_Radio);
	
	var _RadioButton = __webpack_require__(313);
	
	var _RadioButton2 = _interopRequireDefault(_RadioButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.RadioGroup = _RadioGroup2.default;
	exports.Radio = _Radio2.default;
	exports.RadioButton = _RadioButton2.default;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ScrollTo = __webpack_require__(315);
	
	var _ScrollTo2 = _interopRequireDefault(_ScrollTo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _ScrollTo2.default;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Step = exports.Steps = undefined;
	
	var _Step = __webpack_require__(316);
	
	var _Step2 = _interopRequireDefault(_Step);
	
	var _Steps = __webpack_require__(317);
	
	var _Steps2 = _interopRequireDefault(_Steps);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Steps = _Steps2.default;
	exports.Step = _Step2.default;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Switch = __webpack_require__(318);
	
	var _Switch2 = _interopRequireDefault(_Switch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Switch2.default;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TabItem = exports.Tabs = undefined;
	
	var _Tabs = __webpack_require__(320);
	
	var _Tabs2 = _interopRequireDefault(_Tabs);
	
	var _TabItem = __webpack_require__(319);
	
	var _TabItem2 = _interopRequireDefault(_TabItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Tabs = _Tabs2.default;
	exports.TabItem = _TabItem2.default;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tag = __webpack_require__(321);
	
	var _Tag2 = _interopRequireDefault(_Tag);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Tag2.default;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TimelineItem = exports.Timeline = undefined;
	
	var _Timeline = __webpack_require__(322);
	
	var _Timeline2 = _interopRequireDefault(_Timeline);
	
	var _TimelineItem = __webpack_require__(323);
	
	var _TimelineItem2 = _interopRequireDefault(_TimelineItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Timeline = _Timeline2.default;
	exports.TimelineItem = _TimelineItem2.default;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Tooltip = __webpack_require__(324);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _Tooltip2.default;

/***/ }),
/* 115 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    offset: {
	      type: Number,
	      default: 0
	    },
	    onAffix: {
	      type: Function,
	      default: function _default() {}
	    },
	    boundary: {
	      type: String,
	      default: ''
	    }
	  },
	
	  data: function data() {
	    return {
	      affixed: false,
	      styles: {},
	      affixedClientHeight: 0,
	      wrapStyle: {}
	    };
	  },
	
	
	  methods: {
	    getScroll: function getScroll(w, top) {
	      var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	      var method = 'scroll' + (top ? 'Top' : 'Left');
	      if (typeof ret !== 'number') {
	        var d = w.document;
	
	        ret = d.documentElement[method];
	        if (typeof ret !== 'number') {
	          ret = d.body[method];
	        }
	      }
	      return ret;
	    },
	    getOffset: function getOffset(element) {
	      var rect = element.getBoundingClientRect();
	      var body = document.body;
	      var clientTop = element.clientTop || body.clientTop || 0;
	      var clientLeft = element.clientLeft || body.clientLeft || 0;
	
	      var scrollTop = this.getScroll(window, true);
	      var scrollLeft = this.getScroll(window);
	      return {
	        top: rect.bottom + scrollTop - clientTop - this.affixedClientHeight,
	        left: rect.left + scrollLeft - clientLeft
	      };
	    },
	    handleScroll: function handleScroll() {
	      var scrollTop = this.getScroll(window, true) + this.offsets;
	      var elementOffset = this.getOffset(this.$el);
	
	      if (!this.affixed && scrollTop > elementOffset.top) {
	        this.affixed = true;
	        this.styles = {
	          top: this.offsets + 'px',
	          left: elementOffset.left + 'px',
	          width: this.$el.offsetWidth + 'px'
	        };
	        this.onAffix(this.affixed);
	      }
	
	      if (this.boundary && scrollTop > elementOffset.top) {
	        var el = document.getElementById(this.boundary.slice(1));
	        if (el) {
	          var boundaryOffset = this.getOffset(el);
	          if (scrollTop + this.offsets > boundaryOffset.top) {
	            var top = scrollTop - boundaryOffset.top;
	            this.styles.top = '-' + top + 'px';
	          }
	        }
	      }
	
	      if (this.affixed && scrollTop < elementOffset.top) {
	        this.affixed = false;
	        this.styles = {};
	        this.onAffix(this.affixed);
	      }
	
	      if (this.affixed && this.boundary) {
	        var _el = document.getElementById(this.boundary.slice(1));
	        if (_el) {
	          var _boundaryOffset = this.getOffset(_el);
	          if (scrollTop + this.offsets <= _boundaryOffset.top) {
	            this.styles.top = 0;
	          }
	        }
	      }
	    }
	  },
	
	  computed: {
	    offsets: function offsets() {
	      if (this.boundary) return 0;
	      return this.offset;
	    }
	  },
	
	  mounted: function mounted() {
	    this.affixedClientHeight = this.$el.children[0].clientHeight;
	    this.wrapStyle = { height: this.affixedClientHeight + 'px' };
	    window.addEventListener('scroll', this.handleScroll);
	    window.addEventListener('resize', this.handleScroll);
	  },
	  beforeDestroy: function beforeDestroy() {
	    window.removeEventListener('scroll', this.handleScroll);
	    window.removeEventListener('resize', this.handleScroll);
	  }
	};

/***/ }),
/* 116 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: ''
	    },
	    title: {
	      type: String
	    },
	    closable: {
	      type: Boolean,
	      default: false
	    },
	    onClose: {
	      type: Function,
	      default: function _default() {}
	    },
	    icon: {
	      type: String
	    },
	    animated: {
	      type: Boolean,
	      default: false
	    }
	  },
	
	  data: function data() {
	    return {
	      isShow: true
	    };
	  },
	
	
	  computed: {
	    typeClass: function typeClass() {
	      if (this.type === 'loading') return 'is-info';
	      return this.type ? 'is-' + this.type : null;
	    },
	    hasIcon: function hasIcon() {
	      return this.iconClass ? 'has-icon' : null;
	    },
	    faSpin: function faSpin() {
	      if (this.type === 'loading') return 'fa-spin';
	      return this.animated ? 'fa-spin' : null;
	    },
	    iconClass: function iconClass() {
	      if (this.icon) return this.icon;
	
	      if (this.type === 'info') {
	        return 'info-circle';
	      } else if (this.type === 'success') {
	        return 'check-circle';
	      } else if (this.type === 'warning') {
	        return 'exclamation-triangle';
	      } else if (this.type === 'danger') {
	        return 'times-circle';
	      } else if (this.type === 'loading') {
	        return 'spinner';
	      }
	      return this.icon;
	    }
	  },
	
	  methods: {
	    handleClose: function handleClose() {
	      var _this = this;
	
	      this.isShow = false;
	      this.onClose();
	      setTimeout(function () {
	        _this.$destroy();
	        _this.$el.remove();
	      }, 100);
	    }
	  }
	};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ModalMixin = __webpack_require__(34);
	
	var _ModalMixin2 = _interopRequireDefault(_ModalMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_ModalMixin2.default],
	
	  props: {
	    width: {
	      type: Number,
	      default: 450
	    },
	    placement: {
	      type: String,
	      default: 'left'
	    },
	    transition: {
	      type: String,
	      default: 'fadeLeft'
	    }
	  },
	
	  computed: {
	    placementClass: function placementClass() {
	      if (this.placement && this.placement !== 'left') {
	        return 'aside-' + this.placement;
	      }
	      return null;
	    },
	    transitionName: function transitionName() {
	      if (this.placement === 'right' && this.transition === 'fadeLeft') {
	        return 'fadeRight';
	      }
	      return this.transition;
	    }
	  }
	};

/***/ }),
/* 118 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    separator: {
	      type: String,
	      default: '>'
	    }
	  },
	  computed: {
	    $items: function $items() {
	      return this.$children;
	    }
	  }
	};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _utils = __webpack_require__(35);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    label: {
	      type: String
	    },
	    to: {
	      type: String,
	      default: ''
	    }
	  },
	
	  data: function data() {
	    return {
	      separator: ''
	    };
	  },
	
	
	  computed: {
	    hasSlot: function hasSlot() {
	      if (_utils2.default.isEmpty(this.$slots)) return false;
	      return true;
	    }
	  },
	
	  mounted: function mounted() {
	    var index = this.$parent.$items.indexOf(this);
	    var itemsNum = this.$parent.$items.length;
	    if (itemsNum !== index + 1) {
	      this.separator = this.$parent.separator;
	    }
	  }
	};

/***/ }),
/* 120 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    name: String,
	    label: String,
	    type: {
	      type: String,
	      default: 'primary'
	    },
	    disabled: Boolean,
	    checked: Boolean,
	    value: {},
	    val: [String, Number, Boolean],
	    change: {
	      type: Function,
	      default: function _default() {}
	    }
	  },
	
	  data: function data() {
	    return {
	      isChecked: this.checked,
	      realVal: null
	    };
	  },
	
	
	  computed: {
	    typeClass: function typeClass() {
	      if (this.type) return 'is-' + this.type;
	      return null;
	    }
	  },
	
	  watch: {
	    realVal: function realVal(val) {
	      this.change(val);
	    },
	    checked: function checked(val) {
	      this.handleChecked(val);
	    }
	  },
	
	  methods: {
	    toggle: function toggle() {
	      this.isChecked = !this.isChecked;
	
	      if (this.val && !this.isChecked) {
	        this.realVal = '';
	        this.$emit('input', this.realVal);
	      } else if (this.val && this.isChecked) {
	        this.realVal = this.val;
	        this.$emit('input', this.realVal);
	      } else if (!this.val && this.isChecked) {
	        this.realVal = true;
	        this.$emit('input', this.realVal);
	      } else {
	        this.realVal = false;
	        this.$emit('input', this.realVal);
	      }
	      this.$parent.isCheckboxGroup && this.$parent.updateValue();
	    },
	    handleChecked: function handleChecked(isChecked) {
	      this.isChecked = isChecked;
	    }
	  },
	
	  mounted: function mounted() {
	    if (this.isChecked && !this.value) {
	      this.$emit('input', this.$refs.checkbox.value);
	    }
	    if (this.value === this.val) {
	      this.isChecked = true;
	    }
	  }
	};

/***/ }),
/* 121 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    value: Array,
	    onChange: {
	      type: Function,
	      default: function _default() {}
	    }
	  },
	
	  data: function data() {
	    return {
	      checkedList: [],
	      isCheckboxGroup: true
	    };
	  },
	
	
	  methods: {
	    updateValue: function updateValue() {
	      var _this = this;
	
	      this.checkedList = [];
	      this.$children.forEach(function (child) {
	        child.realVal && _this.checkedList.push(child.realVal);
	      });
	      this.$emit('input', this.checkedList);
	      this.onChange(this.checkedList);
	    },
	    initChecked: function initChecked() {
	      var _this2 = this;
	
	      this.$children.forEach(function (child) {
	        if (_this2.value && _this2.value.indexOf(child.val) >= 0) {
	          child.isChecked = true;
	          child.realVal = child.val;
	        }
	      });
	    }
	  },
	
	  mounted: function mounted() {
	    this.initChecked();
	  }
	};

/***/ }),
/* 122 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    accordion: Boolean
	  },
	
	  computed: {
	    $collapseItems: function $collapseItems() {
	      return this.$children;
	    }
	  },
	
	  methods: {
	    setActiveIndex: function setActiveIndex(index) {
	      if (this.accordion) {
	        this.$children.forEach(function (item, i) {
	          if (i !== index) {
	            item.isOpen = false;
	          }
	        });
	      }
	    }
	  }
	};

/***/ }),
/* 123 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    title: String,
	    actived: {
	      type: Boolean,
	      default: false
	    }
	  },
	
	  data: function data() {
	    return {
	      isOpen: this.actived
	    };
	  },
	
	
	  computed: {
	    index: function index() {
	      return this.$parent.$collapseItems.indexOf(this);
	    }
	  },
	
	  watch: {
	    isActive: function isActive(val) {
	      this.isOpen = val;
	    }
	  },
	
	  methods: {
	    toggle: function toggle() {
	      this.isOpen = !this.isOpen;
	      this.$parent.setActiveIndex(this.index);
	    }
	  }
	};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _sortBy = __webpack_require__(285);
	
	var _sortBy2 = _interopRequireDefault(_sortBy);
	
	var _utils = __webpack_require__(35);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _TableHeader = __webpack_require__(92);
	
	var _TableHeader2 = _interopRequireDefault(_TableHeader);
	
	var _TableBody = __webpack_require__(90);
	
	var _TableBody2 = _interopRequireDefault(_TableBody);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  components: { TableHeader: _TableHeader2.default, TableBody: _TableBody2.default },
	  name: 'DataTable',
	  props: {
	    data: Array,
	    change: {
	      type: Function,
	      default: function _default() {}
	    },
	    height: Number,
	    checkable: {
	      type: Boolean,
	      default: false
	    },
	    showIndex: Boolean,
	    pagination: {
	      layout: 'total, pager, sizer, jumper',
	      position: 'right'
	    },
	    onSelectChange: {
	      type: Function,
	      default: function _default() {}
	    },
	    onSelectAll: {
	      type: Function,
	      default: function _default() {}
	    },
	    rowKey: String,
	    bordered: Boolean,
	    striped: Boolean,
	    narrow: Boolean
	  },
	
	  data: function data() {
	    return {
	      state: {
	        sortKey: '',
	        reverse: '',
	        pagination: { current: 1 },
	        selectedRows: [],
	        selectedRowKeys: []
	      },
	      cols: [],
	      columns: [],
	      selected: [],
	      isTable: true,
	      interData: [],
	      showData: []
	    };
	  },
	
	
	  computed: {
	    mainStyle: function mainStyle() {
	      return this.height ? { height: this.height + 'px', overflow: 'scroll' } : null;
	    },
	    totalCnt: function totalCnt() {
	      var total = this.pagination && this.pagination.total ? this.pagination.total : 0;
	      return total;
	    }
	  },
	
	  watch: {
	    columns: function columns(newVal) {
	      console.log(newVal);
	    },
	    data: function data(val) {
	      this.interData = val;
	      this.handleReorganizeData();
	    }
	  },
	
	  methods: {
	    calcColumnWidth: function calcColumnWidth() {
	      var _this = this;
	
	      var width = this.$el.offsetWidth;
	      var length = this.columns.length;
	
	      if (this.checkable) {
	        width -= 40;
	        this.cols.push(40);
	      }
	
	      if (this.showIndex) {
	        width -= 40;
	        this.cols.push(40);
	      }
	
	      this.columns.forEach(function (column) {
	        if (column.width) {
	          width -= column.width;
	          length -= 1;
	        }
	      });
	      var avgWidth = Math.floor(width / length);
	
	      this.columns.forEach(function (column) {
	        if (column.width) {
	          _this.cols.push(column.width);
	        } else {
	          _this.height ? _this.cols.push(avgWidth) : _this.cols.push('');
	        }
	      });
	    },
	    handleToggleSort: function handleToggleSort(column) {
	      if (!column.sorter || !column.field) return;
	      this.state.sortKey = column.field;
	      this.state.reverse = !this.state.reverse;
	      if (_utils2.default.isFunction(column.sorter) || column.sorter === 'custom') {
	        this.interData = (0, _sortBy2.default)(this.interData, column.field);
	        if (this.state.reverse) this.interData.reverse();
	      }
	      this.handleTableChange();
	    },
	    handlePageSizeChange: function handlePageSizeChange(current, pageSize) {
	      console.log('pageSize', pageSize);
	      this.state.pagination.pageSize = pageSize;
	      this.handleTableChange();
	    },
	    handlePageChange: function handlePageChange(current) {
	      this.state.pagination.current = current;
	      var onPageChange = this.state.pagination.change;
	      if (onPageChange && _utils2.default.isFunction(onPageChange)) {
	        onPageChange(current);
	      }
	      this.handleTableChange();
	    },
	    handleInitTable: function handleInitTable() {},
	    handleTableChange: function handleTableChange() {
	      this.change(this.state);
	      this.handleReorganizeData();
	    },
	    handleReorganizeData: function handleReorganizeData() {
	      if (this.state.pagination.total) {
	        var current = this.state.pagination.current || 1;
	        var pageSize = this.state.pagination.pageSize || 10;
	
	        if (this.interData.length <= pageSize) {
	          this.showData = this.interData;
	        } else {
	          var start = (current - 1) * pageSize;
	          var end = parseInt(start, 10) + parseInt(pageSize, 10);
	          this.showData = this.interData.slice(start, end);
	        }
	      } else {
	        this.showData = this.interData;
	      }
	    },
	    handleSelectedChange: function handleSelectedChange(row, isSelect, index) {
	      var key = row[this.rowKey];
	      if (!key) {
	        var currentPage = this.state.pagination.current;
	        key = currentPage + '-' + index;
	      }
	
	      var isExist = this.state.selectedRowKeys.indexOf(key) >= 0;
	      if (isSelect && !isExist) {
	        this.state.selectedRowKeys.push(key);
	        this.state.selectedRows.push(row);
	      }
	      if (!isSelect && isExist) {
	        var selectedIndex = this.state.selectedRowKeys.indexOf(key);
	        this.state.selectedRows.splice(selectedIndex, 1);
	        this.state.selectedRowKeys.splice(selectedIndex, 1);
	      }
	
	      this.onSelectChange(this.state.selectedRowKeys, this.state.selectedRows);
	    },
	    handleToggleSelectAll: function handleToggleSelectAll(isCheck) {
	      var _this2 = this;
	
	      var currentPage = this.state.pagination.current;
	
	      if (isCheck) {
	        this.showData.forEach(function (row, index) {
	          var key = row[_this2.rowKey] ? row[_this2.rowKey] : currentPage + '-' + index;
	          var isExist = _this2.state.selectedRowKeys.indexOf(key) >= 0;
	          if (!isExist) {
	            _this2.state.selectedRowKeys.push(key);
	            _this2.state.selectedRows.push(row);
	          }
	        });
	      } else {
	        this.showData.forEach(function (row, index) {
	          var key = row[_this2.rowKey] ? row[_this2.rowKey] : currentPage + '-' + index;
	          var selectedIndex = _this2.state.selectedRowKeys.indexOf(key);
	          if (selectedIndex >= 0) {
	            _this2.state.selectedRows.splice(selectedIndex, 1);
	            _this2.state.selectedRowKeys.splice(selectedIndex, 1);
	          }
	        });
	      }
	
	      this.onSelectChange(this.state.selectedRowKeys, this.state.selectedRows);
	    },
	    isCheckAll: function isCheckAll() {
	      var _this3 = this;
	
	      var currentPage = this.state.pagination.current;
	      var checkedAll = this.showData.some(function (row, index) {
	        var key = row[_this3.rowKey] ? row[_this3.rowKey] : currentPage + '-' + index;
	        return _this3.state.selectedRowKeys.indexOf(key) < 0;
	      });
	      return !checkedAll;
	    },
	    handleRefresh: function handleRefresh() {
	      this.state = {
	        sortKey: '',
	        reverse: '',
	        selectedRows: [],
	        selectedRowKeys: []
	      };
	      if (this.pagination) {
	        this.state.pagination = this.pagination;
	      } else {
	        this.state.pagination = { current: 1 };
	      }
	      this.interData = this.data;
	      this.handleTableChange();
	    }
	  },
	
	  created: function created() {
	    this.interData = this.data;
	    if (this.pagination) this.state.pagination = this.pagination;
	  },
	  mounted: function mounted() {
	    this.calcColumnWidth();
	    this.handleReorganizeData();
	  }
	};

/***/ }),
/* 125 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    hasRefresh: Boolean,
	    hasColumnsControl: Boolean
	  },
	
	  data: function data() {
	    return {
	      columns: []
	    };
	  },
	
	
	  methods: {
	    handleRefresh: function handleRefresh() {
	      this.$parent.handleRefresh();
	    },
	    handleColumnControl: function handleColumnControl(index) {
	      this.$parent.columns[index].visible = !this.$parent.columns[index].visible;
	      this.$parent.columns[index].isShowIcon = this.$parent.columns[index].visible ? 'check' : 'remove';
	    }
	  },
	
	  created: function created() {
	    this.columns = this.$parent.columns;
	  }
	};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _flatpickr = __webpack_require__(188);
	
	var _flatpickr2 = _interopRequireDefault(_flatpickr);
	
	var _zh = __webpack_require__(189);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    options: {
	      type: Object,
	      default: function _default() {}
	    },
	    name: String,
	    placeholder: String,
	    val: String,
	    value: {},
	    class: String
	  },
	
	  data: function data() {
	    return {
	      interVal: this.value,
	      flatPickr: null
	    };
	  },
	
	
	  computed: {
	    isWrap: function isWrap() {
	      if (this.options) {
	        return !!this.options.wrap;
	      }
	      return false;
	    }
	  },
	
	  methods: {
	    changeVal: function changeVal() {
	      this.$emit('input', this.interVal);
	    },
	    handleClear: function handleClear() {
	      this.flatPickr && this.flatPickr.clear();
	    }
	  },
	
	  watch: {
	    interVal: function interVal(val) {
	      this.interVal = val;
	      this.$emit('input', this.interVal);
	    }
	  },
	
	  mounted: function mounted() {
	    var pickrEl = this.$refs.pickrInput;
	    this.flatPickr = new _flatpickr2.default(pickrEl, this.options);
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this.flatPickr) {
	      this.flatPickr.destroy();
	      this.flatPickr = null;
	    }
	  }
	};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _PopperMixin = __webpack_require__(18);
	
	var _PopperMixin2 = _interopRequireDefault(_PopperMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_PopperMixin2.default],
	  props: {
	    title: {
	      type: String,
	      default: ''
	    },
	    trigger: {
	      type: String,
	      default: 'click'
	    },
	    width: {
	      type: Number
	    },
	    placement: {
	      type: String,
	      default: 'bottom'
	    }
	  },
	
	  methods: {
	    hidePopper: function hidePopper() {
	      var _this = this;
	
	      if (this.trigger !== 'hover') this.isShow = false;
	      this.timer = setTimeout(function () {
	        _this.isShow = false;
	        _this.popperTimer = setTimeout(function () {
	          _this.popper.destroy();
	          _this.popper = null;
	        }, 300);
	      }, 300);
	    }
	  },
	
	  computed: {
	    popperStyle: function popperStyle() {
	      if (this.width && this.width !== 276) {
	        return { width: this.width + 'px', maxWidth: 'none' };
	      }
	      return null;
	    }
	  }
	};

/***/ }),
/* 128 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    min: {
	      type: Number,
	      default: 0
	    },
	    max: {
	      type: Number,
	      default: Infinity
	    },
	    step: {
	      type: Number,
	      default: 1
	    },
	    disabled: Boolean,
	    val: {
	      type: Number,
	      default: 0
	    },
	    onChange: {
	      type: Function,
	      default: function _default() {}
	    },
	    size: String,
	    mode: {
	      type: String,
	      default: ''
	    }
	  },
	
	  computed: {
	    sizeClass: function sizeClass() {
	      return this.size ? 'is-' + this.size : null;
	    }
	  },
	
	  data: function data() {
	    return {
	      interVal: this.val
	    };
	  },
	
	
	  watch: {
	    interVal: function interVal(val, oldVal) {
	      this.handleFormat(val);
	      if (this.interVal !== Number(oldVal) && this.interVal !== '-') {
	        if (isNaN(oldVal) && oldVal !== '-') return;
	        this.$emit('input', this.interVal);
	        this.onChange(this.interVal);
	      }
	    }
	  },
	
	  methods: {
	    handleFormat: function handleFormat(val) {
	      if (val !== '' && val !== '-') {
	        this.interVal = isNaN(this.interVal) ? 0 : Number(this.interVal);
	        if (this.interVal > this.max) this.interVal = this.max;
	        if (this.interVal < this.min) this.interVal = this.min;
	      }
	    },
	    increase: function increase() {
	      if (this.max) {
	        this.interVal + this.step <= this.max && this.changeVal(this.step);
	      } else {
	        this.changeVal(this.step);
	      }
	    },
	    decrease: function decrease() {
	      if (this.min || this.min === 0) {
	        this.interVal - this.step >= this.min && this.changeVal(-this.step);
	      } else {
	        this.changeVal(-this.step);
	      }
	    },
	    changeVal: function changeVal(num) {
	      if (this.disabled) return;
	      this.interVal += num;
	    },
	    handleKeyDown: function handleKeyDown(e) {
	      if (e.keyCode === 38) {
	        this.increase();
	      } else if (e.keyCode === 40) {
	        this.decrease();
	      }
	    }
	  }
	};

/***/ }),
/* 129 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    icon: String,
	    to: {
	      default: '/'
	    },
	    isActive: {
	      type: Boolean,
	      default: false
	    },
	    click: {
	      type: Function
	    },
	    router: {
	      type: Boolean,
	      default: true
	    }
	  },
	
	  data: function data() {
	    return {
	      hasChildren: false,
	      isOpen: false,
	      arrowClass: 'fa-caret-down',
	      type: this.$parent.type
	    };
	  },
	
	
	  methods: {
	    toggle: function toggle() {
	      this.isOpen = !this.isOpen;
	    },
	    getChildrenStatus: function getChildrenStatus() {
	      var _this = this;
	
	      this.$children.every(function (item) {
	        if (item.isOpen) _this.isOpen = true;
	        if (item.type === 'float') _this.arrowClass = 'fa-caret-right';
	        return true;
	      });
	    }
	  },
	
	  mounted: function mounted() {
	    this.isOpen = this.isActive;
	    this.hasChildren = !!this.$slots.sub;
	    if (this.hasChildren) {
	      this.getChildrenStatus();
	      if (this.arrowClass === 'fa-caret-right') {
	        this.$el.addEventListener('mouseenter', this.toggle);
	        this.$el.addEventListener('mouseleave', this.toggle);
	      }
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.$el.removeEventListener('mouseenter', this.toggle);
	    this.$el.removeEventListener('mouseleave', this.toggle);
	  }
	};

/***/ }),
/* 130 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    label: String,
	    type: {
	      type: String,
	      default: 'collapse'
	    }
	  },
	
	  data: function data() {
	    return {
	      typeClass: this.type,
	      isOpen: false
	    };
	  },
	
	
	  methods: {
	    hasOpened: function hasOpened() {
	      var _this = this;
	
	      this.$children.every(function (item) {
	        if (item.isOpen) _this.isOpen = true;
	        return true;
	      });
	      return false;
	    }
	  },
	
	  mounted: function mounted() {
	    this.hasOpened();
	  }
	};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ModalMixin = __webpack_require__(34);
	
	var _ModalMixin2 = _interopRequireDefault(_ModalMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_ModalMixin2.default],
	
	  props: {
	    content: String,
	    icon: String,
	    width: {
	      type: Number,
	      default: 400
	    },
	    autoClose: {
	      type: Number,
	      default: 0
	    },
	    type: {
	      type: String,
	      default: 'info'
	    }
	  },
	
	  methods: {
	    handleClose: function handleClose() {
	      var _this = this;
	
	      setTimeout(function () {
	        _this.$destroy();
	        _this.$el.remove();
	      }, 100);
	    },
	    close: function close() {
	      this.handleClose();
	    }
	  },
	
	  computed: {
	    modalWidth: function modalWidth() {
	      if (this.width !== 400 && this.width !== 0) {
	        return { width: this.width + 'px' };
	      }
	      return null;
	    },
	    iconClass: function iconClass() {
	      if (this.icon) {
	        return 'fa-' + this.icon;
	      }
	      return null;
	    },
	    typeClass: function typeClass() {
	      if (this.type) {
	        return 'is-' + this.type;
	      }
	      return null;
	    }
	  },
	
	  mounted: function mounted() {
	    var _this2 = this;
	
	    setTimeout(function () {
	      _this2.isShow = true;
	    }, 100);
	
	    if (this.autoClose) {
	      setTimeout(function () {
	        _this2.handleClose();
	      }, this.autoClose * 1000);
	    }
	  }
	};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ModalMixin = __webpack_require__(34);
	
	var _ModalMixin2 = _interopRequireDefault(_ModalMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_ModalMixin2.default]
	};

/***/ }),
/* 133 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'default'
	    },
	    title: {
	      type: String
	    },
	    content: {
	      type: String,
	      default: ''
	    },
	    closable: {
	      type: Boolean,
	      default: true
	    },
	    onClose: {
	      type: Function,
	      default: function _default() {}
	    },
	    duration: {
	      type: Number,
	      default: 4500
	    },
	    placement: {
	      type: String,
	      default: 'top-right'
	    },
	    icon: {
	      type: String
	    },
	    animated: {
	      type: Boolean,
	      default: false
	    },
	    transition: {
	      type: String
	    }
	  },
	
	  data: function data() {
	    return {
	      isShow: false,
	      placementTransition: {
	        'top-right': 'fadeRight',
	        'top-center': 'fadeDown',
	        'top-left': 'fadeLeft',
	        'bottom-right': 'fadeRight',
	        'bottom-center': 'fadeUp',
	        'bottom-left': 'fadeLeft'
	      }
	    };
	  },
	
	
	  computed: {
	    typeClass: function typeClass() {
	      return this.type ? 'is-' + this.type : null;
	    },
	    hasIcon: function hasIcon() {
	      return this.iconClass ? 'has-icon' : null;
	    },
	    faSpin: function faSpin() {
	      return this.animated ? 'fa-spin' : null;
	    },
	    iconClass: function iconClass() {
	      if (this.icon) return this.icon;
	
	      if (this.type === 'info') {
	        return 'info-circle';
	      } else if (this.type === 'success') {
	        return 'check-circle';
	      } else if (this.type === 'warning') {
	        return 'exclamation-triangle';
	      } else if (this.type === 'danger') {
	        return 'times-circle';
	      } else if (this.type === 'loading') {
	        this.type = 'info';
	        this.animated = true;
	        return 'spinner';
	      }
	      return this.icon;
	    },
	    transitionName: function transitionName() {
	      if (this.transition) return this.transition;
	      return this.placementTransition[this.placement];
	    }
	  },
	
	  methods: {
	    handleClose: function handleClose() {
	      var _this = this;
	
	      this.isShow = false;
	      setTimeout(function () {
	        _this.$destroy();
	        _this.$el.remove();
	      }, 100);
	    },
	    close: function close() {
	      clearTimeout(this.timer);
	      this.isShow = false;
	      this.$destroy();
	      this.$el.remove();
	    }
	  },
	
	  beforeMount: function beforeMount() {
	    var parent = void 0;
	    parent = document.querySelector('.notifications.' + this.placement);
	
	    if (!parent) {
	      parent = document.createElement('div');
	      parent.classList.add('notifications', this.placement);
	      document.body.appendChild(parent);
	    }
	    parent.appendChild(this.$el);
	  },
	  mounted: function mounted() {
	    var _this2 = this;
	
	    this.isShow = true;
	    this.timer = setTimeout(function () {
	      return _this2.close();
	    }, this.duration);
	  }
	};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _PopperMixin = __webpack_require__(18);
	
	var _PopperMixin2 = _interopRequireDefault(_PopperMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_PopperMixin2.default],
	
	  props: {
	    width: {
	      type: Number
	    },
	    trigger: {
	      type: String,
	      default: 'click'
	    },
	    title: {
	      type: String,
	      default: ''
	    },
	    showOk: {
	      type: Boolean,
	      default: true
	    },
	    showCancel: {
	      type: Boolean,
	      default: true
	    },
	    okText: {
	      type: String,
	      default: 'OK'
	    },
	    cancelText: {
	      type: String,
	      default: 'Cancel'
	    },
	    onOk: {
	      type: Function,
	      default: function _default() {}
	    },
	    onCancel: {
	      type: Function,
	      default: function _default() {}
	    },
	    icon: String,
	    type: {
	      type: String,
	      default: 'info'
	    }
	  },
	
	  computed: {
	    popperStyle: function popperStyle() {
	      if (this.width && this.width !== 210) {
	        return { width: this.width + 'px', maxWidth: 'none' };
	      }
	      return null;
	    },
	    iconClass: function iconClass() {
	      if (this.icon) {
	        return 'fa-' + this.icon;
	      }
	      return null;
	    },
	    typeClass: function typeClass() {
	      if (this.type) {
	        return 'is-' + this.type;
	      }
	      return null;
	    }
	  },
	
	  methods: {
	    handleOk: function handleOk(e) {
	      this.onOk();
	      this.handleClose(e);
	    },
	    handleCancel: function handleCancel(e) {
	      this.onCancel();
	      this.handleClose(e);
	    },
	    handleClose: function handleClose(e) {
	      e.stopPropagation();
	      this.hidePopper();
	    }
	  }
	};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _PopperMixin = __webpack_require__(18);
	
	var _PopperMixin2 = _interopRequireDefault(_PopperMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_PopperMixin2.default],
	
	  props: {
	    title: {
	      type: String,
	      default: ''
	    },
	    trigger: {
	      type: String,
	      default: 'click'
	    },
	    width: {
	      type: Number
	    }
	  },
	
	  data: function data() {
	    return {
	      reference: null,
	      popper: null,
	      isShow: false
	    };
	  },
	
	
	  computed: {
	    popperStyle: function popperStyle() {
	      if (this.width && this.width !== 276) {
	        return { width: this.width + 'px', maxWidth: 'none' };
	      }
	      return null;
	    }
	  },
	
	  methods: {
	    hidePopper: function hidePopper() {
	      var _this = this;
	
	      if (this.trigger !== 'hover') this.isShow = false;
	      this.timer = setTimeout(function () {
	        _this.isShow = false;
	        _this.popperTimer = setTimeout(function () {
	          _this.popper.destroy();
	          _this.popper = null;
	        }, 300);
	      }, 300);
	    }
	  }
	};

/***/ }),
/* 136 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: ''
	    },
	    size: {
	      type: String
	    },
	    percent: {
	      type: Number,
	      required: true,
	      default: 0
	    },
	    striped: Boolean,
	    animated: Boolean,
	    showinfo: Boolean,
	    infoInside: {
	      type: Boolean,
	      default: true
	    },
	    format: {
	      type: Function,
	      default: function _default(percent) {
	        return percent + '%';
	      }
	    }
	  },
	
	  data: function data() {
	    return {
	      info: ''
	    };
	  },
	
	
	  computed: {
	    typeClass: function typeClass() {
	      return this.type ? 'is-' + this.type : null;
	    },
	    sizeClass: function sizeClass() {
	      return this.size ? 'is-' + this.size : null;
	    },
	    stripedClass: function stripedClass() {
	      return this.striped ? 'progress-striped' : null;
	    },
	    animatedClass: function animatedClass() {
	      return this.animated ? 'animated' : null;
	    },
	    infoOutsideClass: function infoOutsideClass() {
	      return this.infoInside ? null : 'info-outside';
	    }
	  },
	
	  watch: {
	    percent: function percent(val) {
	      this.info = this.format(val);
	    }
	  },
	
	  mounted: function mounted() {
	    this.info = this.format(this.percent);
	  }
	};

/***/ }),
/* 137 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    name: String,
	    label: String,
	    type: {
	      type: String,
	      default: 'primary'
	    },
	    disabled: Boolean,
	    checked: Boolean,
	    value: {},
	    val: [String, Number, Boolean],
	    onChange: {
	      type: Function,
	      default: function _default() {}
	    }
	  },
	
	  data: function data() {
	    return {
	      isChecked: this.checked,
	      realVal: null
	    };
	  },
	
	
	  computed: {
	    typeClass: function typeClass() {
	      if (this.type) return 'is-' + this.type;
	      return null;
	    },
	    index: function index() {
	      return this.$parent.radioItems ? this.$parent.radioItems.indexOf(this) : null;
	    }
	  },
	
	  watch: {
	    value: function value() {
	      this.updateValue();
	    }
	  },
	
	  methods: {
	    toggle: function toggle() {
	      if (this.isChecked) return;
	      this.isChecked = !this.isChecked;
	
	      if (this.$refs.checkbox.value && !this.isChecked) {
	        this.realVal = '';
	        this.$emit('input', this.realVal);
	      } else if (this.$refs.checkbox.value && this.isChecked) {
	        this.realVal = this.$refs.checkbox.value;
	        this.$emit('input', this.realVal);
	      } else if (!this.$refs.checkbox.value && this.isChecked) {
	        this.realVal = true;
	        this.$emit('input', this.realVal);
	      } else {
	        this.realVal = false;
	        this.$emit('input', this.realVal);
	      }
	
	      this.$parent.isRadioGroup && this.$parent.updateValue(this.index);
	      this.onChange(this.isChecked);
	    },
	    updateValue: function updateValue() {}
	  },
	
	  mounted: function mounted() {
	    if (this.isChecked && !this.value) {
	      this.$emit('input', this.$refs.checkbox.value);
	    }
	    if (this.value === this.val) {
	      this.isChecked = true;
	    }
	  }
	};

/***/ }),
/* 138 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    icon: String,
	    disabled: Boolean,
	    checked: Boolean,
	    value: {},
	    val: [String, Number, Boolean],
	    onChange: {
	      type: Function,
	      default: function _default() {}
	    },
	    name: String
	  },
	
	  data: function data() {
	    return {
	      isChecked: this.checked,
	      realVal: null
	    };
	  },
	
	
	  computed: {
	    index: function index() {
	      return this.$parent.radioItems ? this.$parent.radioItems.indexOf(this) : null;
	    },
	    iconClass: function iconClass() {
	      return this.icon ? 'fa-' + this.icon : null;
	    }
	  },
	
	  methods: {
	    toggle: function toggle() {
	      if (this.isChecked) return;
	      this.isChecked = !this.isChecked;
	
	      if (this.$refs.checkbox.value && !this.isChecked) {
	        this.realVal = '';
	        this.$emit('input', this.realVal);
	      } else if (this.$refs.checkbox.value && this.isChecked) {
	        this.realVal = this.$refs.checkbox.value;
	        this.$emit('input', this.realVal);
	      } else if (!this.$refs.checkbox.value && this.isChecked) {
	        this.realVal = true;
	        this.$emit('input', this.realVal);
	      } else {
	        this.realVal = false;
	        this.$emit('input', this.realVal);
	      }
	
	      this.$parent.isRadioGroup && this.$parent.updateValue(this.index);
	      this.onChange(this.isChecked);
	    }
	  }
	};

/***/ }),
/* 139 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    value: [String, Number],
	    onChange: {
	      type: Function,
	      default: function _default() {}
	    }
	  },
	
	  data: function data() {
	    return {
	      checked: '',
	      isRadioGroup: true
	    };
	  },
	
	
	  computed: {
	    radioItems: function radioItems() {
	      return this.$children;
	    }
	  },
	
	  watch: {
	    value: function value() {
	      this.initChecked();
	    }
	  },
	
	  methods: {
	    updateValue: function updateValue(index) {
	      var _this = this;
	
	      this.checked = '';
	      this.$children.forEach(function (child, i) {
	        if (index !== i) {
	          child.isChecked = false;
	        } else {
	          _this.checked = child.val;
	        }
	      });
	
	      this.$emit('input', this.checked);
	      this.onChange(this.checked);
	    },
	    initChecked: function initChecked() {
	      var _this2 = this;
	
	      this.$children.forEach(function (child) {
	        if (_this2.value && _this2.value.indexOf(child.val) >= 0) {
	          child.isChecked = true;
	          child.realVal = child.val;
	        } else {
	          child.isChecked = false;
	          child.realVal = '';
	        }
	      });
	    }
	  },
	
	  mounted: function mounted() {
	    this.initChecked();
	  }
	};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jump = __webpack_require__(190);
	
	var _jump2 = _interopRequireDefault(_jump);
	
	var _utils = __webpack_require__(35);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: {
	    target: String,
	    offset: {
	      type: Number,
	      default: 500
	    },
	    duration: {
	      type: Number,
	      default: 500
	    },
	    distance: Number
	  },
	
	  data: function data() {
	    return {
	      isShow: true
	    };
	  },
	
	
	  computed: {
	    targetEl: function targetEl() {
	      if (this.target === 'top') {
	        return document.body;
	      } else if (this.distance) {
	        return this.distance;
	      }
	      return this.target;
	    },
	    isPreset: function isPreset() {
	      if (this.target === 'top' || this.target === 'bottom') {
	        this.isShow = false;
	        return true;
	      }
	      return false;
	    },
	    iconClass: function iconClass() {
	      if (this.target === 'bottom') return 'fa-arrow-down';
	      return 'fa-arrow-up';
	    }
	  },
	
	  methods: {
	    handleScroll: function handleScroll() {
	      this.isShow = _utils2.default.getScroll(window, true) > this.offset;
	    },
	    scrollTo: function scrollTo() {
	      (0, _jump2.default)(this.targetEl, {
	        duration: this.duration
	      });
	    }
	  },
	
	  mounted: function mounted() {
	    if (this.isPreset) {
	      window.addEventListener('scroll', this.handleScroll);
	    }
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this.isPreset) {
	      window.removeEventListener('scroll', this.handleScroll);
	    }
	  }
	};

/***/ }),
/* 141 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    title: String,
	    description: String,
	    isActive: Boolean
	  },
	
	  data: function data() {
	    return {
	      step: {},
	      active: this.isActive
	    };
	  },
	  created: function created() {
	    this.step = {
	      title: this.title,
	      description: this.description,
	      isActive: this.isActive
	    };
	    this.$parent.steps.push(this.step);
	  },
	  mounted: function mounted() {}
	};

/***/ }),
/* 142 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'pills'
	    },
	    current: {
	      type: Number,
	      default: 0
	    },
	    prevText: {
	      type: String,
	      default: 'Prev'
	    },
	    nextText: {
	      type: String,
	      default: 'Next'
	    },
	    onPrev: {
	      type: Function,
	      default: function _default() {}
	    },
	    onNext: {
	      type: Function,
	      default: function _default() {}
	    },
	    showFooter: {
	      type: Boolean,
	      default: true
	    }
	  },
	
	  data: function data() {
	    return {
	      steps: [],
	      stepStyle: {},
	      currentIndex: this.current
	    };
	  },
	
	  watch: {
	    current: function current(val) {
	      this.currentIndex = val;
	      this.setActiveIndex(this.currentIndex);
	    }
	  },
	
	  methods: {
	    setActiveIndex: function setActiveIndex(index) {
	      this.$children.forEach(function (item, i) {
	        if (i !== index) {
	          item.active = false;
	        } else {
	          item.active = true;
	        }
	      });
	    },
	    next: function next() {
	      if (this.currentIndex < this.$children.length) {
	        this.currentIndex += 1;
	        this.setActiveIndex(this.currentIndex);
	        this.onNext(this.currentIndex);
	      }
	    },
	    prev: function prev() {
	      if (this.currentIndex > 0) {
	        this.currentIndex -= 1;
	        this.setActiveIndex(this.currentIndex);
	        this.onPrev(this.currentIndex);
	      }
	    }
	  },
	
	  created: function created() {
	    if (this.type === 'pills') {
	      var width = parseInt(100 / this.steps.length, 10) + '%';
	      this.stepStyle['width'] = width;
	    }
	  },
	  mounted: function mounted() {
	    this.setActiveIndex(this.currentIndex);
	  }
	};

/***/ }),
/* 143 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'success'
	    },
	    size: String,
	    onText: String,
	    offText: String,
	    checked: Boolean,
	    disabled: Boolean,
	    value: {},
	    name: String,
	    onChange: {
	      type: Function,
	      default: function _default() {}
	    }
	  },
	
	  data: function data() {
	    return {
	      on: false,
	      showText: ''
	    };
	  },
	
	
	  computed: {
	    typeClass: function typeClass() {
	      return this.type ? 'is-' + this.type : 'is-success';
	    },
	    sizeClass: function sizeClass() {
	      return this.size ? 'is-' + this.size : null;
	    },
	    hasText: function hasText() {
	      return this.onText || this.offText;
	    }
	  },
	
	  methods: {
	    toggle: function toggle() {
	      this.on = !this.on;
	      this.showText = this.on ? this.onText : this.offText;
	      this.$emit('input', this.on);
	      this.onChange(this.on);
	    }
	  },
	
	  mounted: function mounted() {
	    if (this.checked || this.value) {
	      this.on = true;
	      this.showText = this.onText;
	    } else {
	      this.showText = this.offText;
	    }
	  }
	};

/***/ }),
/* 144 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    icon: String,
	    selected: Boolean,
	    disabled: Boolean,
	    label: {
	      type: String,
	      required: true
	    }
	  },
	
	  data: function data() {
	    return {
	      isActive: false,
	      transition: 'fade'
	    };
	  },
	  beforeCreate: function beforeCreate() {
	    this.isTabPane = true;
	  },
	
	
	  methods: {
	    onActivated: function onActivated() {
	      this.isActive = true;
	    },
	    deActivated: function deActivated() {
	      this.isActive = false;
	    }
	  }
	};

/***/ }),
/* 145 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    isFullWidth: Boolean,
	    layout: {
	      type: String,
	      default: 'top',
	      validator: function validator(val) {
	        return ['top', 'bottom', 'left', 'right'].indexOf(val) > -1;
	      }
	    },
	    type: {
	      type: String,
	      default: ''
	    },
	    size: {
	      type: String,
	      default: ''
	    },
	    alignment: {
	      type: String,
	      default: ''
	    },
	    activeIndex: {
	      type: Number,
	      default: 0
	    },
	    animation: {
	      type: String,
	      default: 'fade'
	    },
	    onlyFade: {
	      type: Boolean,
	      default: true
	    },
	    onTabClick: {
	      type: Function,
	      default: function _default() {}
	    },
	    transition: {
	      type: String,
	      default: 'fade'
	    }
	  },
	
	  data: function data() {
	    return {
	      tabPanes: [],
	      selectedIndex: 0,
	      prevSelectedIndex: -1
	    };
	  },
	
	
	  watch: {
	    activeIndex: function activeIndex(val) {
	      this.selectedIndex = val;
	    }
	  },
	
	  computed: {
	    alignClass: function alignClass() {
	      return this.alignment ? 'is-' + this.alignment : null;
	    },
	    typeClass: function typeClass() {
	      return this.type ? 'is-' + this.type : null;
	    },
	    sizeClass: function sizeClass() {
	      return this.size ? 'is-' + this.size : null;
	    },
	    layoutClass: function layoutClass() {
	      return this.layout ? 'is-layout-' + this.layout : null;
	    },
	    fullWidthClass: function fullWidthClass() {
	      return this.isFullWidth ? 'is-fullwidth' : null;
	    }
	  },
	
	  methods: {
	    isActive: function isActive(index) {
	      return index === this.selectedIndex;
	    },
	    handleSelect: function handleSelect(index) {
	      if (this.prevSelectedIndex !== -1) {
	        this.tabPanes[this.selectedIndex].deActivated();
	      }
	      this.prevSelectedIndex = this.selectedIndex;
	      this.selectedIndex = index;
	      this.tabPanes[index].onActivated(index, this.prevSelectedIndex);
	      this.onTabClick(index);
	    }
	  },
	
	  mounted: function mounted() {
	    this.tabPanes = this.$children.filter(function (child) {
	      return child.isTabPane;
	    });
	
	    this.handleSelect(this.activeIndex);
	  }
	};

/***/ }),
/* 146 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: ''
	    },
	    size: {
	      type: String
	    },
	    color: {
	      type: String
	    },
	    closable: {
	      type: Boolean,
	      default: false
	    },
	    onClose: {
	      type: Function,
	      default: function _default() {}
	    },
	    rounded: {
	      type: Boolean,
	      default: false
	    }
	  },
	
	  data: function data() {
	    return {
	      isShow: true
	    };
	  },
	
	
	  computed: {
	    typeClass: function typeClass() {
	      return this.type ? 'is-' + this.type : null;
	    },
	    sizeClass: function sizeClass() {
	      return this.size ? 'is-' + this.size : null;
	    },
	    btnClass: function btnClass() {
	      return this.size === 'large' ? null : 'is-small';
	    },
	    colorStyle: function colorStyle() {
	      return this.color ? { backgroundColor: this.color } : null;
	    },
	    roundedClass: function roundedClass() {
	      return this.rounded ? null : 'is-square';
	    }
	  },
	
	  methods: {
	    handleClose: function handleClose() {
	      var _this = this;
	
	      this.isShow = false;
	      this.onClose();
	
	      setTimeout(function () {
	        _this.$destroy();
	        _this.$el.remove();
	      }, 100);
	    }
	  }
	};

/***/ }),
/* 147 */
/***/ (function(module, exports) {

	"use strict";

/***/ }),
/* 148 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    icon: String,
	    date: String,
	    type: String,
	    color: String
	  },
	  computed: {
	    iconClass: function iconClass() {
	      return this.icon ? "fa-" + this.icon : null;
	    },
	    typeClass: function typeClass() {
	      return this.type ? "is-" + this.type : null;
	    }
	  }
	};

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _PopperMixin = __webpack_require__(18);
	
	var _PopperMixin2 = _interopRequireDefault(_PopperMixin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_PopperMixin2.default],
	
	  methods: {
	    handleClick: function handleClick() {
	      if (this.isShow) {
	        this.hidePopper();
	      } else {
	        this.createInstance();
	      }
	    },
	    bindEvent: function bindEvent() {
	      var reference = this.reference = this.reference || this.$el.children[0];
	      if (!reference) return;
	      if (this.trigger === 'focus') {
	        reference.addEventListener('focus', this.createInstance);
	        reference.addEventListener('blur', this.toggle);
	      } else if (this.trigger === 'click') {
	        reference.addEventListener('click', this.handleClick);
	      } else {
	        reference.addEventListener('mouseenter', this.createInstance);
	        reference.addEventListener('mouseleave', this.hidePopper);
	      }
	    },
	    removeEvent: function removeEvent() {
	      if (!this.reference) return;
	      if (this.trigger === 'focus') {
	        this.reference.removeEventListener('focus', this.createInstance);
	        this.reference.removeEventListener('blur', this.toggle);
	      } else if (this.trigger === 'click') {
	        this.reference.removeEventListener('click', this.handleClick);
	      } else {
	        this.reference.removeEventListener('mouseenter', this.createInstance);
	        this.reference.removeEventListener('mouseleave', this.hidePopper);
	      }
	    }
	  }
	};

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(155), __esModule: true };

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(156), __esModule: true };

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _iterator = __webpack_require__(151);
	
	var _iterator2 = _interopRequireDefault(_iterator);
	
	var _symbol = __webpack_require__(150);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(177);
	module.exports = __webpack_require__(4).Object.assign;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(178);
	module.exports = __webpack_require__(4).Object.keys;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(181);
	__webpack_require__(179);
	__webpack_require__(182);
	__webpack_require__(183);
	module.exports = __webpack_require__(4).Symbol;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(180);
	__webpack_require__(184);
	module.exports = __webpack_require__(47).f('iterator');


/***/ }),
/* 157 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 158 */
/***/ (function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(11);
	var toLength = __webpack_require__(175);
	var toAbsoluteIndex = __webpack_require__(174);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(157);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(14);
	var gOPS = __webpack_require__(39);
	var pIE = __webpack_require__(22);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(3).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(58);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(63);
	var descriptor = __webpack_require__(23);
	var setToStringTag = __webpack_require__(40);
	var IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(9)(IteratorPrototype, __webpack_require__(12)('iterator'), function () { return this; });
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 165 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(24)('meta');
	var isObject = __webpack_require__(13);
	var has = __webpack_require__(5);
	var setDesc = __webpack_require__(10).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(8)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__(14);
	var gOPS = __webpack_require__(39);
	var pIE = __webpack_require__(22);
	var toObject = __webpack_require__(44);
	var IObject = __webpack_require__(61);
	var $assign = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(8)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(10);
	var anObject = __webpack_require__(19);
	var getKeys = __webpack_require__(14);
	
	module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(22);
	var createDesc = __webpack_require__(23);
	var toIObject = __webpack_require__(11);
	var toPrimitive = __webpack_require__(45);
	var has = __webpack_require__(5);
	var IE8_DOM_DEFINE = __webpack_require__(60);
	var gOPD = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(7) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(11);
	var gOPN = __webpack_require__(64).f;
	var toString = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(5);
	var toObject = __webpack_require__(44);
	var IE_PROTO = __webpack_require__(41)('IE_PROTO');
	var ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(20);
	var core = __webpack_require__(4);
	var fails = __webpack_require__(8);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(43);
	var defined = __webpack_require__(36);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(43);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(43);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(158);
	var step = __webpack_require__(165);
	var Iterators = __webpack_require__(38);
	var toIObject = __webpack_require__(11);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(62)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(20);
	
	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(167) });


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(44);
	var $keys = __webpack_require__(14);
	
	__webpack_require__(172)('keys', function () {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});


/***/ }),
/* 179 */
/***/ (function(module, exports) {



/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(173)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(62)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(3);
	var has = __webpack_require__(5);
	var DESCRIPTORS = __webpack_require__(7);
	var $export = __webpack_require__(20);
	var redefine = __webpack_require__(66);
	var META = __webpack_require__(166).KEY;
	var $fails = __webpack_require__(8);
	var shared = __webpack_require__(42);
	var setToStringTag = __webpack_require__(40);
	var uid = __webpack_require__(24);
	var wks = __webpack_require__(12);
	var wksExt = __webpack_require__(47);
	var wksDefine = __webpack_require__(46);
	var enumKeys = __webpack_require__(161);
	var isArray = __webpack_require__(163);
	var anObject = __webpack_require__(19);
	var isObject = __webpack_require__(13);
	var toIObject = __webpack_require__(11);
	var toPrimitive = __webpack_require__(45);
	var createDesc = __webpack_require__(23);
	var _create = __webpack_require__(63);
	var gOPNExt = __webpack_require__(170);
	var $GOPD = __webpack_require__(169);
	var $DP = __webpack_require__(10);
	var $keys = __webpack_require__(14);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(64).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(22).f = $propertyIsEnumerable;
	  __webpack_require__(39).f = $getOwnPropertySymbols;
	
	  if (DESCRIPTORS && !__webpack_require__(21)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });
	
	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);
	
	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(9)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(46)('asyncIterator');


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(46)('observable');


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(176);
	var global = __webpack_require__(3);
	var hide = __webpack_require__(9);
	var Iterators = __webpack_require__(38);
	var TO_STRING_TAG = __webpack_require__(12)('toStringTag');
	
	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');
	
	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}


/***/ }),
/* 185 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 186 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 187 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*! flatpickr v2.6.3, @license MIT */
	function Flatpickr(element, config) {
		var self = this;
	
		self._ = {};
		self._.afterDayAnim = afterDayAnim;
		self.changeMonth = changeMonth;
		self.changeYear = changeYear;
		self.clear = clear;
		self.close = close;
		self._createElement = createElement;
		self.destroy = destroy;
		self.isEnabled = isEnabled;
		self.jumpToDate = jumpToDate;
		self.open = open;
		self.redraw = redraw;
		self.set = set;
		self.setDate = setDate;
		self.toggle = toggle;
	
		function init() {
			self.element = self.input = element;
			self.instanceConfig = config || {};
			self.parseDate = Flatpickr.prototype.parseDate.bind(self);
			self.formatDate = Flatpickr.prototype.formatDate.bind(self);
	
			setupFormats();
			parseConfig();
			setupLocale();
			setupInputs();
			setupDates();
			setupHelperFunctions();
	
			self.isOpen = false;
	
			self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable.length && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	
			if (!self.isMobile) build();
	
			bindEvents();
	
			if (self.selectedDates.length || self.config.noCalendar) {
				if (self.config.enableTime) {
					setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj || self.config.minDate : null);
				}
				updateValue();
			}
	
			if (self.config.weekNumbers) {
				self.calendarContainer.style.width = self.daysContainer.offsetWidth + self.weekWrapper.offsetWidth + "px";
			}
	
			self.showTimeInput = self.selectedDates.length > 0 || self.config.noCalendar;
	
			if (!self.isMobile) positionCalendar();
	
			triggerEvent("Ready");
		}
	
		/**
	  * Binds a function to the current flatpickr instance
	  * @param {Function} fn the function
	  * @return {Function} the function bound to the instance
	  */
		function bindToInstance(fn) {
			return fn.bind(self);
		}
	
		/**
	  * The handler for all events targeting the time inputs
	  * @param {Event} e the event - "input", "wheel", "increment", etc
	  */
		function updateTime(e) {
			if (self.config.noCalendar && !self.selectedDates.length)
				// picking time only
				self.selectedDates = [self.now];
	
			timeWrapper(e);
	
			if (!self.selectedDates.length) return;
	
			if (!self.minDateHasTime || e.type !== "input" || e.target.value.length >= 2) {
				setHoursFromInputs();
				updateValue();
			} else {
				setTimeout(function () {
					setHoursFromInputs();
					updateValue();
				}, 1000);
			}
		}
	
		/**
	  * Syncs the selected date object time with user's time input
	  */
		function setHoursFromInputs() {
			if (!self.config.enableTime) return;
	
			var hours = (parseInt(self.hourElement.value, 10) || 0) % (self.amPM ? 12 : 24),
			    minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
			    seconds = self.config.enableSeconds ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;
	
			if (self.amPM !== undefined) hours = hours % 12 + 12 * (self.amPM.textContent === "PM");
	
			if (self.minDateHasTime && compareDates(self.latestSelectedDateObj, self.config.minDate) === 0) {
	
				hours = Math.max(hours, self.config.minDate.getHours());
				if (hours === self.config.minDate.getHours()) minutes = Math.max(minutes, self.config.minDate.getMinutes());
			}
	
			if (self.maxDateHasTime && compareDates(self.latestSelectedDateObj, self.config.maxDate) === 0) {
				hours = Math.min(hours, self.config.maxDate.getHours());
				if (hours === self.config.maxDate.getHours()) minutes = Math.min(minutes, self.config.maxDate.getMinutes());
			}
	
			setHours(hours, minutes, seconds);
		}
	
		/**
	  * Syncs time input values with a date
	  * @param {Date} dateObj the date to sync with
	  */
		function setHoursFromDate(dateObj) {
			var date = dateObj || self.latestSelectedDateObj;
	
			if (date) setHours(date.getHours(), date.getMinutes(), date.getSeconds());
		}
	
		/**
	  * Sets the hours, minutes, and optionally seconds
	  * of the latest selected date object and the
	  * corresponding time inputs
	  * @param {Number} hours the hour. whether its military
	  *                 or am-pm gets inferred from config
	  * @param {Number} minutes the minutes
	  * @param {Number} seconds the seconds (optional)
	  */
		function setHours(hours, minutes, seconds) {
			if (self.selectedDates.length) {
				self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
			}
	
			if (!self.config.enableTime || self.isMobile) return;
	
			self.hourElement.value = self.pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * (hours % 12 === 0) : hours);
	
			self.minuteElement.value = self.pad(minutes);
	
			if (!self.config.time_24hr) self.amPM.textContent = hours >= 12 ? "PM" : "AM";
	
			if (self.config.enableSeconds === true) self.secondElement.value = self.pad(seconds);
		}
	
		/**
	  * Handles the year input and incrementing events
	  * @param {Event} event the keyup or increment event
	  */
		function onYearInput(event) {
			var year = event.target.value;
			if (event.delta) year = (parseInt(year) + event.delta).toString();
	
			if (year.length === 4 || event.key === "Enter") {
				self.currentYearElement.blur();
				if (!/[^\d]/.test(year)) changeYear(year);
			}
		}
	
		/**
	  * Essentially addEventListener + tracking
	  * @param {Element} element the element to addEventListener to
	  * @param {String} event the event name
	  * @param {Function} handler the event handler
	  */
		function bind(element, event, handler) {
			if (event instanceof Array) return event.forEach(function (ev) {
				return bind(element, ev, handler);
			});
	
			if (element instanceof Array) return element.forEach(function (el) {
				return bind(el, event, handler);
			});
	
			element.addEventListener(event, handler);
			self._handlers.push({ element: element, event: event, handler: handler });
		}
	
		/**
	  * A mousedown handler which mimics click.
	  * Minimizes latency, since we don't need to wait for mouseup in most cases.
	  * Also, avoids handling right clicks.
	  *
	  * @param {Function} handler the event handler
	  */
		function onClick(handler) {
			return function (evt) {
				return evt.which === 1 && handler(evt);
			};
		}
	
		/**
	  * Adds all the necessary event listeners
	  */
		function bindEvents() {
			self._handlers = [];
			self._animationLoop = [];
			if (self.config.wrap) {
				["open", "close", "toggle", "clear"].forEach(function (evt) {
					Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
						return bind(el, "mousedown", onClick(self[evt]));
					});
				});
			}
	
			if (self.isMobile) return setupMobile();
	
			self.debouncedResize = debounce(onResize, 50);
			self.triggerChange = function () {
				triggerEvent("Change");
			};
			self.debouncedChange = debounce(self.triggerChange, 300);
	
			if (self.config.mode === "range" && self.daysContainer) bind(self.daysContainer, "mouseover", function (e) {
				return onMouseOver(e.target);
			});
	
			bind(window.document.body, "keydown", onKeyDown);
	
			if (!self.config.static) bind(self._input, "keydown", onKeyDown);
	
			if (!self.config.inline && !self.config.static) bind(window, "resize", self.debouncedResize);
	
			if (window.ontouchstart !== undefined) bind(window.document, "touchstart", documentClick);
	
			bind(window.document, "mousedown", onClick(documentClick));
			bind(self._input, "blur", documentClick);
	
			if (self.config.clickOpens === true) bind(self._input, "focus", self.open);
	
			if (!self.config.noCalendar) {
				self.monthNav.addEventListener("wheel", function (e) {
					return e.preventDefault();
				});
				bind(self.monthNav, "wheel", debounce(onMonthNavScroll, 10));
				bind(self.monthNav, "mousedown", onClick(onMonthNavClick));
	
				bind(self.monthNav, ["keyup", "increment"], onYearInput);
				bind(self.daysContainer, "mousedown", onClick(selectDate));
	
				if (self.config.animate) {
					bind(self.daysContainer, ["webkitAnimationEnd", "animationend"], animateDays);
					bind(self.monthNav, ["webkitAnimationEnd", "animationend"], animateMonths);
				}
			}
	
			if (self.config.enableTime) {
				var selText = function selText(e) {
					return e.target.select();
				};
				bind(self.timeContainer, ["wheel", "input", "increment"], updateTime);
				bind(self.timeContainer, "mousedown", onClick(timeIncrement));
	
				bind(self.timeContainer, ["wheel", "increment"], self.debouncedChange);
				bind(self.timeContainer, "input", self.triggerChange);
	
				bind([self.hourElement, self.minuteElement], "focus", selText);
	
				if (self.secondElement !== undefined) bind(self.secondElement, "focus", function () {
					return self.secondElement.select();
				});
	
				if (self.amPM !== undefined) {
					bind(self.amPM, "mousedown", onClick(function (e) {
						updateTime(e);
						self.triggerChange(e);
					}));
				}
			}
		}
	
		function processPostDayAnimation() {
			for (var i = self._animationLoop.length; i--;) {
				self._animationLoop[i]();
				self._animationLoop.splice(i, 1);
			}
		}
	
		/**
	  * Removes the day container that slided out of view
	  * @param {Event} e the animation event
	  */
		function animateDays(e) {
			if (self.daysContainer.childNodes.length > 1) {
				switch (e.animationName) {
					case "fpSlideLeft":
						self.daysContainer.lastChild.classList.remove("slideLeftNew");
						self.daysContainer.removeChild(self.daysContainer.firstChild);
						self.days = self.daysContainer.firstChild;
						processPostDayAnimation();
	
						break;
	
					case "fpSlideRight":
						self.daysContainer.firstChild.classList.remove("slideRightNew");
						self.daysContainer.removeChild(self.daysContainer.lastChild);
						self.days = self.daysContainer.firstChild;
						processPostDayAnimation();
	
						break;
	
					default:
						break;
				}
			}
		}
	
		/**
	  * Removes the month element that animated out of view
	  * @param {Event} e the animation event
	  */
		function animateMonths(e) {
			switch (e.animationName) {
				case "fpSlideLeftNew":
				case "fpSlideRightNew":
					self.navigationCurrentMonth.classList.remove("slideLeftNew");
					self.navigationCurrentMonth.classList.remove("slideRightNew");
					var nav = self.navigationCurrentMonth;
	
					while (nav.nextSibling && /curr/.test(nav.nextSibling.className)) {
						self.monthNav.removeChild(nav.nextSibling);
					}while (nav.previousSibling && /curr/.test(nav.previousSibling.className)) {
						self.monthNav.removeChild(nav.previousSibling);
					}self.oldCurMonth = null;
					break;
			}
		}
	
		/**
	  * Set the calendar view to a particular date.
	  * @param {Date} jumpDate the date to set the view to
	  */
		function jumpToDate(jumpDate) {
			jumpDate = jumpDate ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
	
			try {
				self.currentYear = jumpDate.getFullYear();
				self.currentMonth = jumpDate.getMonth();
			} catch (e) {
				/* istanbul ignore next */
				console.error(e.stack);
				/* istanbul ignore next */
				console.warn("Invalid date supplied: " + jumpDate);
			}
	
			self.redraw();
		}
	
		/**
	  * The up/down arrow handler for time inputs
	  * @param {Event} e the click event
	  */
		function timeIncrement(e) {
			if (~e.target.className.indexOf("arrow")) incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
		}
	
		/**
	  * Increments/decrements the value of input associ-
	  * ated with the up/down arrow by dispatching an
	  * "increment" event on the input.
	  *
	  * @param {Event} e the click event
	  * @param {Number} delta the diff (usually 1 or -1)
	  * @param {Element} inputElem the input element
	  */
		function incrementNumInput(e, delta, inputElem) {
			var input = inputElem || e.target.parentNode.childNodes[0];
			var event = createEvent("increment");
			event.delta = delta;
			input.dispatchEvent(event);
		}
	
		function createNumberInput(inputClassName) {
			var wrapper = createElement("div", "numInputWrapper"),
			    numInput = createElement("input", "numInput " + inputClassName),
			    arrowUp = createElement("span", "arrowUp"),
			    arrowDown = createElement("span", "arrowDown");
	
			numInput.type = "text";
			numInput.pattern = "\\d*";
	
			wrapper.appendChild(numInput);
			wrapper.appendChild(arrowUp);
			wrapper.appendChild(arrowDown);
	
			return wrapper;
		}
	
		function build() {
			var fragment = window.document.createDocumentFragment();
			self.calendarContainer = createElement("div", "flatpickr-calendar");
			self.calendarContainer.tabIndex = -1;
	
			if (!self.config.noCalendar) {
				fragment.appendChild(buildMonthNav());
				self.innerContainer = createElement("div", "flatpickr-innerContainer");
	
				if (self.config.weekNumbers) self.innerContainer.appendChild(buildWeeks());
	
				self.rContainer = createElement("div", "flatpickr-rContainer");
				self.rContainer.appendChild(buildWeekdays());
	
				if (!self.daysContainer) {
					self.daysContainer = createElement("div", "flatpickr-days");
					self.daysContainer.tabIndex = -1;
				}
	
				buildDays();
				self.rContainer.appendChild(self.daysContainer);
	
				self.innerContainer.appendChild(self.rContainer);
				fragment.appendChild(self.innerContainer);
			}
	
			if (self.config.enableTime) fragment.appendChild(buildTime());
	
			toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
			toggleClass(self.calendarContainer, "animate", self.config.animate);
	
			self.calendarContainer.appendChild(fragment);
	
			var customAppend = self.config.appendTo && self.config.appendTo.nodeType;
	
			if (self.config.inline || self.config.static) {
				self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
	
				if (self.config.inline && !customAppend) {
					return self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
				}
	
				if (self.config.static) {
					var wrapper = createElement("div", "flatpickr-wrapper");
					self.element.parentNode.insertBefore(wrapper, self.element);
					wrapper.appendChild(self.element);
	
					if (self.altInput) wrapper.appendChild(self.altInput);
	
					wrapper.appendChild(self.calendarContainer);
					return;
				}
			}
	
			(customAppend ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
		}
	
		function createDay(className, date, dayNumber, i) {
			var dateIsEnabled = isEnabled(date, true),
			    dayElement = createElement("span", "flatpickr-day " + className, date.getDate());
	
			dayElement.dateObj = date;
			dayElement.$i = i;
			dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
	
			if (compareDates(date, self.now) === 0) {
				self.todayDateElem = dayElement;
				dayElement.classList.add("today");
			}
	
			if (dateIsEnabled) {
				dayElement.tabIndex = -1;
				if (isDateSelected(date)) {
					dayElement.classList.add("selected");
					self.selectedDateElem = dayElement;
					if (self.config.mode === "range") {
						toggleClass(dayElement, "startRange", compareDates(date, self.selectedDates[0]) === 0);
	
						toggleClass(dayElement, "endRange", compareDates(date, self.selectedDates[1]) === 0);
					}
				}
			} else {
				dayElement.classList.add("disabled");
				if (self.selectedDates[0] && date > self.minRangeDate && date < self.selectedDates[0]) self.minRangeDate = date;else if (self.selectedDates[0] && date < self.maxRangeDate && date > self.selectedDates[0]) self.maxRangeDate = date;
			}
	
			if (self.config.mode === "range") {
				if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
	
				if (self.selectedDates.length === 1 && (date < self.minRangeDate || date > self.maxRangeDate)) dayElement.classList.add("notAllowed");
			}
	
			if (self.config.weekNumbers && className !== "prevMonthDay" && dayNumber % 7 === 1) {
				self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='disabled flatpickr-day'>" + self.config.getWeek(date) + "</span>");
			}
	
			triggerEvent("DayCreate", dayElement);
	
			return dayElement;
		}
	
		function focusOnDay(currentIndex, offset) {
			var newIndex = currentIndex + offset || 0,
			    targetNode = currentIndex !== undefined ? self.days.childNodes[newIndex] : self.selectedDateElem || self.todayDateElem || self.days.childNodes[0],
			    focus = function focus() {
				targetNode = targetNode || self.days.childNodes[newIndex];
				targetNode.focus();
	
				if (self.config.mode === "range") onMouseOver(targetNode);
			};
	
			if (targetNode === undefined && offset !== 0) {
				if (offset > 0) {
					self.changeMonth(1);
					newIndex = newIndex % 42;
				} else if (offset < 0) {
					self.changeMonth(-1);
					newIndex += 42;
				}
	
				return afterDayAnim(focus);
			}
	
			focus();
		}
	
		function afterDayAnim(fn) {
			if (self.config.animate === true) return self._animationLoop.push(fn);
			fn();
		}
	
		function buildDays(delta) {
			var firstOfMonth = (new Date(self.currentYear, self.currentMonth, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7,
			    isRangeMode = self.config.mode === "range";
	
			self.prevMonthDays = self.utils.getDaysinMonth((self.currentMonth - 1 + 12) % 12);
			self.selectedDateElem = undefined;
			self.todayDateElem = undefined;
	
			var daysInMonth = self.utils.getDaysinMonth(),
			    days = window.document.createDocumentFragment();
	
			var dayNumber = self.prevMonthDays + 1 - firstOfMonth,
			    dayIndex = 0;
	
			if (self.config.weekNumbers && self.weekNumbers.firstChild) self.weekNumbers.textContent = "";
	
			if (isRangeMode) {
				// const dateLimits = self.config.enable.length || self.config.disable.length || self.config.mixDate || self.config.maxDate;
				self.minRangeDate = new Date(self.currentYear, self.currentMonth - 1, dayNumber);
				self.maxRangeDate = new Date(self.currentYear, self.currentMonth + 1, (42 - firstOfMonth) % daysInMonth);
			}
	
			// prepend days from the ending of previous month
			for (; dayNumber <= self.prevMonthDays; dayNumber++, dayIndex++) {
				days.appendChild(createDay("prevMonthDay", new Date(self.currentYear, self.currentMonth - 1, dayNumber), dayNumber, dayIndex));
			}
	
			// Start at 1 since there is no 0th day
			for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
				days.appendChild(createDay("", new Date(self.currentYear, self.currentMonth, dayNumber), dayNumber, dayIndex));
			}
	
			// append days from the next month
			for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth; dayNum++, dayIndex++) {
				days.appendChild(createDay("nextMonthDay", new Date(self.currentYear, self.currentMonth + 1, dayNum % daysInMonth), dayNum, dayIndex));
			}
	
			if (isRangeMode && self.selectedDates.length === 1 && days.childNodes[0]) {
				self._hidePrevMonthArrow = self._hidePrevMonthArrow || self.minRangeDate > days.childNodes[0].dateObj;
	
				self._hideNextMonthArrow = self._hideNextMonthArrow || self.maxRangeDate < new Date(self.currentYear, self.currentMonth + 1, 1);
			} else updateNavigationCurrentMonth();
	
			var dayContainer = createElement("div", "dayContainer");
			dayContainer.appendChild(days);
	
			if (!self.config.animate || delta === undefined) clearNode(self.daysContainer);else {
				while (self.daysContainer.childNodes.length > 1) {
					self.daysContainer.removeChild(self.daysContainer.firstChild);
				}
			}
	
			if (delta >= 0) self.daysContainer.appendChild(dayContainer);else self.daysContainer.insertBefore(dayContainer, self.daysContainer.firstChild);
	
			self.days = self.daysContainer.firstChild;
			return self.daysContainer;
		}
	
		function clearNode(node) {
			while (node.firstChild) {
				node.removeChild(node.firstChild);
			}
		}
	
		function buildMonthNav() {
			var monthNavFragment = window.document.createDocumentFragment();
			self.monthNav = createElement("div", "flatpickr-month");
	
			self.prevMonthNav = createElement("span", "flatpickr-prev-month");
			self.prevMonthNav.innerHTML = self.config.prevArrow;
	
			self.currentMonthElement = createElement("span", "cur-month");
			self.currentMonthElement.title = self.l10n.scrollTitle;
	
			var yearInput = createNumberInput("cur-year");
			self.currentYearElement = yearInput.childNodes[0];
			self.currentYearElement.title = self.l10n.scrollTitle;
	
			if (self.config.minDate) self.currentYearElement.min = self.config.minDate.getFullYear();
	
			if (self.config.maxDate) {
				self.currentYearElement.max = self.config.maxDate.getFullYear();
	
				self.currentYearElement.disabled = self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
			}
	
			self.nextMonthNav = createElement("span", "flatpickr-next-month");
			self.nextMonthNav.innerHTML = self.config.nextArrow;
	
			self.navigationCurrentMonth = createElement("span", "flatpickr-current-month");
			self.navigationCurrentMonth.appendChild(self.currentMonthElement);
			self.navigationCurrentMonth.appendChild(yearInput);
	
			monthNavFragment.appendChild(self.prevMonthNav);
			monthNavFragment.appendChild(self.navigationCurrentMonth);
			monthNavFragment.appendChild(self.nextMonthNav);
			self.monthNav.appendChild(monthNavFragment);
	
			Object.defineProperty(self, "_hidePrevMonthArrow", {
				get: function get() {
					return this.__hidePrevMonthArrow;
				},
				set: function set(bool) {
					if (this.__hidePrevMonthArrow !== bool) self.prevMonthNav.style.display = bool ? "none" : "block";
					this.__hidePrevMonthArrow = bool;
				}
			});
	
			Object.defineProperty(self, "_hideNextMonthArrow", {
				get: function get() {
					return this.__hideNextMonthArrow;
				},
				set: function set(bool) {
					if (this.__hideNextMonthArrow !== bool) self.nextMonthNav.style.display = bool ? "none" : "block";
					this.__hideNextMonthArrow = bool;
				}
			});
	
			updateNavigationCurrentMonth();
	
			return self.monthNav;
		}
	
		function buildTime() {
			self.calendarContainer.classList.add("hasTime");
			if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
			self.timeContainer = createElement("div", "flatpickr-time");
			self.timeContainer.tabIndex = -1;
			var separator = createElement("span", "flatpickr-time-separator", ":");
	
			var hourInput = createNumberInput("flatpickr-hour");
			self.hourElement = hourInput.childNodes[0];
	
			var minuteInput = createNumberInput("flatpickr-minute");
			self.minuteElement = minuteInput.childNodes[0];
	
			self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
	
			self.hourElement.value = self.pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.defaultHour);
	
			self.minuteElement.value = self.pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : self.config.defaultMinute);
	
			self.hourElement.step = self.config.hourIncrement;
			self.minuteElement.step = self.config.minuteIncrement;
	
			self.hourElement.min = self.config.time_24hr ? 0 : 1;
			self.hourElement.max = self.config.time_24hr ? 23 : 12;
	
			self.minuteElement.min = 0;
			self.minuteElement.max = 59;
	
			self.hourElement.title = self.minuteElement.title = self.l10n.scrollTitle;
	
			self.timeContainer.appendChild(hourInput);
			self.timeContainer.appendChild(separator);
			self.timeContainer.appendChild(minuteInput);
	
			if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");
	
			if (self.config.enableSeconds) {
				self.timeContainer.classList.add("hasSeconds");
	
				var secondInput = createNumberInput("flatpickr-second");
				self.secondElement = secondInput.childNodes[0];
	
				self.secondElement.value = self.latestSelectedDateObj ? self.pad(self.latestSelectedDateObj.getSeconds()) : "00";
	
				self.secondElement.step = self.minuteElement.step;
				self.secondElement.min = self.minuteElement.min;
				self.secondElement.max = self.minuteElement.max;
	
				self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
				self.timeContainer.appendChild(secondInput);
			}
	
			if (!self.config.time_24hr) {
				// add self.amPM if appropriate
				self.amPM = createElement("span", "flatpickr-am-pm", ["AM", "PM"][self.hourElement.value > 11 | 0]);
				self.amPM.title = self.l10n.toggleTitle;
				self.amPM.tabIndex = -1;
				self.timeContainer.appendChild(self.amPM);
			}
	
			return self.timeContainer;
		}
	
		function buildWeekdays() {
			if (!self.weekdayContainer) self.weekdayContainer = createElement("div", "flatpickr-weekdays");
	
			var firstDayOfWeek = self.l10n.firstDayOfWeek;
			var weekdays = self.l10n.weekdays.shorthand.slice();
	
			if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
				weekdays = [].concat(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
			}
	
			self.weekdayContainer.innerHTML = "\n\t\t<span class=flatpickr-weekday>\n\t\t\t" + weekdays.join("</span><span class=flatpickr-weekday>") + "\n\t\t</span>\n\t\t";
	
			return self.weekdayContainer;
		}
	
		/* istanbul ignore next */
		function buildWeeks() {
			self.calendarContainer.classList.add("hasWeeks");
			self.weekWrapper = createElement("div", "flatpickr-weekwrapper");
			self.weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
			self.weekNumbers = createElement("div", "flatpickr-weeks");
			self.weekWrapper.appendChild(self.weekNumbers);
	
			return self.weekWrapper;
		}
	
		function changeMonth(value, is_offset, animate) {
			is_offset = is_offset === undefined || is_offset;
			var delta = is_offset ? value : value - self.currentMonth;
			var skipAnimations = !self.config.animate || animate === false;
	
			if (delta < 0 && self._hidePrevMonthArrow || delta > 0 && self._hideNextMonthArrow) return;
	
			self.currentMonth += delta;
	
			if (self.currentMonth < 0 || self.currentMonth > 11) {
				self.currentYear += self.currentMonth > 11 ? 1 : -1;
				self.currentMonth = (self.currentMonth + 12) % 12;
	
				triggerEvent("YearChange");
			}
	
			buildDays(!skipAnimations ? delta : undefined);
	
			if (skipAnimations) {
				triggerEvent("MonthChange");
				return updateNavigationCurrentMonth();
			}
	
			// remove possible remnants from clicking too fast
			var nav = self.navigationCurrentMonth;
			if (delta < 0) {
				while (nav.nextSibling && /curr/.test(nav.nextSibling.className)) {
					self.monthNav.removeChild(nav.nextSibling);
				}
			} else if (delta > 0) {
				while (nav.previousSibling && /curr/.test(nav.previousSibling.className)) {
					self.monthNav.removeChild(nav.previousSibling);
				}
			}
	
			self.oldCurMonth = self.navigationCurrentMonth;
	
			self.navigationCurrentMonth = self.monthNav.insertBefore(self.oldCurMonth.cloneNode(true), delta > 0 ? self.oldCurMonth.nextSibling : self.oldCurMonth);
	
			if (delta > 0) {
				self.daysContainer.firstChild.classList.add("slideLeft");
				self.daysContainer.lastChild.classList.add("slideLeftNew");
	
				self.oldCurMonth.classList.add("slideLeft");
				self.navigationCurrentMonth.classList.add("slideLeftNew");
			} else if (delta < 0) {
				self.daysContainer.firstChild.classList.add("slideRightNew");
				self.daysContainer.lastChild.classList.add("slideRight");
	
				self.oldCurMonth.classList.add("slideRight");
				self.navigationCurrentMonth.classList.add("slideRightNew");
			}
	
			self.currentMonthElement = self.navigationCurrentMonth.firstChild;
			self.currentYearElement = self.navigationCurrentMonth.lastChild.childNodes[0];
	
			updateNavigationCurrentMonth();
			self.oldCurMonth.firstChild.textContent = self.utils.monthToStr(self.currentMonth - delta);
	
			triggerEvent("MonthChange");
	
			if (document.activeElement && document.activeElement.$i) {
				var index = document.activeElement.$i;
				afterDayAnim(function () {
					focusOnDay(index, 0);
				});
			}
		}
	
		function clear(triggerChangeEvent) {
			self.input.value = "";
	
			if (self.altInput) self.altInput.value = "";
	
			if (self.mobileInput) self.mobileInput.value = "";
	
			self.selectedDates = [];
			self.latestSelectedDateObj = undefined;
			self.showTimeInput = false;
	
			self.redraw();
	
			if (triggerChangeEvent !== false)
				// triggerChangeEvent is true (default) or an Event
				triggerEvent("Change");
		}
	
		function close() {
			self.isOpen = false;
	
			if (!self.isMobile) {
				self.calendarContainer.classList.remove("open");
				self._input.classList.remove("active");
			}
	
			triggerEvent("Close");
		}
	
		function destroy() {
			for (var i = self._handlers.length; i--;) {
				var h = self._handlers[i];
				h.element.removeEventListener(h.event, h.handler);
			}
	
			self._handlers = [];
	
			if (self.mobileInput) {
				if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
				self.mobileInput = null;
			} else if (self.calendarContainer && self.calendarContainer.parentNode) self.calendarContainer.parentNode.removeChild(self.calendarContainer);
	
			if (self.altInput) {
				self.input.type = "text";
				if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
				delete self.altInput;
			}
	
			if (self.input) {
				self.input.type = self.input._type;
				self.input.classList.remove("flatpickr-input");
				self.input.removeAttribute("readonly");
				self.input.value = "";
			}
	
			["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (k) {
				return delete self[k];
			});
		}
	
		function isCalendarElem(elem) {
			if (self.config.appendTo && self.config.appendTo.contains(elem)) return true;
	
			return self.calendarContainer.contains(elem);
		}
	
		function documentClick(e) {
			if (self.isOpen && !self.config.inline) {
				var isCalendarElement = isCalendarElem(e.target);
				var isInput = e.target === self.input || e.target === self.altInput || self.element.contains(e.target) ||
				// web components
				e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
	
				var lostFocus = e.type === "blur" ? isInput && e.relatedTarget && !isCalendarElem(e.relatedTarget) : !isInput && !isCalendarElement;
	
				if (lostFocus) {
					e.preventDefault();
					self.close();
	
					if (self.config.mode === "range" && self.selectedDates.length === 1) {
						self.clear(false);
						self.redraw();
					}
				}
			}
		}
	
		function changeYear(newYear) {
			if (!newYear || self.currentYearElement.min && newYear < self.currentYearElement.min || self.currentYearElement.max && newYear > self.currentYearElement.max) return;
	
			var newYearNum = parseInt(newYear, 10),
			    isNewYear = self.currentYear !== newYearNum;
	
			self.currentYear = newYearNum || self.currentYear;
	
			if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
				self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
			} else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
				self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
			}
	
			if (isNewYear) {
				self.redraw();
				triggerEvent("YearChange");
			}
		}
	
		function isEnabled(date, timeless) {
			if (self.config.minDate && compareDates(date, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && compareDates(date, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;
	
			if (!self.config.enable.length && !self.config.disable.length) return true;
	
			var dateToCheck = self.parseDate(date, null, true); // timeless
	
			var bool = self.config.enable.length > 0,
			    array = bool ? self.config.enable : self.config.disable;
	
			for (var i = 0, d; i < array.length; i++) {
				d = array[i];
	
				if (d instanceof Function && d(dateToCheck)) // disabled by function
					return bool;else if (d instanceof Date && d.getTime() === dateToCheck.getTime())
					// disabled by date
					return bool;else if (typeof d === "string" && self.parseDate(d, null, true).getTime() === dateToCheck.getTime())
					// disabled by date string
					return bool;else if ( // disabled by range
				(typeof d === "undefined" ? "undefined" : _typeof(d)) === "object" && d.from && d.to && dateToCheck >= d.from && dateToCheck <= d.to) return bool;
			}
	
			return !bool;
		}
	
		function onKeyDown(e) {
			var isInput = e.target === self._input;
			var calendarElem = isCalendarElem(e.target);
			var allowInput = self.config.allowInput;
			var allowKeydown = self.isOpen && (!allowInput || !isInput);
			var allowInlineKeydown = self.config.inline && isInput && !allowInput;
	
			if (e.key === "Enter" && allowInput && isInput) {
				self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
				return e.target.blur();
			} else if (calendarElem || allowKeydown || allowInlineKeydown) {
				var isTimeObj = self.timeContainer && self.timeContainer.contains(e.target);
				switch (e.key) {
					case "Enter":
						if (isTimeObj) updateValue();else selectDate(e);
	
						break;
	
					case "Escape":
						// escape
						e.preventDefault();
						self.close();
						break;
	
					case "ArrowLeft":
					case "ArrowRight":
						if (!isTimeObj) {
							e.preventDefault();
	
							if (self.daysContainer) {
								var _delta = e.key === "ArrowRight" ? 1 : -1;
	
								if (!e.ctrlKey) focusOnDay(e.target.$i, _delta);else changeMonth(_delta, true);
							} else if (self.config.enableTime && !isTimeObj) self.hourElement.focus();
						}
	
						break;
	
					case "ArrowUp":
					case "ArrowDown":
						e.preventDefault();
						var delta = e.key === "ArrowDown" ? 1 : -1;
	
						if (self.daysContainer) {
							if (e.ctrlKey) {
								changeYear(self.currentYear - delta);
								focusOnDay(e.target.$i, 0);
							} else if (!isTimeObj) focusOnDay(e.target.$i, delta * 7);
						} else if (self.config.enableTime) {
							if (!isTimeObj) self.hourElement.focus();
							updateTime(e);
						}
	
						break;
	
					case "Tab":
						if (e.target === self.hourElement) {
							e.preventDefault();
							self.minuteElement.select();
						} else if (e.target === self.minuteElement && (self.secondElement || self.amPM)) {
							e.preventDefault();
							(self.secondElement || self.amPM).focus();
						} else if (e.target === self.secondElement) {
							e.preventDefault();
							self.amPM.focus();
						}
	
						break;
	
					case "a":
						if (e.target === self.amPM) {
							self.amPM.textContent = "AM";
							setHoursFromInputs();
							updateValue();
						}
						break;
	
					case "p":
						if (e.target === self.amPM) {
							self.amPM.textContent = "PM";
							setHoursFromInputs();
							updateValue();
						}
						break;
	
					default:
						break;
	
				}
	
				triggerEvent("KeyDown", e);
			}
		}
	
		function onMouseOver(elem) {
			if (self.selectedDates.length !== 1 || !elem.classList.contains("flatpickr-day")) return;
	
			var hoverDate = elem.dateObj,
			    initialDate = self.parseDate(self.selectedDates[0], null, true),
			    rangeStartDate = Math.min(hoverDate.getTime(), self.selectedDates[0].getTime()),
			    rangeEndDate = Math.max(hoverDate.getTime(), self.selectedDates[0].getTime()),
			    containsDisabled = false;
	
			for (var t = rangeStartDate; t < rangeEndDate; t += self.utils.duration.DAY) {
				if (!isEnabled(new Date(t))) {
					containsDisabled = true;
					break;
				}
			}
	
			var _loop = function _loop(timestamp, i) {
				var outOfRange = timestamp < self.minRangeDate.getTime() || timestamp > self.maxRangeDate.getTime(),
				    dayElem = self.days.childNodes[i];
	
				if (outOfRange) {
					self.days.childNodes[i].classList.add("notAllowed");
					["inRange", "startRange", "endRange"].forEach(function (c) {
						dayElem.classList.remove(c);
					});
					return "continue";
				} else if (containsDisabled && !outOfRange) return "continue";
	
				["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
					dayElem.classList.remove(c);
				});
	
				var minRangeDate = Math.max(self.minRangeDate.getTime(), rangeStartDate),
				    maxRangeDate = Math.min(self.maxRangeDate.getTime(), rangeEndDate);
	
				elem.classList.add(hoverDate < self.selectedDates[0] ? "startRange" : "endRange");
	
				if (initialDate < hoverDate && timestamp === initialDate.getTime()) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate.getTime()) dayElem.classList.add("endRange");
	
				if (timestamp >= minRangeDate && timestamp <= maxRangeDate) dayElem.classList.add("inRange");
			};
	
			for (var timestamp = self.days.childNodes[0].dateObj.getTime(), i = 0; i < 42; i++, timestamp += self.utils.duration.DAY) {
				var _ret = _loop(timestamp, i);
	
				if (_ret === "continue") continue;
			}
		}
	
		function onResize() {
			if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
		}
	
		function open(e) {
			if (self.isMobile) {
				if (e) {
					e.preventDefault();
					e.target.blur();
				}
	
				setTimeout(function () {
					self.mobileInput.click();
				}, 0);
	
				triggerEvent("Open");
				return;
			}
	
			if (self.isOpen || self._input.disabled || self.config.inline) return;
	
			self.isOpen = true;
			self.calendarContainer.classList.add("open");
			positionCalendar();
			self._input.classList.add("active");
	
			triggerEvent("Open");
		}
	
		function minMaxDateSetter(type) {
			return function (date) {
				var dateObj = self.config["_" + type + "Date"] = self.parseDate(date);
	
				var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
				var isValidDate = date && dateObj instanceof Date;
	
				if (isValidDate) {
					self[type + "DateHasTime"] = dateObj.getHours() || dateObj.getMinutes() || dateObj.getSeconds();
				}
	
				if (self.selectedDates) {
					self.selectedDates = self.selectedDates.filter(function (d) {
						return isEnabled(d);
					});
					if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
					updateValue();
				}
	
				if (self.daysContainer) {
					redraw();
	
					if (isValidDate) self.currentYearElement[type] = dateObj.getFullYear();else self.currentYearElement.removeAttribute(type);
	
					self.currentYearElement.disabled = inverseDateObj && dateObj && inverseDateObj.getFullYear() === dateObj.getFullYear();
				}
			};
		}
	
		function parseConfig() {
			var boolOpts = ["utc", "wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];
	
			var hooks = ["onChange", "onClose", "onDayCreate", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange"];
	
			self.config = Object.create(Flatpickr.defaultConfig);
	
			var userConfig = _extends({}, self.instanceConfig, JSON.parse(JSON.stringify(self.element.dataset || {})));
	
			self.config.parseDate = userConfig.parseDate;
			self.config.formatDate = userConfig.formatDate;
	
			_extends(self.config, userConfig);
	
			if (!userConfig.dateFormat && userConfig.enableTime) {
				self.config.dateFormat = self.config.noCalendar ? "H:i" + (self.config.enableSeconds ? ":S" : "") : Flatpickr.defaultConfig.dateFormat + " H:i" + (self.config.enableSeconds ? ":S" : "");
			}
	
			if (userConfig.altInput && userConfig.enableTime && !userConfig.altFormat) {
				self.config.altFormat = self.config.noCalendar ? "h:i" + (self.config.enableSeconds ? ":S K" : " K") : Flatpickr.defaultConfig.altFormat + (" h:i" + (self.config.enableSeconds ? ":S" : "") + " K");
			}
	
			Object.defineProperty(self.config, "minDate", {
				get: function get() {
					return this._minDate;
				},
				set: minMaxDateSetter("min")
			});
	
			Object.defineProperty(self.config, "maxDate", {
				get: function get() {
					return this._maxDate;
				},
				set: minMaxDateSetter("max")
			});
	
			self.config.minDate = userConfig.minDate;
			self.config.maxDate = userConfig.maxDate;
	
			for (var i = 0; i < boolOpts.length; i++) {
				self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
			}for (var _i = hooks.length; _i--;) {
				if (self.config[hooks[_i]] !== undefined) {
					self.config[hooks[_i]] = arrayify(self.config[hooks[_i]] || []).map(bindToInstance);
				}
			}
	
			for (var _i2 = 0; _i2 < self.config.plugins.length; _i2++) {
				var pluginConf = self.config.plugins[_i2](self) || {};
				for (var key in pluginConf) {
	
					if (self.config[key] instanceof Array || ~hooks.indexOf(key)) {
						self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
					} else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
				}
			}
	
			triggerEvent("ParseConfig");
		}
	
		function setupLocale() {
			if (_typeof(self.config.locale) !== "object" && typeof Flatpickr.l10ns[self.config.locale] === "undefined") console.warn("flatpickr: invalid locale " + self.config.locale);
	
			self.l10n = _extends(Object.create(Flatpickr.l10ns.default), _typeof(self.config.locale) === "object" ? self.config.locale : self.config.locale !== "default" ? Flatpickr.l10ns[self.config.locale] || {} : {});
		}
	
		function positionCalendar() {
			if (self.calendarContainer === undefined) return;
	
			var calendarHeight = self.calendarContainer.offsetHeight,
			    calendarWidth = self.calendarContainer.offsetWidth,
			    configPos = self.config.position,
			    inputBounds = self._positionElement.getBoundingClientRect(),
			    distanceFromBottom = window.innerHeight - inputBounds.bottom,
			    showOnTop = configPos === "above" || configPos !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
	
			var top = window.pageYOffset + inputBounds.top + (!showOnTop ? self._positionElement.offsetHeight + 2 : -calendarHeight - 2);
	
			toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
			toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
	
			if (self.config.inline) return;
	
			var left = window.pageXOffset + inputBounds.left;
			var right = window.document.body.offsetWidth - inputBounds.right;
			var rightMost = left + calendarWidth > window.document.body.offsetWidth;
	
			toggleClass(self.calendarContainer, "rightMost", rightMost);
	
			if (self.config.static) return;
	
			self.calendarContainer.style.top = top + "px";
	
			if (!rightMost) {
				self.calendarContainer.style.left = left + "px";
				self.calendarContainer.style.right = "auto";
			} else {
				self.calendarContainer.style.left = "auto";
				self.calendarContainer.style.right = right + "px";
			}
		}
	
		function redraw() {
			if (self.config.noCalendar || self.isMobile) return;
	
			buildWeekdays();
			updateNavigationCurrentMonth();
			buildDays();
		}
	
		function selectDate(e) {
			e.preventDefault();
			e.stopPropagation();
	
			if (!e.target.classList.contains("flatpickr-day") || e.target.classList.contains("disabled") || e.target.classList.contains("notAllowed")) return;
	
			var selectedDate = self.latestSelectedDateObj = new Date(e.target.dateObj.getTime());
	
			var shouldChangeMonth = selectedDate.getMonth() !== self.currentMonth && self.config.mode !== "range";
	
			self.selectedDateElem = e.target;
	
			if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
				var selectedIndex = isDateSelected(selectedDate);
				if (selectedIndex) self.selectedDates.splice(selectedIndex, 1);else self.selectedDates.push(selectedDate);
			} else if (self.config.mode === "range") {
				if (self.selectedDates.length === 2) self.clear();
	
				self.selectedDates.push(selectedDate);
	
				// unless selecting same date twice, sort ascendingly
				if (compareDates(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function (a, b) {
					return a.getTime() - b.getTime();
				});
			}
	
			setHoursFromInputs();
	
			if (shouldChangeMonth) {
				var isNewYear = self.currentYear !== selectedDate.getFullYear();
				self.currentYear = selectedDate.getFullYear();
				self.currentMonth = selectedDate.getMonth();
	
				if (isNewYear) triggerEvent("YearChange");
	
				triggerEvent("MonthChange");
			}
	
			buildDays();
	
			if (self.minDateHasTime && self.config.enableTime && compareDates(selectedDate, self.config.minDate) === 0) setHoursFromDate(self.config.minDate);
	
			updateValue();
	
			if (self.config.enableTime) setTimeout(function () {
				return self.showTimeInput = true;
			}, 50);
	
			if (self.config.mode === "range") {
				if (self.selectedDates.length === 1) {
					onMouseOver(e.target);
	
					self._hidePrevMonthArrow = self._hidePrevMonthArrow || self.minRangeDate > self.days.childNodes[0].dateObj;
	
					self._hideNextMonthArrow = self._hideNextMonthArrow || self.maxRangeDate < new Date(self.currentYear, self.currentMonth + 1, 1);
				} else updateNavigationCurrentMonth();
			}
	
			triggerEvent("Change");
	
			// maintain focus
			if (!shouldChangeMonth) focusOnDay(e.target.$i, 0);else afterDayAnim(function () {
				return self.selectedDateElem.focus();
			});
	
			if (self.config.enableTime) setTimeout(function () {
				return self.hourElement.select();
			}, 451);
	
			if (self.config.closeOnSelect) {
				var single = self.config.mode === "single" && !self.config.enableTime;
				var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;
	
				if (single || range) self.close();
			}
		}
	
		function set(option, value) {
			self.config[option] = value;
			self.redraw();
			jumpToDate();
		}
	
		function setSelectedDate(inputDate, format) {
			if (inputDate instanceof Array) self.selectedDates = inputDate.map(function (d) {
				return self.parseDate(d, format);
			});else if (inputDate instanceof Date || !isNaN(inputDate)) self.selectedDates = [self.parseDate(inputDate, format)];else if (inputDate && inputDate.substring) {
				switch (self.config.mode) {
					case "single":
						self.selectedDates = [self.parseDate(inputDate, format)];
						break;
	
					case "multiple":
						self.selectedDates = inputDate.split("; ").map(function (date) {
							return self.parseDate(date, format);
						});
						break;
	
					case "range":
						self.selectedDates = inputDate.split(self.l10n.rangeSeparator).map(function (date) {
							return self.parseDate(date, format);
						});
	
						break;
	
					default:
						break;
				}
			}
	
			self.selectedDates = self.selectedDates.filter(function (d) {
				return d instanceof Date && isEnabled(d, false);
			});
	
			self.selectedDates.sort(function (a, b) {
				return a.getTime() - b.getTime();
			});
		}
	
		function setDate(date, triggerChange, format) {
			if (!date) return self.clear(triggerChange);
	
			setSelectedDate(date, format);
	
			self.showTimeInput = self.selectedDates.length > 0;
			self.latestSelectedDateObj = self.selectedDates[0];
	
			self.redraw();
			jumpToDate();
	
			setHoursFromDate();
			updateValue(triggerChange);
	
			if (triggerChange) triggerEvent("Change");
		}
	
		function setupDates() {
			function parseDateRules(arr) {
				for (var i = arr.length; i--;) {
					if (typeof arr[i] === "string" || +arr[i]) arr[i] = self.parseDate(arr[i], null, true);else if (arr[i] && arr[i].from && arr[i].to) {
						arr[i].from = self.parseDate(arr[i].from);
						arr[i].to = self.parseDate(arr[i].to);
					}
				}
	
				return arr.filter(function (x) {
					return x;
				}); // remove falsy values
			}
	
			self.selectedDates = [];
			self.now = new Date();
	
			if (self.config.disable.length) self.config.disable = parseDateRules(self.config.disable);
	
			if (self.config.enable.length) self.config.enable = parseDateRules(self.config.enable);
	
			var preloadedDate = self.config.defaultDate || self.input.value;
			if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
	
			var initialDate = self.selectedDates.length ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now ? self.config.maxDate : self.now;
	
			self.currentYear = initialDate.getFullYear();
			self.currentMonth = initialDate.getMonth();
	
			if (self.selectedDates.length) self.latestSelectedDateObj = self.selectedDates[0];
	
			self.minDateHasTime = self.config.minDate && (self.config.minDate.getHours() || self.config.minDate.getMinutes() || self.config.minDate.getSeconds());
	
			self.maxDateHasTime = self.config.maxDate && (self.config.maxDate.getHours() || self.config.maxDate.getMinutes() || self.config.maxDate.getSeconds());
	
			Object.defineProperty(self, "latestSelectedDateObj", {
				get: function get() {
					return self._selectedDateObj || self.selectedDates[self.selectedDates.length - 1];
				},
				set: function set(date) {
					self._selectedDateObj = date;
				}
			});
	
			if (!self.isMobile) {
				Object.defineProperty(self, "showTimeInput", {
					get: function get() {
						return self._showTimeInput;
					},
					set: function set(bool) {
						self._showTimeInput = bool;
						if (self.calendarContainer) toggleClass(self.calendarContainer, "showTimeInput", bool);
						positionCalendar();
					}
				});
			}
		}
	
		function setupHelperFunctions() {
			self.utils = {
				duration: {
					DAY: 86400000
				},
				getDaysinMonth: function getDaysinMonth(month, yr) {
					month = typeof month === "undefined" ? self.currentMonth : month;
	
					yr = typeof yr === "undefined" ? self.currentYear : yr;
	
					if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
	
					return self.l10n.daysInMonth[month];
				},
				monthToStr: function monthToStr(monthNumber, shorthand) {
					shorthand = typeof shorthand === "undefined" ? self.config.shorthandCurrentMonth : shorthand;
	
					return self.l10n.months[(shorthand ? "short" : "long") + "hand"][monthNumber];
				}
			};
		}
	
		/* istanbul ignore next */
		function setupFormats() {
			["D", "F", "J", "M", "W", "l"].forEach(function (f) {
				self.formats[f] = Flatpickr.prototype.formats[f].bind(self);
			});
	
			self.revFormat.F = Flatpickr.prototype.revFormat.F.bind(self);
			self.revFormat.M = Flatpickr.prototype.revFormat.M.bind(self);
		}
	
		function setupInputs() {
			self.input = self.config.wrap ? self.element.querySelector("[data-input]") : self.element;
	
			/* istanbul ignore next */
			if (!self.input) return console.warn("Error: invalid input element specified", self.input);
	
			self.input._type = self.input.type;
			self.input.type = "text";
	
			self.input.classList.add("flatpickr-input");
			self._input = self.input;
	
			if (self.config.altInput) {
				// replicate self.element
				self.altInput = createElement(self.input.nodeName, self.input.className + " " + self.config.altInputClass);
				self._input = self.altInput;
				self.altInput.placeholder = self.input.placeholder;
				self.altInput.disabled = self.input.disabled;
				self.altInput.type = "text";
				self.input.type = "hidden";
	
				if (!self.config.static && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
			}
	
			if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
	
			self._positionElement = self.config.positionElement || self._input;
		}
	
		function setupMobile() {
			var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
	
			self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
			self.mobileInput.step = "any";
			self.mobileInput.tabIndex = 1;
			self.mobileInput.type = inputType;
			self.mobileInput.disabled = self.input.disabled;
			self.mobileInput.placeholder = self.input.placeholder;
	
			self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";
	
			if (self.selectedDates.length) {
				self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
			}
	
			if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
	
			if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
	
			self.input.type = "hidden";
			if (self.config.altInput) self.altInput.type = "hidden";
	
			try {
				self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
			} catch (e) {
				//
			}
	
			self.mobileInput.addEventListener("change", function (e) {
				self.setDate(e.target.value, false, self.mobileFormatStr);
				triggerEvent("Change");
				triggerEvent("Close");
			});
		}
	
		function toggle() {
			if (self.isOpen) return self.close();
			self.open();
		}
	
		function triggerEvent(event, data) {
			var hooks = self.config["on" + event];
	
			if (hooks !== undefined && hooks.length > 0) {
				for (var i = 0; hooks[i] && i < hooks.length; i++) {
					hooks[i](self.selectedDates, self.input.value, self, data);
				}
			}
	
			if (event === "Change") {
				self.input.dispatchEvent(createEvent("change"));
	
				// many front-end frameworks bind to the input event
				self.input.dispatchEvent(createEvent("input"));
			}
		}
	
		/**
	  * Creates an Event, normalized across browsers
	  * @param {String} name the event name, e.g. "click"
	  * @return {Event} the created event
	  */
		function createEvent(name) {
			if (self._supportsEvents) return new Event(name, { bubbles: true });
	
			self._[name + "Event"] = document.createEvent("Event");
			self._[name + "Event"].initEvent(name, true, true);
			return self._[name + "Event"];
		}
	
		function isDateSelected(date) {
			for (var i = 0; i < self.selectedDates.length; i++) {
				if (compareDates(self.selectedDates[i], date) === 0) return "" + i;
			}
	
			return false;
		}
	
		function isDateInRange(date) {
			if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
			return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
		}
	
		function updateNavigationCurrentMonth() {
			if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
	
			self.currentMonthElement.textContent = self.utils.monthToStr(self.currentMonth) + " ";
			self.currentYearElement.value = self.currentYear;
	
			self._hidePrevMonthArrow = self.config.minDate && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
	
			self._hideNextMonthArrow = self.config.maxDate && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
		}
	
		/**
	  * Updates the values of inputs associated with the calendar
	  * @return {void}
	  */
		function updateValue(triggerChange) {
			if (!self.selectedDates.length) return self.clear(triggerChange);
	
			if (self.isMobile) {
				self.mobileInput.value = self.selectedDates.length ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
			}
	
			var joinChar = self.config.mode !== "range" ? "; " : self.l10n.rangeSeparator;
	
			self.input.value = self.selectedDates.map(function (dObj) {
				return self.formatDate(dObj, self.config.dateFormat);
			}).join(joinChar);
	
			if (self.config.altInput) {
				self.altInput.value = self.selectedDates.map(function (dObj) {
					return self.formatDate(dObj, self.config.altFormat);
				}).join(joinChar);
			}
			triggerEvent("ValueUpdate");
		}
	
		function mouseDelta(e) {
			return Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY));
		}
	
		function onMonthNavScroll(e) {
			e.preventDefault();
			var isYear = self.currentYearElement.parentNode.contains(e.target);
	
			if (e.target === self.currentMonthElement || isYear) {
	
				var delta = mouseDelta(e);
	
				if (isYear) {
					changeYear(self.currentYear + delta);
					e.target.value = self.currentYear;
				} else self.changeMonth(delta, true, false);
			}
		}
	
		function onMonthNavClick(e) {
			var isPrevMonth = self.prevMonthNav.contains(e.target);
			var isNextMonth = self.nextMonthNav.contains(e.target);
	
			if (isPrevMonth || isNextMonth) changeMonth(isPrevMonth ? -1 : 1);else if (e.target === self.currentYearElement) {
				e.preventDefault();
				self.currentYearElement.select();
			} else if (e.target.className === "arrowUp") self.changeYear(self.currentYear + 1);else if (e.target.className === "arrowDown") self.changeYear(self.currentYear - 1);
		}
	
		/**
	  * Creates an HTMLElement with given tag, class, and textual content
	  * @param {String} tag the HTML tag
	  * @param {String} className the new element's class name
	  * @param {String} content The new element's text content
	  * @return {HTMLElement} the created HTML element
	  */
		function createElement(tag, className, content) {
			var e = window.document.createElement(tag);
			className = className || "";
			content = content || "";
	
			e.className = className;
	
			if (content !== undefined) e.textContent = content;
	
			return e;
		}
	
		function arrayify(obj) {
			if (obj instanceof Array) return obj;
			return [obj];
		}
	
		function toggleClass(elem, className, bool) {
			if (bool) return elem.classList.add(className);
			elem.classList.remove(className);
		}
	
		/* istanbul ignore next */
		function debounce(func, wait, immediate) {
			var timeout = void 0;
			return function () {
				var context = this,
				    args = arguments;
				clearTimeout(timeout);
				timeout = setTimeout(function () {
					timeout = null;
					if (!immediate) func.apply(context, args);
				}, wait);
				if (immediate && !timeout) func.apply(context, args);
			};
		}
	
		/**
	  * Compute the difference in dates, measured in ms
	  * @param {Date} date1
	  * @param {Date} date2
	  * @param {Boolean} timeless whether to reset times of both dates to 00:00
	  * @return {Number} the difference in ms
	  */
		function compareDates(date1, date2, timeless) {
			if (!(date1 instanceof Date) || !(date2 instanceof Date)) return false;
	
			if (timeless !== false) {
				return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
			}
	
			return date1.getTime() - date2.getTime();
		}
	
		function timeWrapper(e) {
			e.preventDefault();
	
			var isKeyDown = e.type === "keydown",
			    isWheel = e.type === "wheel",
			    isIncrement = e.type === "increment",
			    input = e.target;
	
			if (self.amPM && e.target === self.amPM) return e.target.textContent = ["AM", "PM"][e.target.textContent === "AM" | 0];
	
			var min = Number(input.min),
			    max = Number(input.max),
			    step = Number(input.step),
			    curValue = parseInt(input.value, 10),
			    delta = e.delta || (!isKeyDown ? Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY)) || 0 : e.which === 38 ? 1 : -1);
	
			var newValue = curValue + step * delta;
	
			if (typeof input.value !== "undefined" && input.value.length === 2) {
				var isHourElem = input === self.hourElement,
				    isMinuteElem = input === self.minuteElement;
	
				if (newValue < min) {
					newValue = max + newValue + !isHourElem + (isHourElem && !self.amPM);
	
					if (isMinuteElem) incrementNumInput(null, -1, self.hourElement);
				} else if (newValue > max) {
					newValue = input === self.hourElement ? newValue - max - !self.amPM : min;
	
					if (isMinuteElem) incrementNumInput(null, 1, self.hourElement);
				}
	
				if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) self.amPM.textContent = self.amPM.textContent === "PM" ? "AM" : "PM";
	
				input.value = self.pad(newValue);
			}
		}
	
		init();
		return self;
	}
	
	/* istanbul ignore next */
	Flatpickr.defaultConfig = {
		mode: "single",
	
		position: "auto",
	
		animate: window.navigator.userAgent.indexOf("MSIE") === -1,
	
		/* if true, dates will be parsed, formatted, and displayed in UTC.
	 preloading date strings w/ timezones is recommended but not necessary */
		utc: false,
	
		// wrap: see https://chmln.github.io/flatpickr/examples/#flatpickr-external-elements
		wrap: false,
	
		// enables week numbers
		weekNumbers: false,
	
		// allow manual datetime input
		allowInput: false,
	
		/*
	 	clicking on input opens the date(time)picker.
	 	disable if you wish to open the calendar manually with .open()
	 */
		clickOpens: true,
	
		/*
	 	closes calendar after date selection,
	 	unless 'mode' is 'multiple' or enableTime is true
	 */
		closeOnSelect: true,
	
		// display time picker in 24 hour mode
		time_24hr: false,
	
		// enables the time picker functionality
		enableTime: false,
	
		// noCalendar: true will hide the calendar. use for a time picker along w/ enableTime
		noCalendar: false,
	
		// more date format chars at https://chmln.github.io/flatpickr/#dateformat
		dateFormat: "Y-m-d",
	
		// date format used in aria-label for days
		ariaDateFormat: "F j, Y",
	
		// altInput - see https://chmln.github.io/flatpickr/#altinput
		altInput: false,
	
		// the created altInput element will have this class.
		altInputClass: "form-control input",
	
		// same as dateFormat, but for altInput
		altFormat: "F j, Y", // defaults to e.g. June 10, 2016
	
		// defaultDate - either a datestring or a date object. used for datetimepicker"s initial value
		defaultDate: null,
	
		// the minimum date that user can pick (inclusive)
		minDate: null,
	
		// the maximum date that user can pick (inclusive)
		maxDate: null,
	
		// dateparser that transforms a given string to a date object
		parseDate: null,
	
		// dateformatter that transforms a given date object to a string, according to passed format
		formatDate: null,
	
		getWeek: function getWeek(givenDate) {
			var date = new Date(givenDate.getTime());
			var onejan = new Date(date.getFullYear(), 0, 1);
			return Math.ceil(((date - onejan) / 86400000 + onejan.getDay() + 1) / 7);
		},
	
	
		// see https://chmln.github.io/flatpickr/#disable
		enable: [],
	
		// see https://chmln.github.io/flatpickr/#disable
		disable: [],
	
		// display the short version of month names - e.g. Sep instead of September
		shorthandCurrentMonth: false,
	
		// displays calendar inline. see https://chmln.github.io/flatpickr/#inline-calendar
		inline: false,
	
		// position calendar inside wrapper and next to the input element
		// leave at false unless you know what you"re doing
		"static": false,
	
		// DOM node to append the calendar to in *static* mode
		appendTo: null,
	
		// code for previous/next icons. this is where you put your custom icon code e.g. fontawesome
		prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
		nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
	
		// enables seconds in the time picker
		enableSeconds: false,
	
		// step size used when scrolling/incrementing the hour element
		hourIncrement: 1,
	
		// step size used when scrolling/incrementing the minute element
		minuteIncrement: 5,
	
		// initial value in the hour element
		defaultHour: 12,
	
		// initial value in the minute element
		defaultMinute: 0,
	
		// disable native mobile datetime input support
		disableMobile: false,
	
		// default locale
		locale: "default",
	
		plugins: [],
	
		// called every time calendar is closed
		onClose: undefined, // function (dateObj, dateStr) {}
	
		// onChange callback when user selects a date or time
		onChange: undefined, // function (dateObj, dateStr) {}
	
		// called for every day element
		onDayCreate: undefined,
	
		// called every time the month is changed
		onMonthChange: undefined,
	
		// called every time calendar is opened
		onOpen: undefined, // function (dateObj, dateStr) {}
	
		// called after the configuration has been parsed
		onParseConfig: undefined,
	
		// called after calendar is ready
		onReady: undefined, // function (dateObj, dateStr) {}
	
		// called after input value updated
		onValueUpdate: undefined,
	
		// called every time the year is changed
		onYearChange: undefined,
	
		onKeyDown: undefined
	};
	
	/* istanbul ignore next */
	Flatpickr.l10ns = {
		en: {
			weekdays: {
				shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
				longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
			},
			months: {
				shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
			},
			daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
			firstDayOfWeek: 0,
			ordinal: function ordinal(nth) {
				var s = nth % 100;
				if (s > 3 && s < 21) return "th";
				switch (s % 10) {
					case 1:
						return "st";
					case 2:
						return "nd";
					case 3:
						return "rd";
					default:
						return "th";
				}
			},
			rangeSeparator: " to ",
			weekAbbreviation: "Wk",
			scrollTitle: "Scroll to increment",
			toggleTitle: "Click to toggle"
		}
	};
	
	Flatpickr.l10ns.default = Object.create(Flatpickr.l10ns.en);
	Flatpickr.localize = function (l10n) {
		return _extends(Flatpickr.l10ns.default, l10n || {});
	};
	Flatpickr.setDefaults = function (config) {
		return _extends(Flatpickr.defaultConfig, config || {});
	};
	
	Flatpickr.prototype = {
		formats: {
			// get the date in UTC
			Z: function Z(date) {
				return date.toISOString();
			},
	
			// weekday name, short, e.g. Thu
			D: function D(date) {
				return this.l10n.weekdays.shorthand[this.formats.w(date)];
			},
	
			// full month name e.g. January
			F: function F(date) {
				return this.utils.monthToStr(this.formats.n(date) - 1, false);
			},
	
			// padded hour 1-12
			G: function G(date) {
				return Flatpickr.prototype.pad(Flatpickr.prototype.formats.h(date));
			},
	
			// hours with leading zero e.g. 03
			H: function H(date) {
				return Flatpickr.prototype.pad(date.getHours());
			},
	
			// day (1-30) with ordinal suffix e.g. 1st, 2nd
			J: function J(date) {
				return date.getDate() + this.l10n.ordinal(date.getDate());
			},
	
			// AM/PM
			K: function K(date) {
				return date.getHours() > 11 ? "PM" : "AM";
			},
	
			// shorthand month e.g. Jan, Sep, Oct, etc
			M: function M(date) {
				return this.utils.monthToStr(date.getMonth(), true);
			},
	
			// seconds 00-59
			S: function S(date) {
				return Flatpickr.prototype.pad(date.getSeconds());
			},
	
			// unix timestamp
			U: function U(date) {
				return date.getTime() / 1000;
			},
	
			W: function W(date) {
				return this.config.getWeek(date);
			},
	
			// full year e.g. 2016
			Y: function Y(date) {
				return date.getFullYear();
			},
	
			// day in month, padded (01-30)
			d: function d(date) {
				return Flatpickr.prototype.pad(date.getDate());
			},
	
			// hour from 1-12 (am/pm)
			h: function h(date) {
				return date.getHours() % 12 ? date.getHours() % 12 : 12;
			},
	
			// minutes, padded with leading zero e.g. 09
			i: function i(date) {
				return Flatpickr.prototype.pad(date.getMinutes());
			},
	
			// day in month (1-30)
			j: function j(date) {
				return date.getDate();
			},
	
			// weekday name, full, e.g. Thursday
			l: function l(date) {
				return this.l10n.weekdays.longhand[date.getDay()];
			},
	
			// padded month number (01-12)
			m: function m(date) {
				return Flatpickr.prototype.pad(date.getMonth() + 1);
			},
	
			// the month number (1-12)
			n: function n(date) {
				return date.getMonth() + 1;
			},
	
			// seconds 0-59
			s: function s(date) {
				return date.getSeconds();
			},
	
			// number of the day of the week
			w: function w(date) {
				return date.getDay();
			},
	
			// last two digits of year e.g. 16 for 2016
			y: function y(date) {
				return String(date.getFullYear()).substring(2);
			}
		},
	
		/**
	  * Formats a given Date object into a string based on supplied format
	  * @param {Date} dateObj the date object
	  * @param {String} frmt a string composed of formatting tokens e.g. "Y-m-d"
	  * @return {String} The textual representation of the date e.g. 2017-02-03
	  */
		formatDate: function formatDate(dateObj, frmt) {
			var _this = this;
	
			if (this.config !== undefined && this.config.formatDate !== undefined) return this.config.formatDate(dateObj, frmt);
	
			return frmt.split("").map(function (c, i, arr) {
				return _this.formats[c] && arr[i - 1] !== "\\" ? _this.formats[c](dateObj) : c !== "\\" ? c : "";
			}).join("");
		},
	
	
		revFormat: {
			D: function D() {},
			F: function F(dateObj, monthName) {
				dateObj.setMonth(this.l10n.months.longhand.indexOf(monthName));
			},
			G: function G(dateObj, hour) {
				dateObj.setHours(parseFloat(hour));
			},
			H: function H(dateObj, hour) {
				dateObj.setHours(parseFloat(hour));
			},
			J: function J(dateObj, day) {
				dateObj.setDate(parseFloat(day));
			},
			K: function K(dateObj, amPM) {
				var hours = dateObj.getHours();
	
				if (hours !== 12) dateObj.setHours(hours % 12 + 12 * /pm/i.test(amPM));
			},
			M: function M(dateObj, shortMonth) {
				dateObj.setMonth(this.l10n.months.shorthand.indexOf(shortMonth));
			},
			S: function S(dateObj, seconds) {
				dateObj.setSeconds(seconds);
			},
			U: function U(dateObj, unixSeconds) {
				return new Date(parseFloat(unixSeconds) * 1000);
			},
	
			W: function W(dateObj, weekNumber) {
				weekNumber = parseInt(weekNumber);
				return new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0, 0);
			},
			Y: function Y(dateObj, year) {
				dateObj.setFullYear(year);
			},
			Z: function Z(dateObj, ISODate) {
				return new Date(ISODate);
			},
	
			d: function d(dateObj, day) {
				dateObj.setDate(parseFloat(day));
			},
			h: function h(dateObj, hour) {
				dateObj.setHours(parseFloat(hour));
			},
			i: function i(dateObj, minutes) {
				dateObj.setMinutes(parseFloat(minutes));
			},
			j: function j(dateObj, day) {
				dateObj.setDate(parseFloat(day));
			},
			l: function l() {},
			m: function m(dateObj, month) {
				dateObj.setMonth(parseFloat(month) - 1);
			},
			n: function n(dateObj, month) {
				dateObj.setMonth(parseFloat(month) - 1);
			},
			s: function s(dateObj, seconds) {
				dateObj.setSeconds(parseFloat(seconds));
			},
			w: function w() {},
			y: function y(dateObj, year) {
				dateObj.setFullYear(2000 + parseFloat(year));
			}
		},
	
		tokenRegex: {
			D: "(\\w+)",
			F: "(\\w+)",
			G: "(\\d\\d|\\d)",
			H: "(\\d\\d|\\d)",
			J: "(\\d\\d|\\d)\\w+",
			K: "(\\w+)",
			M: "(\\w+)",
			S: "(\\d\\d|\\d)",
			U: "(.+)",
			W: "(\\d\\d|\\d)",
			Y: "(\\d{4})",
			Z: "(.+)",
			d: "(\\d\\d|\\d)",
			h: "(\\d\\d|\\d)",
			i: "(\\d\\d|\\d)",
			j: "(\\d\\d|\\d)",
			l: "(\\w+)",
			m: "(\\d\\d|\\d)",
			n: "(\\d\\d|\\d)",
			s: "(\\d\\d|\\d)",
			w: "(\\d\\d|\\d)",
			y: "(\\d{2})"
		},
	
		pad: function pad(number) {
			return ("0" + number).slice(-2);
		},
	
		/**
	  * Parses a date(+time) string into a Date object
	  * @param {String} date the date string, e.g. 2017-02-03 14:45
	  * @param {String} givenFormat the date format, e.g. Y-m-d H:i
	  * @param {Boolean} timeless whether to reset the time of Date object
	  * @return {Date} the parsed Date object
	  */
		parseDate: function parseDate(date, givenFormat, timeless) {
			if (!date) return null;
	
			var date_orig = date;
	
			if (date instanceof Date) {
				date = new Date(date.getTime()); // create a copy
				date.fp_isUTC = date_orig.fp_isUTC;
			} else if (date.toFixed !== undefined) // timestamp
				date = new Date(date);else {
				// date string
				var format = givenFormat || (this.config || Flatpickr.defaultConfig).dateFormat;
				date = String(date).trim();
	
				if (date === "today") {
					date = new Date();
					timeless = true;
				} else if (/Z$/.test(date) || /GMT$/.test(date)) // datestrings w/ timezone
					date = new Date(date);else if (this.config && this.config.parseDate) date = this.config.parseDate(date, format);else {
					var parsedDate = !this.config || !this.config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
	
					var matched = void 0;
	
					for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
						var token = format[i];
						var isBackSlash = token === "\\";
						var escaped = format[i - 1] === "\\" || isBackSlash;
	
						if (this.tokenRegex[token] && !escaped) {
							regexStr += this.tokenRegex[token];
							var match = new RegExp(regexStr).exec(date);
							if (match && (matched = true)) {
								parsedDate = this.revFormat[token](parsedDate, match[++matchIndex]) || parsedDate;
							}
						} else if (!isBackSlash) regexStr += "."; // don't really care
					}
	
					date = matched ? parsedDate : null;
				}
			}
	
			/* istanbul ignore next */
			if (!(date instanceof Date)) {
				console.warn("flatpickr: invalid date " + date_orig);
				console.info(this.element);
				return null;
			}
	
			if (this.config && this.config.utc && !date.fp_isUTC) date = date.fp_toUTC();
	
			if (timeless === true) date.setHours(0, 0, 0, 0);
	
			return date;
		}
	};
	
	/* istanbul ignore next */
	function _flatpickr(nodeList, config) {
		var nodes = Array.prototype.slice.call(nodeList); // static list
		var instances = [];
		for (var i = 0; i < nodes.length; i++) {
			try {
				nodes[i]._flatpickr = new Flatpickr(nodes[i], config || {});
				instances.push(nodes[i]._flatpickr);
			} catch (e) {
				console.warn(e, e.stack);
			}
		}
	
		return instances.length === 1 ? instances[0] : instances;
	}
	
	/* istanbul ignore next */
	if (typeof HTMLElement !== "undefined") {
		// browser env
		HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
			return _flatpickr(this, config);
		};
	
		HTMLElement.prototype.flatpickr = function (config) {
			return _flatpickr([this], config);
		};
	}
	
	/* istanbul ignore next */
	function flatpickr(selector, config) {
		return _flatpickr(window.document.querySelectorAll(selector), config);
	}
	
	/* istanbul ignore next */
	if (typeof jQuery !== "undefined") {
		jQuery.fn.flatpickr = function (config) {
			return _flatpickr(this, config);
		};
	}
	
	Date.prototype.fp_incr = function (days) {
		return new Date(this.getFullYear(), this.getMonth(), this.getDate() + parseInt(days, 10));
	};
	
	Date.prototype.fp_isUTC = false;
	Date.prototype.fp_toUTC = function () {
		var newDate = new Date(this.getUTCFullYear(), this.getUTCMonth(), this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds());
	
		newDate.fp_isUTC = true;
		return newDate;
	};
	
	if (true) module.exports = Flatpickr;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	/* Mandarin locals for flatpickr */
	var Flatpickr = Flatpickr || {l10ns: {}};
	Flatpickr.l10ns.zh = {};
	
	Flatpickr.l10ns.zh.weekdays = {
		shorthand: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
		longhand: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
	};
	
	Flatpickr.l10ns.zh.months = {
		shorthand: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
		longhand: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
	};
	
	Flatpickr.l10ns.zh.rangeSeparator = " 至 ";
	Flatpickr.l10ns.zh.weekAbbreviation = "周";
	Flatpickr.l10ns.zh.scrollTitle = "滚动切换";
	Flatpickr.l10ns.zh.toggleTitle = "点击切换 12/24 小时时制";
	
	if (true) 
		module.exports = Flatpickr.l10ns;
	


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Jump = factory());
	}(this, (function () { 'use strict';
	
	// Robert Penner's easeInOutQuad
	
	// find the rest of his easing functions here: http://robertpenner.com/easing/
	// find them exported for ES6 consumption here: https://github.com/jaxgeller/ez.js
	
	var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
	  t /= d / 2;
	  if (t < 1) return c / 2 * t * t + b;
	  t--;
	  return -c / 2 * (t * (t - 2) - 1) + b;
	};
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};
	
	var jumper = function jumper() {
	  // private variable cache
	  // no variables are created during a jump, preventing memory leaks
	
	  var element = void 0; // element to scroll to                   (node)
	
	  var start = void 0; // where scroll starts                    (px)
	  var stop = void 0; // where scroll stops                     (px)
	
	  var offset = void 0; // adjustment from the stop position      (px)
	  var easing = void 0; // easing function                        (function)
	  var a11y = void 0; // accessibility support flag             (boolean)
	
	  var distance = void 0; // distance of scroll                     (px)
	  var duration = void 0; // scroll duration                        (ms)
	
	  var timeStart = void 0; // time scroll started                    (ms)
	  var timeElapsed = void 0; // time spent scrolling thus far          (ms)
	
	  var next = void 0; // next scroll position                   (px)
	
	  var callback = void 0; // to call when done scrolling            (function)
	
	  // scroll position helper
	
	  function location() {
	    return window.scrollY || window.pageYOffset;
	  }
	
	  // element offset helper
	
	  function top(element) {
	    return element.getBoundingClientRect().top + start;
	  }
	
	  // rAF loop helper
	
	  function loop(timeCurrent) {
	    // store time scroll started, if not started already
	    if (!timeStart) {
	      timeStart = timeCurrent;
	    }
	
	    // determine time spent scrolling so far
	    timeElapsed = timeCurrent - timeStart;
	
	    // calculate next scroll position
	    next = easing(timeElapsed, start, distance, duration);
	
	    // scroll to it
	    window.scrollTo(0, next);
	
	    // check progress
	    timeElapsed < duration ? window.requestAnimationFrame(loop) // continue scroll loop
	    : done(); // scrolling is done
	  }
	
	  // scroll finished helper
	
	  function done() {
	    // account for rAF time rounding inaccuracies
	    window.scrollTo(0, start + distance);
	
	    // if scrolling to an element, and accessibility is enabled
	    if (element && a11y) {
	      // add tabindex indicating programmatic focus
	      element.setAttribute('tabindex', '-1');
	
	      // focus the element
	      element.focus();
	    }
	
	    // if it exists, fire the callback
	    if (typeof callback === 'function') {
	      callback();
	    }
	
	    // reset time for next jump
	    timeStart = false;
	  }
	
	  // API
	
	  function jump(target) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    // resolve options, or use defaults
	    duration = options.duration || 1000;
	    offset = options.offset || 0;
	    callback = options.callback; // "undefined" is a suitable default, and won't be called
	    easing = options.easing || easeInOutQuad;
	    a11y = options.a11y || false;
	
	    // cache starting position
	    start = location();
	
	    // resolve target
	    switch (typeof target === 'undefined' ? 'undefined' : _typeof(target)) {
	      // scroll from current position
	      case 'number':
	        element = undefined; // no element to scroll to
	        a11y = false; // make sure accessibility is off
	        stop = start + target;
	        break;
	
	      // scroll to element (node)
	      // bounding rect is relative to the viewport
	      case 'object':
	        element = target;
	        stop = top(element);
	        break;
	
	      // scroll to element (selector)
	      // bounding rect is relative to the viewport
	      case 'string':
	        element = document.querySelector(target);
	        stop = top(element);
	        break;
	    }
	
	    // resolve scroll distance, accounting for offset
	    distance = stop - start + offset;
	
	    // resolve duration
	    switch (_typeof(options.duration)) {
	      // number in ms
	      case 'number':
	        duration = options.duration;
	        break;
	
	      // function passed the distance of the scroll
	      case 'function':
	        duration = options.duration(distance);
	        break;
	    }
	
	    // start the loop
	    window.requestAnimationFrame(loop);
	  }
	
	  // expose only the jump method
	  return jump;
	};
	
	// export singleton
	
	var singleton = jumper();
	
	return singleton;
	
	})));


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(6),
	    root = __webpack_require__(1);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');
	
	module.exports = DataView;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(242),
	    hashDelete = __webpack_require__(243),
	    hashGet = __webpack_require__(244),
	    hashHas = __webpack_require__(245),
	    hashSet = __webpack_require__(246);
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	module.exports = Hash;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(6),
	    root = __webpack_require__(1);
	
	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');
	
	module.exports = Promise;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(6),
	    root = __webpack_require__(1);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(49),
	    setCacheAdd = __webpack_require__(269),
	    setCacheHas = __webpack_require__(270);
	
	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values == null ? 0 : values.length;
	
	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}
	
	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
	
	module.exports = SetCache;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(1);
	
	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;
	
	module.exports = Uint8Array;


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(6),
	    root = __webpack_require__(1);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;


/***/ }),
/* 198 */
/***/ (function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	module.exports = apply;


/***/ }),
/* 199 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = arrayFilter;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(224),
	    isArguments = __webpack_require__(53),
	    isArray = __webpack_require__(2),
	    isBuffer = __webpack_require__(79),
	    isIndex = __webpack_require__(50),
	    isTypedArray = __webpack_require__(81);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = arrayLikeKeys;


/***/ }),
/* 201 */
/***/ (function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(205),
	    createBaseEach = __webpack_require__(230);
	
	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);
	
	module.exports = baseEach;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(69),
	    isFlattenable = __webpack_require__(247);
	
	/**
	 * The base implementation of `_.flatten` with support for restricting flattening.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {number} depth The maximum recursion depth.
	 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, depth, predicate, isStrict, result) {
	  var index = -1,
	      length = array.length;
	
	  predicate || (predicate = isFlattenable);
	  result || (result = []);
	
	  while (++index < length) {
	    var value = array[index];
	    if (depth > 0 && predicate(value)) {
	      if (depth > 1) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, depth - 1, predicate, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = baseFlatten;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(231);
	
	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(204),
	    keys = __webpack_require__(55);
	
	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}
	
	module.exports = baseForOwn;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(69),
	    isArray = __webpack_require__(2);
	
	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	
	module.exports = baseGetAllKeys;


/***/ }),
/* 207 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}
	
	module.exports = baseHasIn;


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(16),
	    isObjectLike = __webpack_require__(17);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}
	
	module.exports = baseIsArguments;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(67),
	    equalArrays = __webpack_require__(74),
	    equalByTag = __webpack_require__(233),
	    equalObjects = __webpack_require__(234),
	    getTag = __webpack_require__(239),
	    isArray = __webpack_require__(2),
	    isBuffer = __webpack_require__(79),
	    isTypedArray = __webpack_require__(81);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = objIsArr ? arrayTag : getTag(object),
	      othTag = othIsArr ? arrayTag : getTag(other);
	
	  objTag = objTag == argsTag ? objectTag : objTag;
	  othTag = othTag == argsTag ? objectTag : othTag;
	
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && isBuffer(object)) {
	    if (!isBuffer(other)) {
	      return false;
	    }
	    objIsArr = true;
	    objIsObj = false;
	  }
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
	      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
	  }
	  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;
	
	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
	}
	
	module.exports = baseIsEqualDeep;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(67),
	    baseIsEqual = __webpack_require__(71);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	module.exports = baseIsMatch;


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(80),
	    isMasked = __webpack_require__(250),
	    isObject = __webpack_require__(32),
	    toSource = __webpack_require__(78);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = baseIsNative;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(16),
	    isLength = __webpack_require__(54),
	    isObjectLike = __webpack_require__(17);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}
	
	module.exports = baseIsTypedArray;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(216),
	    baseMatchesProperty = __webpack_require__(217),
	    identity = __webpack_require__(30),
	    isArray = __webpack_require__(2),
	    property = __webpack_require__(284);
	
	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}
	
	module.exports = baseIteratee;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(251),
	    nativeKeys = __webpack_require__(264);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeys;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(202),
	    isArrayLike = __webpack_require__(31);
	
	/**
	 * The base implementation of `_.map` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function baseMap(collection, iteratee) {
	  var index = -1,
	      result = isArrayLike(collection) ? Array(collection.length) : [];
	
	  baseEach(collection, function(value, key, collection) {
	    result[++index] = iteratee(value, key, collection);
	  });
	  return result;
	}
	
	module.exports = baseMap;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(210),
	    getMatchData = __webpack_require__(236),
	    matchesStrictComparable = __webpack_require__(77);
	
	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}
	
	module.exports = baseMatches;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(71),
	    get = __webpack_require__(281),
	    hasIn = __webpack_require__(282),
	    isKey = __webpack_require__(51),
	    isStrictComparable = __webpack_require__(76),
	    matchesStrictComparable = __webpack_require__(77),
	    toKey = __webpack_require__(29);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
	  };
	}
	
	module.exports = baseMatchesProperty;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(68),
	    baseIteratee = __webpack_require__(213),
	    baseMap = __webpack_require__(215),
	    baseSortBy = __webpack_require__(223),
	    baseUnary = __webpack_require__(72),
	    compareMultiple = __webpack_require__(228),
	    identity = __webpack_require__(30);
	
	/**
	 * The base implementation of `_.orderBy` without param guards.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	 * @param {string[]} orders The sort orders of `iteratees`.
	 * @returns {Array} Returns the new sorted array.
	 */
	function baseOrderBy(collection, iteratees, orders) {
	  var index = -1;
	  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));
	
	  var result = baseMap(collection, function(value, key, collection) {
	    var criteria = arrayMap(iteratees, function(iteratee) {
	      return iteratee(value);
	    });
	    return { 'criteria': criteria, 'index': ++index, 'value': value };
	  });
	
	  return baseSortBy(result, function(object, other) {
	    return compareMultiple(object, other, orders);
	  });
	}
	
	module.exports = baseOrderBy;


/***/ }),
/* 219 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(70);
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}
	
	module.exports = basePropertyDeep;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(30),
	    overRest = __webpack_require__(268),
	    setToString = __webpack_require__(272);
	
	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}
	
	module.exports = baseRest;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(280),
	    defineProperty = __webpack_require__(232),
	    identity = __webpack_require__(30);
	
	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};
	
	module.exports = baseSetToString;


/***/ }),
/* 223 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.sortBy` which uses `comparer` to define the
	 * sort order of `array` and replaces criteria objects with their corresponding
	 * values.
	 *
	 * @private
	 * @param {Array} array The array to sort.
	 * @param {Function} comparer The function to define sort order.
	 * @returns {Array} Returns `array`.
	 */
	function baseSortBy(array, comparer) {
	  var length = array.length;
	
	  array.sort(comparer);
	  while (length--) {
	    array[length] = array[length].value;
	  }
	  return array;
	}
	
	module.exports = baseSortBy;


/***/ }),
/* 224 */
/***/ (function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(15),
	    arrayMap = __webpack_require__(68),
	    isArray = __webpack_require__(2),
	    isSymbol = __webpack_require__(33);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	module.exports = baseToString;


/***/ }),
/* 226 */
/***/ (function(module, exports) {

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}
	
	module.exports = cacheHas;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(33);
	
	/**
	 * Compares values to sort them in ascending order.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {number} Returns the sort order indicator for `value`.
	 */
	function compareAscending(value, other) {
	  if (value !== other) {
	    var valIsDefined = value !== undefined,
	        valIsNull = value === null,
	        valIsReflexive = value === value,
	        valIsSymbol = isSymbol(value);
	
	    var othIsDefined = other !== undefined,
	        othIsNull = other === null,
	        othIsReflexive = other === other,
	        othIsSymbol = isSymbol(other);
	
	    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
	        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
	        (valIsNull && othIsDefined && othIsReflexive) ||
	        (!valIsDefined && othIsReflexive) ||
	        !valIsReflexive) {
	      return 1;
	    }
	    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
	        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
	        (othIsNull && valIsDefined && valIsReflexive) ||
	        (!othIsDefined && valIsReflexive) ||
	        !othIsReflexive) {
	      return -1;
	    }
	  }
	  return 0;
	}
	
	module.exports = compareAscending;


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	var compareAscending = __webpack_require__(227);
	
	/**
	 * Used by `_.orderBy` to compare multiple properties of a value to another
	 * and stable sort them.
	 *
	 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
	 * specify an order of "desc" for descending or "asc" for ascending sort order
	 * of corresponding values.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {boolean[]|string[]} orders The order to sort by for each property.
	 * @returns {number} Returns the sort order indicator for `object`.
	 */
	function compareMultiple(object, other, orders) {
	  var index = -1,
	      objCriteria = object.criteria,
	      othCriteria = other.criteria,
	      length = objCriteria.length,
	      ordersLength = orders.length;
	
	  while (++index < length) {
	    var result = compareAscending(objCriteria[index], othCriteria[index]);
	    if (result) {
	      if (index >= ordersLength) {
	        return result;
	      }
	      var order = orders[index];
	      return result * (order == 'desc' ? -1 : 1);
	    }
	  }
	  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
	  // that causes it, under certain circumstances, to provide the same value for
	  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
	  // for more details.
	  //
	  // This also ensures a stable sort in V8 and other engines.
	  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
	  return object.index - other.index;
	}
	
	module.exports = compareMultiple;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(1);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(31);
	
	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);
	
	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}
	
	module.exports = createBaseEach;


/***/ }),
/* 231 */
/***/ (function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;
	
	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(6);
	
	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());
	
	module.exports = defineProperty;


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(15),
	    Uint8Array = __webpack_require__(196),
	    eq = __webpack_require__(52),
	    equalArrays = __webpack_require__(74),
	    mapToArray = __webpack_require__(262),
	    setToArray = __webpack_require__(271);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1,
	    COMPARE_UNORDERED_FLAG = 2;
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;
	
	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;
	
	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');
	
	    case mapTag:
	      var convert = mapToArray;
	
	    case setTag:
	      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
	      convert || (convert = setToArray);
	
	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= COMPARE_UNORDERED_FLAG;
	
	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
	      stack['delete'](object);
	      return result;
	
	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

	var getAllKeys = __webpack_require__(235);
	
	/** Used to compose bitmasks for value comparisons. */
	var COMPARE_PARTIAL_FLAG = 1;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
	  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
	      objProps = getAllKeys(object),
	      objLength = objProps.length,
	      othProps = getAllKeys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);
	
	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];
	
	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}
	
	module.exports = equalObjects;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(206),
	    getSymbols = __webpack_require__(238),
	    keys = __webpack_require__(55);
	
	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}
	
	module.exports = getAllKeys;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(76),
	    keys = __webpack_require__(55);
	
	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;
	
	  while (length--) {
	    var key = result[length],
	        value = object[key];
	
	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}
	
	module.exports = getMatchData;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(15);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(199),
	    stubArray = __webpack_require__(286);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	
	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};
	
	module.exports = getSymbols;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(191),
	    Map = __webpack_require__(48),
	    Promise = __webpack_require__(193),
	    Set = __webpack_require__(194),
	    WeakMap = __webpack_require__(197),
	    baseGetTag = __webpack_require__(16),
	    toSource = __webpack_require__(78);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';
	
	var dataViewTag = '[object DataView]';
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	module.exports = getTag;


/***/ }),
/* 240 */
/***/ (function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	module.exports = getValue;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(73),
	    isArguments = __webpack_require__(53),
	    isArray = __webpack_require__(2),
	    isIndex = __webpack_require__(50),
	    isLength = __webpack_require__(54),
	    toKey = __webpack_require__(29);
	
	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = castPath(path, object);
	
	  var index = -1,
	      length = path.length,
	      result = false;
	
	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object == null ? 0 : object.length;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isArguments(object));
	}
	
	module.exports = hasPath;


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(28);
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}
	
	module.exports = hashClear;


/***/ }),
/* 243 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = hashDelete;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(28);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	module.exports = hashGet;


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(28);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}
	
	module.exports = hashHas;


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(28);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	module.exports = hashSet;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(15),
	    isArguments = __webpack_require__(53),
	    isArray = __webpack_require__(2);
	
	/** Built-in value references. */
	var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;
	
	/**
	 * Checks if `value` is a flattenable `arguments` object or array.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	 */
	function isFlattenable(value) {
	  return isArray(value) || isArguments(value) ||
	    !!(spreadableSymbol && value && value[spreadableSymbol]);
	}
	
	module.exports = isFlattenable;


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(52),
	    isArrayLike = __webpack_require__(31),
	    isIndex = __webpack_require__(50),
	    isObject = __webpack_require__(32);
	
	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;


/***/ }),
/* 249 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	module.exports = isKeyable;


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(229);
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	module.exports = isMasked;


/***/ }),
/* 251 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;


/***/ }),
/* 252 */
/***/ (function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}
	
	module.exports = listCacheClear;


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(26);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}
	
	module.exports = listCacheDelete;


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(26);
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	module.exports = listCacheGet;


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(26);
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	module.exports = listCacheHas;


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(26);
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	module.exports = listCacheSet;


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(192),
	    ListCache = __webpack_require__(25),
	    Map = __webpack_require__(48);
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	module.exports = mapCacheClear;


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(27);
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = mapCacheDelete;


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(27);
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	module.exports = mapCacheGet;


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(27);
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	module.exports = mapCacheHas;


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(27);
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;
	
	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}
	
	module.exports = mapCacheSet;


/***/ }),
/* 262 */
/***/ (function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	module.exports = mapToArray;


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(283);
	
	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;
	
	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });
	
	  var cache = result.cache;
	  return result;
	}
	
	module.exports = memoizeCapped;


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(267);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(75);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;
	
	    if (types) {
	      return types;
	    }
	
	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	module.exports = nodeUtil;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(82)(module)))

/***/ }),
/* 266 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ }),
/* 267 */
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(198);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}
	
	module.exports = overRest;


/***/ }),
/* 269 */
/***/ (function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}
	
	module.exports = setCacheAdd;


/***/ }),
/* 270 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}
	
	module.exports = setCacheHas;


/***/ }),
/* 271 */
/***/ (function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	module.exports = setToArray;


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(222),
	    shortOut = __webpack_require__(273);
	
	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);
	
	module.exports = setToString;


/***/ }),
/* 273 */
/***/ (function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;
	
	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;
	
	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);
	
	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}
	
	module.exports = shortOut;


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(25);
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}
	
	module.exports = stackClear;


/***/ }),
/* 275 */
/***/ (function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);
	
	  this.size = data.size;
	  return result;
	}
	
	module.exports = stackDelete;


/***/ }),
/* 276 */
/***/ (function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	module.exports = stackGet;


/***/ }),
/* 277 */
/***/ (function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	module.exports = stackHas;


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(25),
	    Map = __webpack_require__(48),
	    MapCache = __webpack_require__(49);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}
	
	module.exports = stackSet;


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(263);
	
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (string.charCodeAt(0) === 46 /* . */) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, subString) {
	    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});
	
	module.exports = stringToPath;


/***/ }),
/* 280 */
/***/ (function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}
	
	module.exports = constant;


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(70);
	
	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}
	
	module.exports = get;


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(207),
	    hasPath = __webpack_require__(241);
	
	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}
	
	module.exports = hasIn;


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(49);
	
	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}
	
	// Expose `MapCache`.
	memoize.Cache = MapCache;
	
	module.exports = memoize;


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(219),
	    basePropertyDeep = __webpack_require__(220),
	    isKey = __webpack_require__(51),
	    toKey = __webpack_require__(29);
	
	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}
	
	module.exports = property;


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

	var baseFlatten = __webpack_require__(203),
	    baseOrderBy = __webpack_require__(218),
	    baseRest = __webpack_require__(221),
	    isIterateeCall = __webpack_require__(248);
	
	/**
	 * Creates an array of elements, sorted in ascending order by the results of
	 * running each element in a collection thru each iteratee. This method
	 * performs a stable sort, that is, it preserves the original sort order of
	 * equal elements. The iteratees are invoked with one argument: (value).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {...(Function|Function[])} [iteratees=[_.identity]]
	 *  The iteratees to sort by.
	 * @returns {Array} Returns the new sorted array.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'fred',   'age': 48 },
	 *   { 'user': 'barney', 'age': 36 },
	 *   { 'user': 'fred',   'age': 40 },
	 *   { 'user': 'barney', 'age': 34 }
	 * ];
	 *
	 * _.sortBy(users, [function(o) { return o.user; }]);
	 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	 *
	 * _.sortBy(users, ['user', 'age']);
	 * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
	 */
	var sortBy = baseRest(function(collection, iteratees) {
	  if (collection == null) {
	    return [];
	  }
	  var length = iteratees.length;
	  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
	    iteratees = [];
	  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
	    iteratees = [iteratees[0]];
	  }
	  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
	});
	
	module.exports = sortBy;


/***/ }),
/* 286 */
/***/ (function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}
	
	module.exports = stubArray;


/***/ }),
/* 287 */
/***/ (function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(225);
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	module.exports = toString;


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * @fileOverview Kickass library to create and place poppers near their reference elements.
	 * @version {{version}}
	 * @license
	 * Copyright (c) 2016 Federico Zivolo and contributors
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 * SOFTWARE.
	 */
	
	//
	// Cross module loader
	// Supported: Node, AMD, Browser globals
	//
	;(function (root, factory) {
	    if (true) {
	        // AMD. Register as an anonymous module.
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module === 'object' && module.exports) {
	        // Node. Does not work with strict CommonJS, but
	        // only CommonJS-like environments that support module.exports,
	        // like Node.
	        module.exports = factory();
	    } else {
	        // Browser globals (root is window)
	        root.Popper = factory();
	    }
	}(this, function () {
	
	    'use strict';
	
	    var root = window;
	
	    // default options
	    var DEFAULTS = {
	        // placement of the popper
	        placement: 'bottom',
	
	        gpuAcceleration: true,
	
	        // shift popper from its origin by the given amount of pixels (can be negative)
	        offset: 0,
	
	        // the element which will act as boundary of the popper
	        boundariesElement: 'viewport',
	
	        // amount of pixel used to define a minimum distance between the boundaries and the popper
	        boundariesPadding: 5,
	
	        // popper will try to prevent overflow following this order,
	        // by default, then, it could overflow on the left and on top of the boundariesElement
	        preventOverflowOrder: ['left', 'right', 'top', 'bottom'],
	
	        // the behavior used by flip to change the placement of the popper
	        flipBehavior: 'flip',
	
	        arrowElement: '[x-arrow]',
	
	        // list of functions used to modify the offsets before they are applied to the popper
	        modifiers: [ 'shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle'],
	
	        modifiersIgnored: [],
	    };
	
	    /**
	     * Create a new Popper.js instance
	     * @constructor Popper
	     * @param {HTMLElement} reference - The reference element used to position the popper
	     * @param {HTMLElement|Object} popper
	     *      The HTML element used as popper, or a configuration used to generate the popper.
	     * @param {String} [popper.tagName='div'] The tag name of the generated popper.
	     * @param {Array} [popper.classNames=['popper']] Array of classes to apply to the generated popper.
	     * @param {Array} [popper.attributes] Array of attributes to apply, specify `attr:value` to assign a value to it.
	     * @param {HTMLElement|String} [popper.parent=window.document.body] The parent element, given as HTMLElement or as query string.
	     * @param {String} [popper.content=''] The content of the popper, it can be text, html, or node; if it is not text, set `contentType` to `html` or `node`.
	     * @param {String} [popper.contentType='text'] If `html`, the `content` will be parsed as HTML. If `node`, it will be appended as-is.
	     * @param {String} [popper.arrowTagName='div'] Same as `popper.tagName` but for the arrow element.
	     * @param {Array} [popper.arrowClassNames='popper__arrow'] Same as `popper.classNames` but for the arrow element.
	     * @param {String} [popper.arrowAttributes=['x-arrow']] Same as `popper.attributes` but for the arrow element.
	     * @param {Object} options
	     * @param {String} [options.placement=bottom]
	     *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -right),
	     *      left(-start, -end)`
	     *
	     * @param {HTMLElement|String} [options.arrowElement='[x-arrow]']
	     *      The DOM Node used as arrow for the popper, or a CSS selector used to get the DOM node. It must be child of
	     *      its parent Popper. Popper.js will apply to the given element the style required to align the arrow with its
	     *      reference element.
	     *      By default, it will look for a child node of the popper with the `x-arrow` attribute.
	     *
	     * @param {Boolean} [options.gpuAcceleration=true]
	     *      When this property is set to true, the popper position will be applied using CSS3 translate3d, allowing the
	     *      browser to use the GPU to accelerate the rendering.
	     *      If set to false, the popper will be placed using `top` and `left` properties, not using the GPU.
	     *
	     * @param {Number} [options.offset=0]
	     *      Amount of pixels the popper will be shifted (can be negative).
	     *
	     * @param {String|Element} [options.boundariesElement='viewport']
	     *      The element which will define the boundaries of the popper position, the popper will never be placed outside
	     *      of the defined boundaries (except if `keepTogether` is enabled)
	     *
	     * @param {Number} [options.boundariesPadding=5]
	     *      Additional padding for the boundaries
	     *
	     * @param {Array} [options.preventOverflowOrder=['left', 'right', 'top', 'bottom']]
	     *      Order used when Popper.js tries to avoid overflows from the boundaries, they will be checked in order,
	     *      this means that the last ones will never overflow
	     *
	     * @param {String|Array} [options.flipBehavior='flip']
	     *      The behavior used by the `flip` modifier to change the placement of the popper when the latter is trying to
	     *      overlap its reference element. Defining `flip` as value, the placement will be flipped on
	     *      its axis (`right - left`, `top - bottom`).
	     *      You can even pass an array of placements (eg: `['right', 'left', 'top']` ) to manually specify
	     *      how alter the placement when a flip is needed. (eg. in the above example, it would first flip from right to left,
	     *      then, if even in its new placement, the popper is overlapping its reference element, it will be moved to top)
	     *
	     * @param {Array} [options.modifiers=[ 'shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle']]
	     *      List of functions used to modify the data before they are applied to the popper, add your custom functions
	     *      to this array to edit the offsets and placement.
	     *      The function should reflect the @params and @returns of preventOverflow
	     *
	     * @param {Array} [options.modifiersIgnored=[]]
	     *      Put here any built-in modifier name you want to exclude from the modifiers list
	     *      The function should reflect the @params and @returns of preventOverflow
	     *
	     * @param {Boolean} [options.removeOnDestroy=false]
	     *      Set to true if you want to automatically remove the popper when you call the `destroy` method.
	     */
	    function Popper(reference, popper, options) {
	        this._reference = reference.jquery ? reference[0] : reference;
	        this.state = { onCreateCalled: false };
	
	        // if the popper variable is a configuration object, parse it to generate an HTMLElement
	        // generate a default popper if is not defined
	        var isNotDefined = typeof popper === 'undefined' || popper === null;
	        var isConfig = popper && Object.prototype.toString.call(popper) === '[object Object]';
	        if (isNotDefined || isConfig) {
	            this._popper = this.parse(isConfig ? popper : {});
	        }
	        // otherwise, use the given HTMLElement as popper
	        else {
	            this._popper = popper.jquery ? popper[0] : popper;
	        }
	
	        // with {} we create a new object with the options inside it
	        this._options = Object.assign({}, DEFAULTS, options);
	
	        // refactoring modifiers' list
	        this._options.modifiers = this._options.modifiers.map(function(modifier){
	            // remove ignored modifiers
	            if (this._options.modifiersIgnored.indexOf(modifier) !== -1) return;
	
	            // set the x-placement attribute before everything else because it could be used to add margins to the popper
	            // margins needs to be calculated to get the correct popper offsets
	            if (modifier === 'applyStyle') {
	                this._popper.setAttribute('x-placement', this._options.placement);
	            }
	
	            // return predefined modifier identified by string or keep the custom one
	            return this.modifiers[modifier] || modifier;
	        }.bind(this));
	
	        // make sure to apply the popper position before any computation
	        this.state.position = this._getPosition(this._popper, this._reference);
	        setStyle(this._popper, { position: this.state.position});
	
	        // determine how we should set the origin of offsets
	        this.state.isParentTransformed = this._getIsParentTransformed(this._popper);
	
	        // fire the first update to position the popper in the right place
	        this.update();
	
	        // setup event listeners, they will take care of update the position in specific situations
	        this._setupEventListeners();
	        return this;
	    }
	
	
	    //
	    // Methods
	    //
	    /**
	     * Destroy the popper
	     * @method
	     * @memberof Popper
	     */
	    Popper.prototype.destroy = function() {
	        this._popper.removeAttribute('x-placement');
	        this._popper.style.left = '';
	        this._popper.style.position = '';
	        this._popper.style.top = '';
	        this._popper.style[getSupportedPropertyName('transform')] = '';
	        this._removeEventListeners();
	
	        // remove the popper if user explicity asked for the deletion on destroy
	        if (this._options.removeOnDestroy) {
	            this._popper.parentNode.removeChild(this._popper);
	        }
	        return this;
	    };
	
	    /**
	     * Updates the position of the popper, computing the new offsets and applying the new style
	     * @method
	     * @memberof Popper
	     */
	    Popper.prototype.update = function() {
	        var data = { instance: this, styles: {} };
	
	        // make sure to apply the popper position before any computation
	        this.state.position = this._getPosition(this._popper, this._reference);
	        setStyle(this._popper, { position: this.state.position});
	
	        // to avoid useless computations we throttle the popper position refresh to 60fps
	        root.requestAnimationFrame(function() {
	            var now = root.performance.now();
	            if(now - this.state.lastFrame <= 16) {
	                // this update fired to early! drop it
	                return;
	            }
	            this.state.lastFrame = now;
	
	            // store placement inside the data object, modifiers will be able to edit `placement` if needed
	            // and refer to _originalPlacement to know the original value
	            data.placement = this._options.placement;
	            data._originalPlacement = this._options.placement;
	
	            // compute the popper and trigger offsets and put them inside data.offsets
	            data.offsets = this._getOffsets(this._popper, this._reference, data.placement);
	
	            // get boundaries
	            data.boundaries = this._getBoundaries(data, this._options.boundariesPadding, this._options.boundariesElement);
	
	            data = this.runModifiers(data, this._options.modifiers);
	
	            if (!isFunction(this.state.createCalback)) {
	                this.state.onCreateCalled = true;
	            }
	            if (!this.state.onCreateCalled) {
	                this.state.onCreateCalled = true;
	                if (isFunction(this.state.createCalback)) {
	                    this.state.createCalback(this);
	                }
	            } else if (isFunction(this.state.updateCallback)) {
	                this.state.updateCallback(data);
	            }
	        }.bind(this));
	    };
	
	    /**
	     * If a function is passed, it will be executed after the initialization of popper with as first argument the Popper instance.
	     * @method
	     * @memberof Popper
	     * @param {Function} callback
	     */
	    Popper.prototype.onCreate = function(callback) {
	        // the createCallbacks return as first argument the popper instance
	        this.state.createCalback = callback;
	        return this;
	    };
	
	    /**
	     * If a function is passed, it will be executed after each update of popper with as first argument the set of coordinates and informations
	     * used to style popper and its arrow.
	     * NOTE: it doesn't get fired on the first call of the `Popper.update()` method inside the `Popper` constructor!
	     * @method
	     * @memberof Popper
	     * @param {Function} callback
	     */
	    Popper.prototype.onUpdate = function(callback) {
	        this.state.updateCallback = callback;
	        return this;
	    };
	
	    /**
	     * Helper used to generate poppers from a configuration file
	     * @method
	     * @memberof Popper
	     * @param config {Object} configuration
	     * @returns {HTMLElement} popper
	     */
	    Popper.prototype.parse = function(config) {
	        var defaultConfig = {
	            tagName: 'div',
	            classNames: [ 'popper' ],
	            attributes: [],
	            parent: root.document.body,
	            content: '',
	            contentType: 'text',
	            arrowTagName: 'div',
	            arrowClassNames: [ 'popper__arrow' ],
	            arrowAttributes: [ 'x-arrow']
	        };
	        config = Object.assign({}, defaultConfig, config);
	
	        var d = root.document;
	
	        var popper = d.createElement(config.tagName);
	        addClassNames(popper, config.classNames);
	        addAttributes(popper, config.attributes);
	        if (config.contentType === 'node') {
	            popper.appendChild(config.content.jquery ? config.content[0] : config.content);
	        }else if (config.contentType === 'html') {
	            popper.innerHTML = config.content;
	        } else {
	            popper.textContent = config.content;
	        }
	
	        if (config.arrowTagName) {
	            var arrow = d.createElement(config.arrowTagName);
	            addClassNames(arrow, config.arrowClassNames);
	            addAttributes(arrow, config.arrowAttributes);
	            popper.appendChild(arrow);
	        }
	
	        var parent = config.parent.jquery ? config.parent[0] : config.parent;
	
	        // if the given parent is a string, use it to match an element
	        // if more than one element is matched, the first one will be used as parent
	        // if no elements are matched, the script will throw an error
	        if (typeof parent === 'string') {
	            parent = d.querySelectorAll(config.parent);
	            if (parent.length > 1) {
	                console.warn('WARNING: the given `parent` query(' + config.parent + ') matched more than one element, the first one will be used');
	            }
	            if (parent.length === 0) {
	                throw 'ERROR: the given `parent` doesn\'t exists!';
	            }
	            parent = parent[0];
	        }
	        // if the given parent is a DOM nodes list or an array of nodes with more than one element,
	        // the first one will be used as parent
	        if (parent.length > 1 && parent instanceof Element === false) {
	            console.warn('WARNING: you have passed as parent a list of elements, the first one will be used');
	            parent = parent[0];
	        }
	
	        // append the generated popper to its parent
	        parent.appendChild(popper);
	
	        return popper;
	
	        /**
	         * Adds class names to the given element
	         * @function
	         * @ignore
	         * @param {HTMLElement} target
	         * @param {Array} classes
	         */
	        function addClassNames(element, classNames) {
	            classNames.forEach(function(className) {
	                element.classList.add(className);
	            });
	        }
	
	        /**
	         * Adds attributes to the given element
	         * @function
	         * @ignore
	         * @param {HTMLElement} target
	         * @param {Array} attributes
	         * @example
	         * addAttributes(element, [ 'data-info:foobar' ]);
	         */
	        function addAttributes(element, attributes) {
	            attributes.forEach(function(attribute) {
	                element.setAttribute(attribute.split(':')[0], attribute.split(':')[1] || '');
	            });
	        }
	
	    };
	
	    /**
	     * Helper used to get the position which will be applied to the popper
	     * @method
	     * @memberof Popper
	     * @param config {HTMLElement} popper element
	     * @returns {HTMLElement} reference element
	     */
	    Popper.prototype._getPosition = function(popper, reference) {
	        var container = getOffsetParent(reference);
	
	        // Decide if the popper will be fixed
	        // If the reference element is inside a fixed context, the popper will be fixed as well to allow them to scroll together
	        var isParentFixed = isFixed(container);
	        return isParentFixed ? 'fixed' : 'absolute';
	    };
	
	    /**
	     * Helper used to determine if the popper's parent is transformed.
	     * @param  {[type]} popper [description]
	     * @return {[type]}        [description]
	     */
	    Popper.prototype._getIsParentTransformed = function(popper) {
	      return isTransformed(popper.parentNode);
	    };
	
	    /**
	     * Get offsets to the popper
	     * @method
	     * @memberof Popper
	     * @access private
	     * @param {Element} popper - the popper element
	     * @param {Element} reference - the reference element (the popper will be relative to this)
	     * @returns {Object} An object containing the offsets which will be applied to the popper
	     */
	    Popper.prototype._getOffsets = function(popper, reference, placement) {
	        placement = placement.split('-')[0];
	        var popperOffsets = {};
	
	        popperOffsets.position = this.state.position;
	        var isParentFixed = popperOffsets.position === 'fixed';
	
	        var isParentTransformed = this.state.isParentTransformed;
	
	        //
	        // Get reference element position
	        //
	        var offsetParent = (isParentFixed && isParentTransformed) ? getOffsetParent(reference) : getOffsetParent(popper);
	        var referenceOffsets = getOffsetRectRelativeToCustomParent(reference, offsetParent, isParentFixed, isParentTransformed);
	
	        //
	        // Get popper sizes
	        //
	        var popperRect = getOuterSizes(popper);
	
	        //
	        // Compute offsets of popper
	        //
	
	        // depending by the popper placement we have to compute its offsets slightly differently
	        if (['right', 'left'].indexOf(placement) !== -1) {
	            popperOffsets.top = referenceOffsets.top + referenceOffsets.height / 2 - popperRect.height / 2;
	            if (placement === 'left') {
	                popperOffsets.left = referenceOffsets.left - popperRect.width;
	            } else {
	                popperOffsets.left = referenceOffsets.right;
	            }
	        } else {
	            popperOffsets.left = referenceOffsets.left + referenceOffsets.width / 2 - popperRect.width / 2;
	            if (placement === 'top') {
	                popperOffsets.top = referenceOffsets.top - popperRect.height;
	            } else {
	                popperOffsets.top = referenceOffsets.bottom;
	            }
	        }
	
	        // Add width and height to our offsets object
	        popperOffsets.width   = popperRect.width;
	        popperOffsets.height  = popperRect.height;
	
	
	        return {
	            popper: popperOffsets,
	            reference: referenceOffsets
	        };
	    };
	
	
	    /**
	     * Setup needed event listeners used to update the popper position
	     * @method
	     * @memberof Popper
	     * @access private
	     */
	    Popper.prototype._setupEventListeners = function() {
	        // NOTE: 1 DOM access here
	        this.state.updateBound = this.update.bind(this);
	        root.addEventListener('resize', this.state.updateBound);
	        // if the boundariesElement is window we don't need to listen for the scroll event
	        if (this._options.boundariesElement !== 'window') {
	            var target = getScrollParent(this._reference);
	            // here it could be both `body` or `documentElement` thanks to Firefox, we then check both
	            if (target === root.document.body || target === root.document.documentElement) {
	                target = root;
	            }
	            target.addEventListener('scroll', this.state.updateBound);
	        }
	    };
	
	    /**
	     * Remove event listeners used to update the popper position
	     * @method
	     * @memberof Popper
	     * @access private
	     */
	    Popper.prototype._removeEventListeners = function() {
	        // NOTE: 1 DOM access here
	        root.removeEventListener('resize', this.state.updateBound);
	        if (this._options.boundariesElement !== 'window') {
	            var target = getScrollParent(this._reference);
	            // here it could be both `body` or `documentElement` thanks to Firefox, we then check both
	            if (target === root.document.body || target === root.document.documentElement) {
	                target = root;
	            }
	            target.removeEventListener('scroll', this.state.updateBound);
	        }
	        this.state.updateBound = null;
	    };
	
	    /**
	     * Computed the boundaries limits and return them
	     * @method
	     * @memberof Popper
	     * @access private
	     * @param {Object} data - Object containing the property "offsets" generated by `_getOffsets`
	     * @param {Number} padding - Boundaries padding
	     * @param {Element} boundariesElement - Element used to define the boundaries
	     * @returns {Object} Coordinates of the boundaries
	     */
	    Popper.prototype._getBoundaries = function(data, padding, boundariesElement) {
	        // NOTE: 1 DOM access here
	        var boundaries = {};
	        var width, height;
	        if (boundariesElement === 'window') {
	            var body = root.document.body,
	                html = root.document.documentElement;
	
	            height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
	            width = Math.max( body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth );
	
	            boundaries = {
	                top: 0,
	                right: width,
	                bottom: height,
	                left: 0
	            };
	        } else if (boundariesElement === 'viewport') {
	            var offsetParent = getOffsetParent(this._popper);
	            var scrollParent = getScrollParent(this._popper);
	            var offsetParentRect = getOffsetRect(offsetParent);
	
	            // if the popper is fixed we don't have to substract scrolling from the boundaries
	            var scrollTop = data.offsets.popper.position === 'fixed' ? 0 : scrollParent.scrollTop;
	            var scrollLeft = data.offsets.popper.position === 'fixed' ? 0 : scrollParent.scrollLeft;
	
	            boundaries = {
	                top: 0 - (offsetParentRect.top - scrollTop),
	                right: root.document.documentElement.clientWidth - (offsetParentRect.left - scrollLeft),
	                bottom: root.document.documentElement.clientHeight - (offsetParentRect.top - scrollTop),
	                left: 0 - (offsetParentRect.left - scrollLeft)
	            };
	        } else {
	            if (getOffsetParent(this._popper) === boundariesElement) {
	                boundaries = {
	                    top: 0,
	                    left: 0,
	                    right: boundariesElement.clientWidth,
	                    bottom: boundariesElement.clientHeight
	                };
	            } else {
	                boundaries = getOffsetRect(boundariesElement);
	            }
	        }
	        boundaries.left += padding;
	        boundaries.right -= padding;
	        boundaries.top = boundaries.top + padding;
	        boundaries.bottom = boundaries.bottom - padding;
	        return boundaries;
	    };
	
	
	    /**
	     * Loop trough the list of modifiers and run them in order, each of them will then edit the data object
	     * @method
	     * @memberof Popper
	     * @access public
	     * @param {Object} data
	     * @param {Array} modifiers
	     * @param {Function} ends
	     */
	    Popper.prototype.runModifiers = function(data, modifiers, ends) {
	        var modifiersToRun = modifiers.slice();
	        if (ends !== undefined) {
	            modifiersToRun = this._options.modifiers.slice(0, getArrayKeyIndex(this._options.modifiers, ends));
	        }
	
	        modifiersToRun.forEach(function(modifier) {
	            if (isFunction(modifier)) {
	                data = modifier.call(this, data);
	            }
	        }.bind(this));
	
	        return data;
	    };
	
	    /**
	     * Helper used to know if the given modifier depends from another one.
	     * @method
	     * @memberof Popper
	     * @returns {Boolean}
	     */
	
	    Popper.prototype.isModifierRequired = function(requesting, requested) {
	        var index = getArrayKeyIndex(this._options.modifiers, requesting);
	        return !!this._options.modifiers.slice(0, index).filter(function(modifier) {
	            return modifier === requested;
	        }).length;
	    };
	
	    //
	    // Modifiers
	    //
	
	    /**
	     * Modifiers list
	     * @namespace Popper.modifiers
	     * @memberof Popper
	     * @type {Object}
	     */
	    Popper.prototype.modifiers = {};
	
	    /**
	     * Apply the computed styles to the popper element
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by `update` method
	     * @returns {Object} The same data object
	     */
	    Popper.prototype.modifiers.applyStyle = function(data) {
	        // apply the final offsets to the popper
	        // NOTE: 1 DOM access here
	        var styles = {
	            position: data.offsets.popper.position
	        };
	
	        // round top and left to avoid blurry text
	        var left = Math.round(data.offsets.popper.left);
	        var top = Math.round(data.offsets.popper.top);
	
	        // if gpuAcceleration is set to true and transform is supported, we use `translate3d` to apply the position to the popper
	        // we automatically use the supported prefixed version if needed
	        var prefixedProperty;
	        if (this._options.gpuAcceleration && (prefixedProperty = getSupportedPropertyName('transform'))) {
	            styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
	            styles.top = 0;
	            styles.left = 0;
	        }
	        // othwerise, we use the standard `left` and `top` properties
	        else {
	            styles.left =left;
	            styles.top = top;
	        }
	
	        // any property present in `data.styles` will be applied to the popper,
	        // in this way we can make the 3rd party modifiers add custom styles to it
	        // Be aware, modifiers could override the properties defined in the previous
	        // lines of this modifier!
	        Object.assign(styles, data.styles);
	
	        setStyle(this._popper, styles);
	
	        // set an attribute which will be useful to style the tooltip (use it to properly position its arrow)
	        // NOTE: 1 DOM access here
	        this._popper.setAttribute('x-placement', data.placement);
	
	        // if the arrow style has been computed, apply the arrow style
	        if (data.offsets.arrow) {
	            setStyle(data.arrowElement, data.offsets.arrow);
	        }
	
	        // return the data object to allow chaining of other modifiers
	        return data;
	    };
	
	    /**
	     * Modifier used to shift the popper on the start or end of its reference element side
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by `update` method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.shift = function(data) {
	        var placement = data.placement;
	        var basePlacement = placement.split('-')[0];
	        var shiftVariation = placement.split('-')[1];
	
	        // if shift shiftVariation is specified, run the modifier
	        if (shiftVariation) {
	            var reference = data.offsets.reference;
	            var popper = getPopperClientRect(data.offsets.popper);
	
	            var shiftOffsets = {
	                y: {
	                    start:  { top: reference.top },
	                    end:    { top: reference.top + reference.height - popper.height }
	                },
	                x: {
	                    start:  { left: reference.left },
	                    end:    { left: reference.left + reference.width - popper.width }
	                }
	            };
	
	            var axis = ['bottom', 'top'].indexOf(basePlacement) !== -1 ? 'x' : 'y';
	
	            data.offsets.popper = Object.assign(popper, shiftOffsets[axis][shiftVariation]);
	        }
	
	        return data;
	    };
	
	
	    /**
	     * Modifier used to make sure the popper does not overflows from it's boundaries
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by `update` method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.preventOverflow = function(data) {
	        var order = this._options.preventOverflowOrder;
	        var popper = getPopperClientRect(data.offsets.popper);
	
	        var check = {
	            left: function() {
	                var left = popper.left;
	                if (popper.left < data.boundaries.left) {
	                    left = Math.max(popper.left, data.boundaries.left);
	                }
	                return { left: left };
	            },
	            right: function() {
	                var left = popper.left;
	                if (popper.right > data.boundaries.right) {
	                    left = Math.min(popper.left, data.boundaries.right - popper.width);
	                }
	                return { left: left };
	            },
	            top: function() {
	                var top = popper.top;
	                if (popper.top < data.boundaries.top) {
	                    top = Math.max(popper.top, data.boundaries.top);
	                }
	                return { top: top };
	            },
	            bottom: function() {
	                var top = popper.top;
	                if (popper.bottom > data.boundaries.bottom) {
	                    top = Math.min(popper.top, data.boundaries.bottom - popper.height);
	                }
	                return { top: top };
	            }
	        };
	
	        order.forEach(function(direction) {
	            data.offsets.popper = Object.assign(popper, check[direction]());
	        });
	
	        return data;
	    };
	
	    /**
	     * Modifier used to make sure the popper is always near its reference
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by _update method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.keepTogether = function(data) {
	        var popper  = getPopperClientRect(data.offsets.popper);
	        var reference = data.offsets.reference;
	        var f = Math.floor;
	
	        if (popper.right < f(reference.left)) {
	            data.offsets.popper.left = f(reference.left) - popper.width;
	        }
	        if (popper.left > f(reference.right)) {
	            data.offsets.popper.left = f(reference.right);
	        }
	        if (popper.bottom < f(reference.top)) {
	            data.offsets.popper.top = f(reference.top) - popper.height;
	        }
	        if (popper.top > f(reference.bottom)) {
	            data.offsets.popper.top = f(reference.bottom);
	        }
	
	        return data;
	    };
	
	    /**
	     * Modifier used to flip the placement of the popper when the latter is starting overlapping its reference element.
	     * Requires the `preventOverflow` modifier before it in order to work.
	     * **NOTE:** This modifier will run all its previous modifiers everytime it tries to flip the popper!
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by _update method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.flip = function(data) {
	        // check if preventOverflow is in the list of modifiers before the flip modifier.
	        // otherwise flip would not work as expected.
	        if (!this.isModifierRequired(this.modifiers.flip, this.modifiers.preventOverflow)) {
	            console.warn('WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!');
	            return data;
	        }
	
	        if (data.flipped && data.placement === data._originalPlacement) {
	            // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
	            return data;
	        }
	
	        var placement = data.placement.split('-')[0];
	        var placementOpposite = getOppositePlacement(placement);
	        var variation = data.placement.split('-')[1] || '';
	
	        var flipOrder = [];
	        if(this._options.flipBehavior === 'flip') {
	            flipOrder = [
	                placement,
	                placementOpposite
	            ];
	        } else {
	            flipOrder = this._options.flipBehavior;
	        }
	
	        flipOrder.forEach(function(step, index) {
	            if (placement !== step || flipOrder.length === index + 1) {
	                return;
	            }
	
	            placement = data.placement.split('-')[0];
	            placementOpposite = getOppositePlacement(placement);
	
	            var popperOffsets = getPopperClientRect(data.offsets.popper);
	
	            // this boolean is used to distinguish right and bottom from top and left
	            // they need different computations to get flipped
	            var a = ['right', 'bottom'].indexOf(placement) !== -1;
	
	            // using Math.floor because the reference offsets may contain decimals we are not going to consider here
	            if (
	                a && Math.floor(data.offsets.reference[placement]) > Math.floor(popperOffsets[placementOpposite]) ||
	                !a && Math.floor(data.offsets.reference[placement]) < Math.floor(popperOffsets[placementOpposite])
	            ) {
	                // we'll use this boolean to detect any flip loop
	                data.flipped = true;
	                data.placement = flipOrder[index + 1];
	                if (variation) {
	                    data.placement += '-' + variation;
	                }
	                data.offsets.popper = this._getOffsets(this._popper, this._reference, data.placement).popper;
	
	                data = this.runModifiers(data, this._options.modifiers, this._flip);
	            }
	        }.bind(this));
	        return data;
	    };
	
	    /**
	     * Modifier used to add an offset to the popper, useful if you more granularity positioning your popper.
	     * The offsets will shift the popper on the side of its reference element.
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by _update method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.offset = function(data) {
	        var offset = this._options.offset;
	        var popper  = data.offsets.popper;
	
	        if (data.placement.indexOf('left') !== -1) {
	            popper.top -= offset;
	        }
	        else if (data.placement.indexOf('right') !== -1) {
	            popper.top += offset;
	        }
	        else if (data.placement.indexOf('top') !== -1) {
	            popper.left -= offset;
	        }
	        else if (data.placement.indexOf('bottom') !== -1) {
	            popper.left += offset;
	        }
	        return data;
	    };
	
	    /**
	     * Modifier used to move the arrows on the edge of the popper to make sure them are always between the popper and the reference element
	     * It will use the CSS outer size of the arrow element to know how many pixels of conjuction are needed
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by _update method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.arrow = function(data) {
	        var arrow  = this._options.arrowElement;
	
	        // if the arrowElement is a string, suppose it's a CSS selector
	        if (typeof arrow === 'string') {
	            arrow = this._popper.querySelector(arrow);
	        }
	
	        // if arrow element is not found, don't run the modifier
	        if (!arrow) {
	            return data;
	        }
	
	        // the arrow element must be child of its popper
	        if (!this._popper.contains(arrow)) {
	            console.warn('WARNING: `arrowElement` must be child of its popper element!');
	            return data;
	        }
	
	        // arrow depends on keepTogether in order to work
	        if (!this.isModifierRequired(this.modifiers.arrow, this.modifiers.keepTogether)) {
	            console.warn('WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!');
	            return data;
	        }
	
	        var arrowStyle  = {};
	        var placement   = data.placement.split('-')[0];
	        var popper      = getPopperClientRect(data.offsets.popper);
	        var reference   = data.offsets.reference;
	        var isVertical  = ['left', 'right'].indexOf(placement) !== -1;
	
	        var len         = isVertical ? 'height' : 'width';
	        var side        = isVertical ? 'top' : 'left';
	        var altSide     = isVertical ? 'left' : 'top';
	        var opSide      = isVertical ? 'bottom' : 'right';
	        var arrowSize   = getOuterSizes(arrow)[len];
	
	        //
	        // extends keepTogether behavior making sure the popper and its reference have enough pixels in conjuction
	        //
	
	        // top/left side
	        if (reference[opSide] - arrowSize < popper[side]) {
	            data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowSize);
	        }
	        // bottom/right side
	        if (reference[side] + arrowSize > popper[opSide]) {
	            data.offsets.popper[side] += (reference[side] + arrowSize) - popper[opSide];
	        }
	
	        // compute center of the popper
	        var center = reference[side] + (reference[len] / 2) - (arrowSize / 2);
	
	        // Compute the sideValue using the updated popper offsets
	        var sideValue = center - getPopperClientRect(data.offsets.popper)[side];
	
	        // prevent arrow from being placed not contiguously to its popper
	        sideValue = Math.max(Math.min(popper[len] - arrowSize, sideValue), 0);
	        arrowStyle[side] = sideValue;
	        arrowStyle[altSide] = ''; // make sure to remove any old style from the arrow
	
	        data.offsets.arrow = arrowStyle;
	        data.arrowElement = arrow;
	
	        return data;
	    };
	
	
	    //
	    // Helpers
	    //
	
	    /**
	     * Get the outer sizes of the given element (offset size + margins)
	     * @function
	     * @ignore
	     * @argument {Element} element
	     * @returns {Object} object containing width and height properties
	     */
	    function getOuterSizes(element) {
	        // NOTE: 1 DOM access here
	        var _display = element.style.display, _visibility = element.style.visibility;
	        element.style.display = 'block'; element.style.visibility = 'hidden';
	        var calcWidthToForceRepaint = element.offsetWidth;
	
	        // original method
	        var styles = root.getComputedStyle(element);
	        var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
	        var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
	        var result = { width: element.offsetWidth + y, height: element.offsetHeight + x };
	
	        // reset element styles
	        element.style.display = _display; element.style.visibility = _visibility;
	        return result;
	    }
	
	    /**
	     * Get the opposite placement of the given one/
	     * @function
	     * @ignore
	     * @argument {String} placement
	     * @returns {String} flipped placement
	     */
	    function getOppositePlacement(placement) {
	        var hash = {left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
	        return placement.replace(/left|right|bottom|top/g, function(matched){
	            return hash[matched];
	        });
	    }
	
	    /**
	     * Given the popper offsets, generate an output similar to getBoundingClientRect
	     * @function
	     * @ignore
	     * @argument {Object} popperOffsets
	     * @returns {Object} ClientRect like output
	     */
	    function getPopperClientRect(popperOffsets) {
	        var offsets = Object.assign({}, popperOffsets);
	        offsets.right = offsets.left + offsets.width;
	        offsets.bottom = offsets.top + offsets.height;
	        return offsets;
	    }
	
	    /**
	     * Given an array and the key to find, returns its index
	     * @function
	     * @ignore
	     * @argument {Array} arr
	     * @argument keyToFind
	     * @returns index or null
	     */
	    function getArrayKeyIndex(arr, keyToFind) {
	        var i = 0, key;
	        for (key in arr) {
	            if (arr[key] === keyToFind) {
	                return i;
	            }
	            i++;
	        }
	        return null;
	    }
	
	    /**
	     * Get CSS computed property of the given element
	     * @function
	     * @ignore
	     * @argument {Eement} element
	     * @argument {String} property
	     */
	    function getStyleComputedProperty(element, property) {
	        // NOTE: 1 DOM access here
	        var css = root.getComputedStyle(element, null);
	        return css[property];
	    }
	
	    /**
	     * Returns the offset parent of the given element
	     * @function
	     * @ignore
	     * @argument {Element} element
	     * @returns {Element} offset parent
	     */
	    function getOffsetParent(element) {
	        // NOTE: 1 DOM access here
	        var offsetParent = element.offsetParent;
	        return offsetParent === root.document.body || !offsetParent ? root.document.documentElement : offsetParent;
	    }
	
	    /**
	     * Returns the scrolling parent of the given element
	     * @function
	     * @ignore
	     * @argument {Element} element
	     * @returns {Element} offset parent
	     */
	    function getScrollParent(element) {
	        if (element === root.document) {
	            // Firefox puts the scrollTOp value on `documentElement` instead of `body`, we then check which of them is
	            // greater than 0 and return the proper element
	            if (root.document.body.scrollTop) {
	                return root.document.body;
	            } else {
	                return root.document.documentElement;
	            }
	        }
	
	        // Firefox want us to check `-x` and `-y` variations as well
	        if (
	            ['scroll', 'auto'].indexOf(getStyleComputedProperty(element, 'overflow')) !== -1 ||
	            ['scroll', 'auto'].indexOf(getStyleComputedProperty(element, 'overflow-x')) !== -1 ||
	            ['scroll', 'auto'].indexOf(getStyleComputedProperty(element, 'overflow-y')) !== -1
	        ) {
	            // If the detected scrollParent is body, we perform an additional check on its parentNode
	            // in this way we'll get body if the browser is Chrome-ish, or documentElement otherwise
	            // fixes issue #65
	            return element === root.document.body ? getScrollParent(element.parentNode) : element;
	        }
	        return element.parentNode ? getScrollParent(element.parentNode) : element;
	    }
	
	    /**
	     * Check if the given element is fixed or is inside a fixed parent
	     * @function
	     * @ignore
	     * @argument {Element} element
	     * @argument {Element} customContainer
	     * @returns {Boolean} answer to "isFixed?"
	     */
	    function isFixed(element) {
	        if (element === root.document.body || element.nodeName === 'HTML') {
	            return false;
	        }
	        if (getStyleComputedProperty(element, 'position') === 'fixed') {
	            return true;
	        }
	        return element.parentNode ? isFixed(element.parentNode) : element;
	    }
	
	    /**
	     * Check if the given element has transforms applied to itself or a parent
	     * @param  {Element} element
	     * @return {Boolean} answer to "isTransformed?"
	     */
	    function isTransformed(element) {
	      if (element === root.document.body) {
	          return false;
	      }
	      if (getStyleComputedProperty(element, 'transform') !== 'none') {
	          return true;
	      }
	      return element.parentNode ? isTransformed(element.parentNode) : element;
	    }
	
	    /**
	     * Set the style to the given popper
	     * @function
	     * @ignore
	     * @argument {Element} element - Element to apply the style to
	     * @argument {Object} styles - Object with a list of properties and values which will be applied to the element
	     */
	    function setStyle(element, styles) {
	        function is_numeric(n) {
	            return (n !== '' && !isNaN(parseFloat(n)) && isFinite(n));
	        }
	        Object.keys(styles).forEach(function(prop) {
	            var unit = '';
	            // add unit if the value is numeric and is one of the following
	            if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && is_numeric(styles[prop])) {
	                unit = 'px';
	            }
	            element.style[prop] = styles[prop] + unit;
	        });
	    }
	
	    /**
	     * Check if the given variable is a function
	     * @function
	     * @ignore
	     * @argument {Element} element - Element to check
	     * @returns {Boolean} answer to: is a function?
	     */
	    function isFunction(functionToCheck) {
	        var getType = {};
	        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	    }
	
	    /**
	     * Get the position of the given element, relative to its offset parent
	     * @function
	     * @ignore
	     * @param {Element} element
	     * @return {Object} position - Coordinates of the element and its `scrollTop`
	     */
	    function getOffsetRect(element) {
	        var elementRect = {
	            width: element.offsetWidth,
	            height: element.offsetHeight,
	            left: element.offsetLeft,
	            top: element.offsetTop
	        };
	
	        elementRect.right = elementRect.left + elementRect.width;
	        elementRect.bottom = elementRect.top + elementRect.height;
	
	        // position
	        return elementRect;
	    }
	
	    /**
	     * Get bounding client rect of given element
	     * @function
	     * @ignore
	     * @param {HTMLElement} element
	     * @return {Object} client rect
	     */
	    function getBoundingClientRect(element) {
	        var rect = element.getBoundingClientRect();
	        return {
	            left: rect.left,
	            top: rect.top,
	            right: rect.right,
	            bottom: rect.bottom,
	            width: rect.right - rect.left,
	            height: rect.bottom - rect.top
	        };
	    }
	
	    /**
	     * Given an element and one of its parents, return the offset
	     * @function
	     * @ignore
	     * @param {HTMLElement} element
	     * @param {HTMLElement} parent
	     * @return {Object} rect
	     */
	    function getOffsetRectRelativeToCustomParent(element, parent, fixed, transformed) {
	        var elementRect = getBoundingClientRect(element);
	        var parentRect = getBoundingClientRect(parent);
	
	        if (fixed && !transformed) {
	            var scrollParent = getScrollParent(parent);
	            parentRect.top += scrollParent.scrollTop;
	            parentRect.bottom += scrollParent.scrollTop;
	            parentRect.left += scrollParent.scrollLeft;
	            parentRect.right += scrollParent.scrollLeft;
	        }
	
	        var rect = {
	            top: elementRect.top - parentRect.top ,
	            left: elementRect.left - parentRect.left ,
	            bottom: (elementRect.top - parentRect.top) + elementRect.height,
	            right: (elementRect.left - parentRect.left) + elementRect.width,
	            width: elementRect.width,
	            height: elementRect.height
	        };
	        return rect;
	    }
	
	    /**
	     * Get the prefixed supported property name
	     * @function
	     * @ignore
	     * @argument {String} property (camelCase)
	     * @returns {String} prefixed property (camelCase)
	     */
	    function getSupportedPropertyName(property) {
	        var prefixes = ['', 'ms', 'webkit', 'moz', 'o'];
	
	        for (var i = 0; i < prefixes.length; i++) {
	            var toCheck = prefixes[i] ? prefixes[i] + property.charAt(0).toUpperCase() + property.slice(1) : property;
	            if (typeof root.document.body.style[toCheck] !== 'undefined') {
	                return toCheck;
	            }
	        }
	        return null;
	    }
	
	    /**
	     * The Object.assign() method is used to copy the values of all enumerable own properties from one or more source
	     * objects to a target object. It will return the target object.
	     * This polyfill doesn't support symbol properties, since ES5 doesn't have symbols anyway
	     * Source: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	     * @function
	     * @ignore
	     */
	    if (!Object.assign) {
	        Object.defineProperty(Object, 'assign', {
	            enumerable: false,
	            configurable: true,
	            writable: true,
	            value: function(target) {
	                if (target === undefined || target === null) {
	                    throw new TypeError('Cannot convert first argument to object');
	                }
	
	                var to = Object(target);
	                for (var i = 1; i < arguments.length; i++) {
	                    var nextSource = arguments[i];
	                    if (nextSource === undefined || nextSource === null) {
	                        continue;
	                    }
	                    nextSource = Object(nextSource);
	
	                    var keysArray = Object.keys(nextSource);
	                    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
	                        var nextKey = keysArray[nextIndex];
	                        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
	                        if (desc !== undefined && desc.enumerable) {
	                            to[nextKey] = nextSource[nextKey];
	                        }
	                    }
	                }
	                return to;
	            }
	        });
	    }
	
	    if (!root.requestAnimationFrame) {
	        /* jshint ignore:start */
	        var lastTime = 0;
	        var vendors = ['ms', 'moz', 'webkit', 'o'];
	        for(var x = 0; x < vendors.length && !root.requestAnimationFrame; ++x) {
	            root.requestAnimationFrame = root[vendors[x]+'RequestAnimationFrame'];
	            root.cancelAnimationFrame = root[vendors[x]+'CancelAnimationFrame'] || root[vendors[x]+'CancelRequestAnimationFrame'];
	        }
	
	        if (!root.requestAnimationFrame) {
	            root.requestAnimationFrame = function(callback, element) {
	                var currTime = new Date().getTime();
	                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	                var id = root.setTimeout(function() { callback(currTime + timeToCall); },
	                                           timeToCall);
	                lastTime = currTime + timeToCall;
	                return id;
	            };
	        }
	
	        if (!root.cancelAnimationFrame) {
	            root.cancelAnimationFrame = function(id) {
	                clearTimeout(id);
	            };
	        }
	        /* jshint ignore:end */
	    }
	
	    return Popper;
	}));


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(115)
	
	/* template */
	var __vue_template__ = __webpack_require__(326)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(116)
	
	/* template */
	var __vue_template__ = __webpack_require__(357)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(117)
	
	/* template */
	var __vue_template__ = __webpack_require__(338)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(118)
	
	/* template */
	var __vue_template__ = __webpack_require__(332)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(119)
	
	/* template */
	var __vue_template__ = __webpack_require__(328)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(120)
	
	/* template */
	var __vue_template__ = __webpack_require__(325)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(121)
	
	/* template */
	var __vue_template__ = __webpack_require__(348)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(122)
	
	/* template */
	var __vue_template__ = __webpack_require__(359)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(123)
	
	/* template */
	var __vue_template__ = __webpack_require__(347)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(124)
	
	/* template */
	var __vue_template__ = __webpack_require__(354)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(125)
	
	/* template */
	var __vue_template__ = __webpack_require__(351)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(126)
	
	/* template */
	var __vue_template__ = __webpack_require__(334)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(187)
	
	/* script */
	__vue_exports__ = __webpack_require__(127)
	
	/* template */
	var __vue_template__ = __webpack_require__(335)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(128)
	
	/* template */
	var __vue_template__ = __webpack_require__(342)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(129)
	
	/* template */
	var __vue_template__ = __webpack_require__(343)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(130)
	
	/* template */
	var __vue_template__ = __webpack_require__(336)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(131)
	
	/* template */
	var __vue_template__ = __webpack_require__(333)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(132)
	
	/* template */
	var __vue_template__ = __webpack_require__(339)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(133)
	
	/* template */
	var __vue_template__ = __webpack_require__(341)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(134)
	
	/* template */
	var __vue_template__ = __webpack_require__(344)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(135)
	
	/* template */
	var __vue_template__ = __webpack_require__(355)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(136)
	
	/* template */
	var __vue_template__ = __webpack_require__(349)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(137)
	
	/* template */
	var __vue_template__ = __webpack_require__(345)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(186)
	
	/* script */
	__vue_exports__ = __webpack_require__(138)
	
	/* template */
	var __vue_template__ = __webpack_require__(329)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(139)
	
	/* template */
	var __vue_template__ = __webpack_require__(330)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(140)
	
	/* template */
	var __vue_template__ = __webpack_require__(358)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(141)
	
	/* template */
	var __vue_template__ = __webpack_require__(346)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(142)
	
	/* template */
	var __vue_template__ = __webpack_require__(331)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(143)
	
	/* template */
	var __vue_template__ = __webpack_require__(356)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(144)
	
	/* template */
	var __vue_template__ = __webpack_require__(352)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(145)
	
	/* template */
	var __vue_template__ = __webpack_require__(337)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(146)
	
	/* template */
	var __vue_template__ = __webpack_require__(353)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(147)
	
	/* template */
	var __vue_template__ = __webpack_require__(350)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(148)
	
	/* template */
	var __vue_template__ = __webpack_require__(340)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* script */
	__vue_exports__ = __webpack_require__(149)
	
	/* template */
	var __vue_template__ = __webpack_require__(327)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	module.exports = __vue_exports__


/***/ }),
/* 325 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('label', {
	    staticClass: "checkbox blu-checkbox",
	    class: [{
	      'on': _vm.isChecked
	    }, _vm.typeClass, {
	      'is-disabled': _vm.disabled
	    }],
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	        return _vm.toggle($event)
	      }
	    }
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.realVal),
	      expression: "realVal"
	    }],
	    ref: "checkbox",
	    attrs: {
	      "type": "checkbox",
	      "name": _vm.name,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "checked": _vm.isChecked,
	      "value": _vm.realVal,
	      "checked": Array.isArray(_vm.realVal) ? _vm._i(_vm.realVal, _vm.realVal) > -1 : (_vm.realVal)
	    },
	    on: {
	      "change": [function($event) {
	        var $$a = _vm.realVal,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = _vm.realVal,
	            $$i = _vm._i($$a, $$v);
	          if ($$el.checked) {
	            $$i < 0 && (_vm.realVal = $$a.concat([$$v]))
	          } else {
	            $$i > -1 && (_vm.realVal = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          _vm.realVal = $$c
	        }
	      }, function($event) {
	        _vm.$emit('change', $event)
	      }]
	    }
	  }), _vm._v(" "), _c('span', [_vm._t("default")], 2)])
	},staticRenderFns: []}

/***/ }),
/* 326 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "affix-placeholder",
	    style: (_vm.wrapStyle)
	  }, [_c('div', {
	    class: {
	      'affix': _vm.affixed
	    },
	    style: (_vm.styles)
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}

/***/ }),
/* 327 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', [_vm._t("default"), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "fade"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isShow),
	      expression: "isShow"
	    }],
	    ref: "popper",
	    staticClass: "tooltip"
	  }, [_c('span', {
	    domProps: {
	      "textContent": _vm._s(_vm.content)
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "tooltip-arrow",
	    attrs: {
	      "x-arrow": ""
	    }
	  })])])], 2)
	},staticRenderFns: []}

/***/ }),
/* 328 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', [(!_vm.hasSlot) ? _c('a', {
	    attrs: {
	      "href": _vm.to
	    }
	  }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm._v(" "), _vm._t("default"), _vm._v(" "), (_vm.separator) ? _c('span', {
	    staticClass: "breadcrumb-separator"
	  }, [_vm._v(_vm._s(_vm.separator))]) : _vm._e()], 2)
	},staticRenderFns: []}

/***/ }),
/* 329 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    staticClass: "button radio-button",
	    class: [{
	      'is-primary': _vm.isChecked,
	    }],
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	        return _vm.toggle($event)
	      }
	    }
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.model),
	      expression: "model"
	    }],
	    ref: "checkbox",
	    attrs: {
	      "type": "radio",
	      "name": _vm.name,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "checked": _vm.isChecked,
	      "value": _vm.val,
	      "checked": _vm._q(_vm.model, _vm.val)
	    },
	    on: {
	      "change": function($event) {
	        _vm.model = _vm.val
	      }
	    }
	  }), _vm._v(" "), (_vm.icon) ? _c('span', {
	    staticClass: "icon is-small"
	  }, [_c('i', {
	    staticClass: "fa",
	    class: [_vm.iconClass]
	  })]) : _vm._e(), _vm._v(" "), _c('span', [_vm._t("default")], 2)])
	},staticRenderFns: []}

/***/ }),
/* 330 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "control has-addons"
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ }),
/* 331 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "steps-wrap",
	    class: [_vm.type]
	  }, [_c('div', {
	    staticClass: "step-header"
	  }, _vm._l((_vm.steps), function(step, index) {
	    return _c('div', {
	      staticClass: "step-item",
	      class: {
	        'is-active': _vm.currentIndex === index, 'is-done': index < _vm.currentIndex
	      },
	      style: ({
	        stepStyle: _vm.stepStyle
	      })
	    }, [_c('div', {
	      staticClass: "step-left"
	    }, [_c('div', {
	      staticClass: "step-icon"
	    }, [(index >= _vm.currentIndex) ? _c('span', [_vm._v(_vm._s(index + 1))]) : _vm._e(), _vm._v(" "), (index < _vm.currentIndex) ? _c('span', [_c('i', {
	      staticClass: "fa fa-check"
	    })]) : _vm._e()])]), _vm._v(" "), _c('div', {
	      staticClass: "step-desc"
	    }, [_c('span', {
	      staticClass: "step-title"
	    }, [_vm._v(_vm._s(step.title))])]), _vm._v(" "), _c('div', {
	      staticClass: "step-description"
	    }, [_vm._v(_vm._s(step.description))])])
	  })), _vm._v(" "), _c('div', {
	    staticClass: "step-content is-flex"
	  }, [_vm._t("default")], 2), _vm._v(" "), (_vm.showFooter) ? _c('div', {
	    staticClass: "step-footer has-text-right"
	  }, [_c('button', {
	    staticClass: "button is-primary",
	    on: {
	      "click": _vm.prev
	    }
	  }, [_vm._v(_vm._s(_vm.prevText))]), _vm._v(" "), _c('button', {
	    staticClass: "button is-primary",
	    on: {
	      "click": _vm.next
	    }
	  }, [_vm._v(_vm._s(_vm.nextText))])]) : _vm._e()])
	},staticRenderFns: []}

/***/ }),
/* 332 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('ul', {
	    staticClass: "breadcrumb"
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ }),
/* 333 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": "fade"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isShow),
	      expression: "isShow"
	    }],
	    staticClass: "modal modal-confirm align-baseline is-active borderless"
	  }, [(_vm.backdrop) ? _c('div', {
	    staticClass: "modal-background",
	    on: {
	      "click": _vm.backdropClose
	    }
	  }) : _vm._e(), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": _vm.transition
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isShow),
	      expression: "isShow"
	    }],
	    staticClass: "modal-card",
	    style: (_vm.modalWidth)
	  }, [(_vm.showHeader) ? _c('header', {
	    staticClass: "modal-card-head"
	  }, [_vm._t("header", [_c('p', {
	    staticClass: "modal-card-title"
	  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('span', {
	    staticClass: "close",
	    on: {
	      "click": _vm.handleCancel
	    }
	  }, [_vm._v("×")])])], 2) : _vm._e(), _vm._v(" "), _c('section', {
	    staticClass: "modal-card-body"
	  }, [_c('article', {
	    staticClass: "media",
	    class: [_vm.typeClass]
	  }, [(_vm.icon) ? _c('div', {
	    staticClass: "media-left"
	  }, [_c('i', {
	    staticClass: "fa",
	    class: [_vm.iconClass]
	  })]) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "media-content"
	  }, [_vm._v(_vm._s(_vm.content))])])]), _vm._v(" "), (_vm.showFooter) ? _c('footer', {
	    staticClass: "modal-card-foot"
	  }, [_vm._t("footer", [(_vm.showCancel) ? _c('a', {
	    staticClass: "button",
	    on: {
	      "click": _vm.handleCancel
	    }
	  }, [_vm._v(_vm._s(_vm.cancelText))]) : _vm._e(), _vm._v(" "), (_vm.showOk) ? _c('a', {
	    staticClass: "button is-primary",
	    class: {
	      'is-loading': _vm.isLoading
	    },
	    on: {
	      "click": _vm.handleOk
	    }
	  }, [_vm._v(_vm._s(_vm.okText))]) : _vm._e()])], 2) : _vm._e()])])], 1)])
	},staticRenderFns: []}

/***/ }),
/* 334 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    staticClass: "datepicker"
	  }, [(_vm.isWrap) ? _c('span', {
	    ref: "pickrInput",
	    staticClass: "control has-addons flatpickr"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.interVal),
	      expression: "interVal"
	    }],
	    staticClass: "input",
	    attrs: {
	      "name": _vm.name,
	      "placeholder": _vm.placeholder,
	      "type": "text",
	      "data-input": ""
	    },
	    domProps: {
	      "value": (_vm.interVal)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.interVal = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1)]) : _c('p', {
	    staticClass: "control has-icon has-icon-right"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.interVal),
	      expression: "interVal"
	    }],
	    ref: "pickrInput",
	    staticClass: "input",
	    attrs: {
	      "name": _vm.name,
	      "placeholder": _vm.placeholder,
	      "type": "text"
	    },
	    domProps: {
	      "value": (_vm.interVal)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.interVal = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('i', {
	    staticClass: "fa fa-calendar"
	  }), _vm._v(" "), _c('i', {
	    staticClass: "fa fa-times",
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	        return _vm.handleClear($event)
	      }
	    }
	  })])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    staticClass: "button",
	    attrs: {
	      "data-toggle": ""
	    }
	  }, [_c('i', {
	    staticClass: "fa fa-calendar"
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    staticClass: "button",
	    attrs: {
	      "data-clear": ""
	    }
	  }, [_c('i', {
	    staticClass: "fa fa-close"
	  })])
	}]}

/***/ }),
/* 335 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    staticClass: "dropdown"
	  }, [_vm._t("default"), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "fade"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isShow),
	      expression: "isShow"
	    }],
	    ref: "popper",
	    staticClass: "popover popper-dropdown",
	    style: (_vm.popperStyle)
	  }, [_c('div', {
	    staticClass: "popover-content dropdown-content"
	  }, [_vm._t("content", [_c('div', {
	    domProps: {
	      "textContent": _vm._s(_vm.content)
	    }
	  })])], 2)])])], 2)
	},staticRenderFns: []}

/***/ }),
/* 336 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [(_vm.label) ? _c('p', {
	    staticClass: "menu-label"
	  }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm._v(" "), _c('ul', {
	    staticClass: "menu-list",
	    class: _vm.type
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}

/***/ }),
/* 337 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "tabs is-layout-top",
	    class: [_vm.alignClass, _vm.typeClass, _vm.sizeClass, _vm.layoutClass, _vm.fullWidthClass]
	  }, [_c('ul', {
	    staticClass: "tab-list"
	  }, _vm._l((_vm.tabPanes), function(tab, index) {
	    return _c('li', {
	      class: {
	        'is-active': _vm.isActive(index), 'is-disabled': tab.disabled,
	      },
	      attrs: {
	        "role": "tab"
	      },
	      on: {
	        "click": function($event) {
	          $event.preventDefault();
	          _vm.handleSelect(index)
	        }
	      }
	    }, [_c('a', [(tab.icon) ? _c('span', {
	      staticClass: "icon",
	      class: {
	        'is-small': _vm.size !== 'large'
	      }
	    }, [_c('i', {
	      staticClass: "fa",
	      class: [("fa-" + (tab.icon))]
	    })]) : _vm._e(), _vm._v(" "), _c('span', [_vm._v(_vm._s(tab.label))])])])
	  })), _vm._v(" "), _c('div', {
	    staticClass: "tab-content is-flex"
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}

/***/ }),
/* 338 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": "fade"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isActive),
	      expression: "isActive"
	    }],
	    staticClass: "aside",
	    class: [{
	      'is-active': _vm.isActive
	    }, _vm.placementClass]
	  }, [(_vm.backdrop) ? _c('div', {
	    staticClass: "modal-background",
	    on: {
	      "click": _vm.backdropClose
	    }
	  }) : _vm._e(), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": _vm.transitionName
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isActive),
	      expression: "isActive"
	    }],
	    staticClass: "modal-card",
	    style: (_vm.modalWidth)
	  }, [(_vm.showHeader) ? _c('header', {
	    staticClass: "modal-card-head aside-header"
	  }, [_vm._t("header", [_c('p', {
	    staticClass: "modal-card-title"
	  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('span', {
	    staticClass: "close",
	    on: {
	      "click": _vm.handleCancel
	    }
	  }, [_vm._v("×")])])], 2) : _vm._e(), _vm._v(" "), _c('section', {
	    staticClass: "modal-card-body aside-body"
	  }, [_vm._t("default")], 2), _vm._v(" "), (_vm.showFooter) ? _c('footer', {
	    staticClass: "modal-card-foot aside-footer"
	  }, [_vm._t("footer", [(_vm.showCancel) ? _c('a', {
	    staticClass: "button",
	    on: {
	      "click": _vm.handleCancel
	    }
	  }, [_vm._v(_vm._s(_vm.cancelText))]) : _vm._e(), _vm._v(" "), (_vm.showOk) ? _c('a', {
	    staticClass: "button is-primary",
	    class: {
	      'is-loading': _vm.isLoading
	    },
	    on: {
	      "click": _vm.handleOk
	    }
	  }, [_vm._v(_vm._s(_vm.okText))]) : _vm._e()])], 2) : _vm._e()])])], 1)])
	},staticRenderFns: []}

/***/ }),
/* 339 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": "fade"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isActive),
	      expression: "isActive"
	    }],
	    staticClass: "modal align-baseline",
	    class: {
	      'is-active': _vm.isActive
	    }
	  }, [(_vm.backdrop) ? _c('div', {
	    staticClass: "modal-background",
	    on: {
	      "click": _vm.backdropClose
	    }
	  }) : _vm._e(), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": _vm.transition
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isActive),
	      expression: "isActive"
	    }],
	    staticClass: "modal-card",
	    style: (_vm.modalWidth)
	  }, [(_vm.showHeader) ? _c('header', {
	    staticClass: "modal-card-head"
	  }, [_vm._t("header", [_c('p', {
	    staticClass: "modal-card-title"
	  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('span', {
	    staticClass: "close",
	    on: {
	      "click": _vm.handleCancel
	    }
	  }, [_vm._v("×")])])], 2) : _vm._e(), _vm._v(" "), _c('section', {
	    staticClass: "modal-card-body"
	  }, [_vm._t("default")], 2), _vm._v(" "), (_vm.showFooter) ? _c('footer', {
	    staticClass: "modal-card-foot"
	  }, [_vm._t("footer", [(_vm.showCancel) ? _c('a', {
	    staticClass: "button",
	    on: {
	      "click": _vm.handleCancel
	    }
	  }, [_vm._v(_vm._s(_vm.cancelText))]) : _vm._e(), _vm._v(" "), (_vm.showOk) ? _c('a', {
	    staticClass: "button is-primary",
	    class: {
	      'is-loading': _vm.isLoading
	    },
	    on: {
	      "click": _vm.handleOk
	    }
	  }, [_vm._v(_vm._s(_vm.okText))]) : _vm._e()])], 2) : _vm._e()])])], 1)])
	},staticRenderFns: []}

/***/ }),
/* 340 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "timeline-item",
	    class: _vm.typeClass
	  }, [(_vm.icon) ? _c('div', {
	    staticClass: "timeline-icon"
	  }, [_c('i', {
	    staticClass: "fa",
	    class: _vm.iconClass
	  })]) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "timeline-item-main"
	  }, [_c('div', {
	    staticClass: "timeline-item-date"
	  }, [_vm._v(_vm._s(_vm.date))]), _vm._v(" "), _c('div', {
	    staticClass: "timeline-item-content"
	  }, [_vm._t("default")], 2)])])
	},staticRenderFns: []}

/***/ }),
/* 341 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": _vm.transitionName
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isShow),
	      expression: "isShow"
	    }],
	    staticClass: "notification alert",
	    class: [_vm.typeClass, _vm.hasIcon]
	  }, [(_vm.closable) ? _c('span', {
	    staticClass: "close",
	    on: {
	      "click": _vm.handleClose
	    }
	  }, [_vm._v("×")]) : _vm._e(), _vm._v(" "), (_vm.iconClass) ? _c('div', {
	    staticClass: "wrap-icon"
	  }, [_c('i', {
	    class: ['fa', ("fa-" + _vm.iconClass), _vm.faSpin]
	  })]) : _vm._e(), _vm._v(" "), (_vm.title) ? _c('div', {
	    staticClass: "title is-5"
	  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "notification-content",
	    domProps: {
	      "innerHTML": _vm._s(_vm.content)
	    }
	  })])])
	},staticRenderFns: []}

/***/ }),
/* 342 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    staticClass: "blu-ipt-number control has-addons",
	    class: {
	      'is-disabled': _vm.disabled
	    }
	  }, [(_vm.mode === 's') ? _c('a', {
	    staticClass: "button",
	    class: [_vm.sizeClass],
	    on: {
	      "click": _vm.decrease
	    }
	  }, [_vm._m(0)]) : _vm._e(), _vm._v(" "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.interVal),
	      expression: "interVal"
	    }],
	    staticClass: "input",
	    class: [_vm.sizeClass],
	    attrs: {
	      "type": "text"
	    },
	    domProps: {
	      "value": (_vm.interVal)
	    },
	    on: {
	      "keydown": _vm.handleKeyDown,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.interVal = $event.target.value
	      }
	    }
	  }), _vm._v(" "), (_vm.mode !== 's') ? _c('a', {
	    staticClass: "button",
	    class: [_vm.sizeClass],
	    on: {
	      "click": _vm.decrease
	    }
	  }, [_vm._m(1)]) : _vm._e(), _vm._v(" "), _c('a', {
	    staticClass: "button",
	    class: [_vm.sizeClass],
	    on: {
	      "click": _vm.increase
	    }
	  }, [_vm._m(2)])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    staticClass: "icon is-small"
	  }, [_c('i', {
	    staticClass: "fa fa-minus"
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    staticClass: "icon is-small"
	  }, [_c('i', {
	    staticClass: "fa fa-minus"
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    staticClass: "icon is-small"
	  }, [_c('i', {
	    staticClass: "fa fa-plus"
	  })])
	}]}

/***/ }),
/* 343 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', {
	    class: {
	      'is-active': _vm.isActive
	    }
	  }, [(!_vm.hasChildren) ? _c('span', [(!_vm.click) ? _c('router-link', {
	    attrs: {
	      "to": _vm.to,
	      "exact": ""
	    }
	  }, [(_vm.icon) ? _c('i', {
	    staticClass: "fa",
	    class: [("fa-" + _vm.icon)]
	  }) : _vm._e(), _vm._v(" "), _vm._t("default")], 2) : _vm._e(), _vm._v(" "), (_vm.click) ? _c('a', {
	    attrs: {
	      "href": "javascript:void(0)"
	    },
	    on: {
	      "click": _vm.click
	    }
	  }, [(_vm.icon) ? _c('i', {
	    staticClass: "fa",
	    class: [("fa-" + _vm.icon)]
	  }) : _vm._e(), _vm._v(" "), _vm._t("default")], 2) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (_vm.hasChildren) ? _c('span', [_c('a', {
	    staticClass: "has-children",
	    class: {
	      'is-active': _vm.isActive, 'is-open': _vm.isOpen,
	    },
	    attrs: {
	      "href": "javascript:void(0)"
	    },
	    on: {
	      "click": _vm.toggle
	    }
	  }, [(_vm.icon) ? _c('i', {
	    staticClass: "fa",
	    class: [("fa-" + _vm.icon)]
	  }) : _vm._e(), _vm._v(" "), _vm._t("default"), _vm._v(" "), _c('span', {
	    staticClass: "nav-right"
	  }, [_c('i', {
	    staticClass: "fa",
	    class: [_vm.arrowClass]
	  })])], 2)]) : _vm._e(), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isOpen),
	      expression: "isOpen"
	    }]
	  }, [_vm._t("sub")], 2)])
	},staticRenderFns: []}

/***/ }),
/* 344 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', [_vm._t("default"), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "fade"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isShow),
	      expression: "isShow"
	    }],
	    ref: "popper",
	    staticClass: "popover popover-confirm",
	    style: (_vm.popperStyle)
	  }, [(_vm.title) ? _c('div', {
	    staticClass: "popover-title"
	  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "popover-content"
	  }, [_c('article', {
	    staticClass: "media",
	    class: [_vm.typeClass]
	  }, [(_vm.icon) ? _c('div', {
	    staticClass: "media-left"
	  }, [_c('i', {
	    staticClass: "fa",
	    class: [_vm.iconClass]
	  })]) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "media-content"
	  }, [_vm._v(_vm._s(_vm.content))])])]), _vm._v(" "), _c('div', {
	    staticClass: "popover-footer"
	  }, [(_vm.showCancel) ? _c('a', {
	    staticClass: "button is-small",
	    on: {
	      "click": _vm.handleCancel
	    }
	  }, [_vm._v(_vm._s(_vm.cancelText))]) : _vm._e(), _vm._v(" "), (_vm.showOk) ? _c('a', {
	    staticClass: "button is-small is-primary",
	    on: {
	      "click": _vm.handleOk
	    }
	  }, [_vm._v(_vm._s(_vm.okText))]) : _vm._e()]), _vm._v(" "), _c('div', {
	    staticClass: "popover-arrow",
	    attrs: {
	      "x-arrow": ""
	    }
	  })])])], 2)
	},staticRenderFns: []}

/***/ }),
/* 345 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('label', {
	    staticClass: "radio blu-radio",
	    class: [{
	      'on': _vm.isChecked
	    }, _vm.typeClass, {
	      'is-disabled': _vm.disabled
	    }],
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	        return _vm.toggle($event)
	      }
	    }
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.model),
	      expression: "model"
	    }],
	    ref: "checkbox",
	    attrs: {
	      "type": "radio",
	      "name": _vm.name,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "checked": _vm.isChecked,
	      "value": _vm.val,
	      "checked": _vm._q(_vm.model, _vm.val)
	    },
	    on: {
	      "change": function($event) {
	        _vm.model = _vm.val
	      }
	    }
	  }), _vm._v(" "), _c('span', [_vm._t("default")], 2)])
	},staticRenderFns: []}

/***/ }),
/* 346 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": "fade"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.active),
	      expression: "active"
	    }],
	    staticClass: "step-panel"
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}

/***/ }),
/* 347 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "card is-fullwidth collapse-item",
	    class: {
	      'is-active': _vm.isOpen
	    }
	  }, [_c('header', {
	    staticClass: "card-header",
	    on: {
	      "click": _vm.toggle
	    }
	  }, [_c('div', {
	    staticClass: "card-header-title",
	    domProps: {
	      "innerHTML": _vm._s(_vm.title)
	    }
	  }), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": ""
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isOpen),
	      expression: "isOpen"
	    }],
	    staticClass: "card-content"
	  }, [_c('div', {
	    staticClass: "content"
	  }, [_vm._t("default")], 2)])])], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    staticClass: "card-header-icon"
	  }, [_c('i', {
	    staticClass: "fa fa-angle-right"
	  })])
	}]}

/***/ }),
/* 348 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ }),
/* 349 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "progress-wrap",
	    class: [_vm.infoOutsideClass]
	  }, [_c('div', {
	    staticClass: "progress",
	    class: [_vm.stripedClass, _vm.animatedClass, _vm.sizeClass]
	  }, [_c('div', {
	    staticClass: "progress-bar",
	    class: [_vm.typeClass, _vm.sizeClass],
	    style: ({
	      width: _vm.percent + '%'
	    })
	  }, [(_vm.showinfo) ? _c('span', {
	    staticClass: "progress-info"
	  }, [_vm._v(_vm._s(_vm.info))]) : _vm._e()])])])
	},staticRenderFns: []}

/***/ }),
/* 350 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "timeline"
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ }),
/* 351 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "table-toolbar level"
	  }, [_c('div', {
	    staticClass: "level-left"
	  }, [(_vm.hasRefresh) ? _c('div', {
	    staticClass: "level-item"
	  }, [_c('a', {
	    staticClass: "button is-primary",
	    on: {
	      "click": _vm.handleRefresh
	    }
	  }, [_c('i', {
	    staticClass: "fa fa-refresh"
	  })])]) : _vm._e(), _vm._v(" "), (_vm.hasColumnsControl) ? _c('div', {
	    staticClass: "level-item"
	  }, [_c('dropdown', [_c('a', {
	    staticClass: "button is-primary",
	    on: {
	      "click": _vm.handleRefresh
	    }
	  }, [_c('i', {
	    staticClass: "fa fa-eye"
	  })]), _vm._v(" "), _c('div', {
	    attrs: {
	      "slot": "content"
	    },
	    slot: "content"
	  }, [_c('menus', _vm._l((_vm.columns), function(column, index) {
	    return _c('menu-item', {
	      attrs: {
	        "icon": "user",
	        "icon": column.isShowIcon,
	        "click": _vm.handleColumnControl.bind(this, index)
	      }
	    }, [_vm._v(_vm._s(column.label))])
	  }))], 1)])], 1) : _vm._e(), _vm._v(" "), _vm._t("left")], 2), _vm._v(" "), _c('div', {
	    staticClass: "level-right"
	  }, [_vm._t("right")], 2)])
	},staticRenderFns: []}

/***/ }),
/* 352 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": _vm.transition
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isActive),
	      expression: "isActive"
	    }],
	    staticClass: "tab-pane",
	    class: {
	      'is-active': _vm.isActive
	    }
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}

/***/ }),
/* 353 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": "fade"
	    }
	  }, [_c('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isShow),
	      expression: "isShow"
	    }],
	    staticClass: "tag",
	    class: [_vm.typeClass, _vm.sizeClass, _vm.roundedClass],
	    style: (_vm.colorStyle)
	  }, [_vm._t("default"), _vm._v(" "), (_vm.closable) ? _c('button', {
	    staticClass: "delete",
	    class: _vm.btnClass,
	    on: {
	      "click": _vm.handleClose
	    }
	  }) : _vm._e()], 2)])
	},staticRenderFns: []}

/***/ }),
/* 354 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "data-table-container"
	  }, [_vm._t("default"), _vm._v(" "), (_vm.height) ? _c('div', {
	    ref: "header",
	    staticClass: "data-table-header"
	  }, [_c('table', {
	    staticClass: "table data-table",
	    class: {
	      'is-bordered': _vm.bordered, 'is-striped': _vm.striped, 'is-narrow': _vm.narrow
	    }
	  }, [_c('colgroup', _vm._l((_vm.cols), function(col) {
	    return _c('col', {
	      attrs: {
	        "width": col
	      }
	    })
	  })), _vm._v(" "), _c('table-header', {
	    attrs: {
	      "data": _vm.showData,
	      "showIndex": _vm.showIndex
	    }
	  })], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "data-table-main",
	    style: (_vm.mainStyle)
	  }, [_c('table', {
	    staticClass: "table data-table",
	    class: {
	      'is-bordered': _vm.bordered, 'is-striped': _vm.striped, 'is-narrow': _vm.narrow
	    }
	  }, [_c('colgroup', _vm._l((_vm.cols), function(col) {
	    return _c('col', {
	      attrs: {
	        "width": col
	      }
	    })
	  })), _vm._v(" "), (!_vm.height) ? [_c('table-header', {
	    attrs: {
	      "state": _vm.state,
	      "checkable": _vm.checkable,
	      "showIndex": _vm.showIndex
	    }
	  })] : _vm._e(), _vm._v(" "), _c('table-body', {
	    attrs: {
	      "state": _vm.state,
	      "checkable": _vm.checkable,
	      "data": _vm.showData,
	      "showIndex": _vm.showIndex
	    }
	  })], 2)]), _vm._v(" "), (_vm.totalCnt) ? _c('pagination', {
	    attrs: {
	      "layout": _vm.pagination.layout,
	      "total": _vm.totalCnt,
	      "align": _vm.pagination.position,
	      "change": _vm.handlePageChange,
	      "pageSizeChange": _vm.handlePageSizeChange
	    }
	  }) : _vm._e()], 2)
	},staticRenderFns: []}

/***/ }),
/* 355 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', [_vm._t("default"), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "fade"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isShow),
	      expression: "isShow"
	    }],
	    ref: "popper",
	    staticClass: "popover",
	    style: (_vm.popperStyle)
	  }, [(_vm.title) ? _c('div', {
	    staticClass: "popover-title"
	  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "popover-content"
	  }, [_vm._t("content", [_c('div', {
	    domProps: {
	      "textContent": _vm._s(_vm.content)
	    }
	  })])], 2), _vm._v(" "), _c('div', {
	    staticClass: "popover-arrow",
	    attrs: {
	      "x-arrow": ""
	    }
	  })])])], 2)
	},staticRenderFns: []}

/***/ }),
/* 356 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('label', {
	    staticClass: "switch-wrap",
	    class: [{
	      'is-disabled': _vm.disabled
	    }, _vm.sizeClass],
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	        return _vm.toggle($event)
	      }
	    }
	  }, [_c('input', {
	    staticStyle: {
	      "display": "none"
	    },
	    attrs: {
	      "type": "checkbox",
	      "name": _vm.name
	    },
	    domProps: {
	      "checked": _vm.on
	    }
	  }), _vm._v(" "), _c('span', {
	    staticClass: "switchery",
	    class: [{
	      'on': _vm.on
	    }, _vm.typeClass, _vm.sizeClass, {
	      'has-text': _vm.hasText
	    }]
	  }, [_c('small', {
	    staticClass: "switcher"
	  }), _vm._v(" "), _c('span', {
	    staticClass: "text"
	  }, [_vm._v(_vm._s(_vm.showText))])]), _vm._v(" "), _vm._t("default")], 2)
	},staticRenderFns: []}

/***/ }),
/* 357 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('transition', {
	    attrs: {
	      "name": "fade"
	    }
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isShow),
	      expression: "isShow"
	    }],
	    staticClass: "notification alert",
	    class: [_vm.typeClass, _vm.hasIcon]
	  }, [(_vm.closable) ? _c('button', {
	    staticClass: "delete",
	    on: {
	      "click": _vm.handleClose
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.title) ? _c('div', {
	    staticClass: "title"
	  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), (_vm.iconClass) ? _c('div', {
	    staticClass: "wrap-icon"
	  }, [_c('i', {
	    class: ['fa', ("fa-" + _vm.iconClass), _vm.faSpin]
	  })]) : _vm._e(), _vm._v(" "), _c('div', {
	    staticClass: "notification-content"
	  }, [_vm._t("default")], 2)])])
	},staticRenderFns: []}

/***/ }),
/* 358 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.isShow),
	      expression: "isShow"
	    }],
	    staticClass: "scroll-to",
	    class: {
	      'scroll-top': _vm.isPreset
	    },
	    on: {
	      "click": _vm.scrollTo
	    }
	  }, [_vm._t("default", [_c('span', {
	    staticClass: "icon"
	  }, [_c('i', {
	    staticClass: "fa",
	    class: [_vm.iconClass]
	  })])])], 2)
	},staticRenderFns: []}

/***/ }),
/* 359 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "collapse-wrap"
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ })
/******/ ])
});
;
//# sourceMappingURL=vue-blu.js.map