'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _CookiesProvider = require('../utils/CookiesProvider');

var _MetaHelmet = require('../common/MetaHelmet');

var _MetaHelmet2 = _interopRequireDefault(_MetaHelmet);

var _CommonUtil = require('../utils/CommonUtil');

var _Header = require('../common/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Main is a Presentational Component
var Main = function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: 'setAccessToken',
    value: function setAccessToken() {
      _CookiesProvider.cookies.set('accesstoken', 'EVIQXN0QA7JS0D0HGMLB7GVFDC3OZWPT');
      console.log('cookie set');
    }
  }, {
    key: 'printToken',
    value: function printToken() {
      console.log(_CookiesProvider.cookies.get('accesstoken'));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$user = this.props.user,
          _props$user$login = _props$user.login,
          login = _props$user$login === undefined ? 'loading' : _props$user$login,
          _props$user$name = _props$user.name,
          name = _props$user$name === undefined ? 'loading' : _props$user$name;

      return _react2.default.createElement(
        _CommonUtil.Aux,
        null,
        _react2.default.createElement(_MetaHelmet2.default, { title: name }),
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'bold' },
          _react2.default.createElement(
            'h2',
            null,
            'GitHub User Details:'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Username: ' + login
          ),
          _react2.default.createElement(
            'p',
            null,
            'Name: ' + name
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/aboutus' },
            'About Us'
          ),
          _react2.default.createElement(
            'button',
            { onClick: this.setAccessToken },
            'Fake Login'
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'button',
            { onClick: this.printToken },
            'Print accesstoken'
          )
        )
      );
    }
  }]);

  return Main;
}(_react.Component);

exports.default = Main;