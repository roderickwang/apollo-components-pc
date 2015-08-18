/**
 * Created by roderickWang on 7/28/15.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _decoratorsLinkedStateMixin = require('../decorators/LinkedStateMixin');

var _decoratorsLinkedStateMixin2 = _interopRequireDefault(_decoratorsLinkedStateMixin);

var SearchInput = (function (_Component) {
    _inherits(SearchInput, _Component);

    function SearchInput(props) {
        _classCallCheck(this, _SearchInput);

        _get(Object.getPrototypeOf(_SearchInput.prototype), 'constructor', this).call(this, props);
        this.state = {
            show: false,
            text: '',
            id: '',
            listKey: props.listKey || 'value',
            listText: props.listText || 'text',
            overlaySelected: 0
        };
    }

    _createClass(SearchInput, [{
        key: 'toggle',
        value: function toggle(event) {
            this.focus = true;

            this.setState({
                text: event.target.value,
                id: ''
            });

            //increase effective
            if (event.target.value != '') {
                clearInterval(this.requesting);
                this.requesting = setTimeout((function (target) {
                    this.props.loadList(target.value);
                }).bind(this, event.target), 500);
            }
        }
    }, {
        key: 'hover',
        value: function hover(event) {
            //event.target.style.background = '#fff';
            this.setState({
                overlaySelected: event.target.dataset.name.substring(4)
            });
        }
    }, {
        key: 'leave',
        value: function leave(event) {
            //event.target.style.background = '';
        }
    }, {
        key: 'select',
        value: function select(city, close) {
            this.setState({
                text: city[this.state.listText],
                id: city[this.state.listKey]
            });
            if (close) {
                this.setState({
                    show: false
                });
            }

            this.props.select(city[this.state.listKey]);
        }
    }, {
        key: 'onBlur',
        value: function onBlur() {
            var _this = this;

            this.focus = false;
            setTimeout(function () {
                return _this.setState({ show: false });
            }, 300);
        }
    }, {
        key: 'keyPress',
        value: function keyPress(event) {
            if (event.key == "ArrowDown") {
                var max = this.props.list.length;
                if (this.state.overlaySelected == undefined) {
                    this.setState({
                        overlaySelected: '0'
                    });
                } else if (this.state.overlaySelected < (max - 1 < 4 ? max - 1 : 4)) {
                    this.setState({
                        overlaySelected: parseInt(this.state.overlaySelected) + 1
                    });
                }
            } else if (event.key == "ArrowUp") {
                if (this.state.overlaySelected > 0) {
                    this.setState({
                        overlaySelected: parseInt(this.state.overlaySelected) - 1
                    });
                }
            } else if (event.key == "Enter") {
                this.select(this.props.list[this.state.overlaySelected], true);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            if (nextProps.list.length > 0 && this.focus) {
                var _find = nextProps.list.filter(function (city) {
                    return city[_this2.state.listText] == _this2.state.text;
                });
                if (_find.length > 0) {
                    nextProps.select(_find[0][this.state.listKey]);
                } else {
                    nextProps.select('');
                }
                this.setState({
                    show: true
                });
            } else {
                // nextProps.select('');
                this.setState({
                    show: false
                });
            }
        }
    }, {
        key: 'overlayItemStyle',
        value: function overlayItemStyle(i) {
            if (i == this.state.overlaySelected) {
                return { paddingLeft: 10, background: '#fff', cursor: 'pointer' };
            }
            return { paddingLeft: 10, cursor: 'pointer' };
        }
    }, {
        key: 'renderOverlay',
        value: function renderOverlay() {
            var result = [];
            var list = this.props.list;
            if (list) {
                var max = list.length < 5 ? list.length : 5;
                this.max = max;
                for (var i = 0; i < max; i++) {
                    var item = list[i];
                    result.push(_react2['default'].createElement(
                        'div',
                        { ref: 'over' + i, style: this.overlayItemStyle(i),
                            onMouseOver: this.hover.bind(this), onMouseLeave: this.leave,
                            onClick: this.select.bind(this, item, true),
                            key: item[this.state.listKey],
                            'data-name': 'over' + i
                        },
                        item[this.state.listText]
                    ));
                }
            }

            return result;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var style = {
                position: 'absolute',
                backgroundColor: '#EEE',
                boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
                border: '1px solid #CCC',
                borderRadius: 3,
                marginLeft: 15,
                marginTop: 0,
                padding: 10,
                zIndex: 10,
                width: '94%'
            };
            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(_reactBootstrap.Input, { ref: 'target', type: 'text',
                    placeholder: this.props.placeholder,
                    onChange: this.toggle.bind(this),
                    onFocus: this.toggle.bind(this),
                    onBlur: this.onBlur.bind(this),
                    value: this.state.text,
                    onKeyDown: this.keyPress.bind(this) }),
                _react2['default'].createElement(
                    _reactBootstrap.Overlay,
                    {

                        show: this.state.show,
                        onHide: function () {
                            return _this3.setState({ show: false });
                        },
                        placement: 'bottom',
                        container: this,
                        target: function (props) {
                            return _react2['default'].findDOMNode(_this3.refs.target);
                        }
                    },
                    _react2['default'].createElement(
                        'div',
                        { style: style },
                        this.renderOverlay()
                    )
                )
            );
        }
    }], [{
        key: 'proTypes',
        value: {
            placeholder: _react.PropTypes.string,
            select: _react.PropTypes.func,
            list: _react.PropTypes.array,
            loadList: _react.PropTypes.func,
            listKey: _react.PropTypes.string,
            listText: _react.PropTypes.string
        },
        enumerable: true
    }]);

    var _SearchInput = SearchInput;
    SearchInput = (0, _decoratorsLinkedStateMixin2['default'])(SearchInput) || SearchInput;
    return SearchInput;
})(_react.Component);

exports['default'] = SearchInput;
module.exports = exports['default'];