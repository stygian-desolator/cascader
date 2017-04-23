webpackJsonp([3],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(314);


/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _rcCascader = __webpack_require__(3);
	
	var _rcCascader2 = _interopRequireDefault(_rcCascader);
	
	var _react = __webpack_require__(6);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(83);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var options = [{
	  value: 'zhejiang',
	  label: '浙江',
	  children: [{
	    value: 'hangzhou',
	    label: '杭州',
	    children: [{
	      value: 'xihu',
	      label: '西湖'
	    }]
	  }]
	}, {
	  value: 'jiangsu',
	  label: '江苏',
	  children: [{
	    value: 'nanjing',
	    label: '南京',
	    children: [{
	      value: 'zhonghuamen',
	      label: '中华门'
	    }]
	  }]
	}];
	
	var App = function (_React$Component) {
	  _inherits(App, _React$Component);
	
	  function App() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, App);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
	      inputValue: '',
	      value: []
	    }, _this.onChange = function (value, selectedOptions) {
	      var lastSelected = selectedOptions[selectedOptions.length - 1];
	      if (lastSelected.children && lastSelected.children.length === 1) {
	        value.push(lastSelected.children[0].value);
	        _this.setState({
	          inputValue: selectedOptions.map(function (o) {
	            return o.label;
	          }).join(', '),
	          value: value
	        });
	        return;
	      }
	      _this.setState({
	        inputValue: selectedOptions.map(function (o) {
	          return o.label;
	        }).join(', '),
	        value: value
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  App.prototype.render = function render() {
	    return _react2.default.createElement(
	      _rcCascader2.default,
	      { options: options, value: this.state.value, changeOnSelect: true, onChange: this.onChange },
	      _react2.default.createElement('input', { value: this.state.inputValue, readOnly: true })
	    );
	  };
	
	  return App;
	}(_react2.default.Component);
	
	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('__react-content'));

/***/ })

});
//# sourceMappingURL=default-expand-single-option.js.map