"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var RadioTabGroup = (function (_Component) {
  _inherits(RadioTabGroup, _Component);

  _createClass(RadioTabGroup, null, [{
    key: "propTypes",
    value: {
      name: _react.PropTypes.string.isRequired,
      label: _react.PropTypes.string.isRequired,
      options: _react.PropTypes.array.isRequired,
      defaultValue: _react.PropTypes.number.isRequired,
      toToSelect: _react.PropTypes.func.isRequired
    },
    enumerable: true
  }]);

  function RadioTabGroup(props, context) {
    _classCallCheck(this, RadioTabGroup);

    _get(Object.getPrototypeOf(RadioTabGroup.prototype), "constructor", this).call(this, props, context);
  }

  _createClass(RadioTabGroup, [{
    key: "getStyles",
    value: function getStyles() {
      return {
        radioItem: {
          marginTop: "10px"
        },
        span: {
          display: "inline-block",
          padding: "5px",
          marginLeft: "10px"
        },
        chked: {
          display: "inline-block",
          padding: "5px",
          marginLeft: "15px",
          backgroundColor: "#3167af",
          color: "white"
        },
        label: {
          width: "60px",
          textAlign: "right"
        }
      };
    }
  }, {
    key: "setValue",
    value: function setValue(e) {
      var data = {},
          value = e.target.getAttribute("value");
      data[this.props.name] = value ? parseInt(value) : null;
      this.props.toToSelect(data);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var styles = this.getStyles();
      return _react2["default"].createElement(
        "div",
        { style: styles.radioItem },
        _react2["default"].createElement(
          "label",
          { style: styles.label },
          this.props.label
        ),
        this.props.value.map(function (option) {
          return _react2["default"].createElement(
            "span",
            { style: _this.props.defaultValue !== option.value ? styles.span : styles.chked,
              value: option.value,
              onClick: _this.setValue.bind(_this) },
            option.text
          );
        })
      );
    }
  }]);

  return RadioTabGroup;
})(_react.Component);

exports["default"] = RadioTabGroup;
module.exports = exports["default"];