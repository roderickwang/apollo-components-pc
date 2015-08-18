/**
 * Created by roderickWang on 8/13/15.
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

var _decoratorsPublicStyles = require('../decorators/PublicStyles');

var _decoratorsPublicStyles2 = _interopRequireDefault(_decoratorsPublicStyles);

var _reactBootstrap = require('react-bootstrap');

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

var SideNav = (function (_Component) {
    _inherits(SideNav, _Component);

    function SideNav(props) {
        _classCallCheck(this, SideNav);

        _get(Object.getPrototypeOf(SideNav.prototype), 'constructor', this).call(this, props);
        this.state = {
            navMenu: props.navMenu.navMenu,
            selectIndex: null,
            hoverIndex: null
        };
    }

    _createClass(SideNav, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var list = this.state.navMenu;
            var styles = this.getStyles();
            return _react2['default'].createElement(
                'ol',
                { style: { padding: 0 } },
                list.map(function (menu1l, index) {
                    if (menu1l.children == null) {
                        return _react2['default'].createElement(
                            'a',
                            { style: { textDecoration: 'none' }, href: menu1l.path },
                            _react2['default'].createElement(
                                'li',
                                { style: (0, _extend2['default'])(false, _this.selectStyle(index), styles.noStyleLi),
                                    key: index,
                                    onClick: _this.selectNav.bind(_this, index),
                                    onMouseOver: _this.hover.bind(_this, index),
                                    onMouseOut: _this.leave.bind(_this, index)
                                },
                                menu1l.text
                            )
                        );
                    } else {
                        return _react2['default'].createElement(
                            'div',
                            { key: index },
                            _react2['default'].createElement(
                                'li',
                                { style: styles.noStyleLi, key: index,
                                    onClick: _this.changeNavHide.bind(_this, index)
                                },
                                menu1l.text,
                                _react2['default'].createElement(
                                    'span',
                                    { style: { float: 'right', marginTop: '12px' } },
                                    _react2['default'].createElement(_reactBootstrap.Glyphicon, { bsSize: 'xsmall',
                                        glyph: menu1l.hide ? 'chevron-right' : 'chevron-down'

                                    })
                                )
                            ),
                            _react2['default'].createElement(
                                'ol',
                                { style: { padding: 0, display: menu1l.hide ? 'none' : 'block' } },
                                menu1l.children.map(function (menu2l, index2) {
                                    return _react2['default'].createElement(
                                        'a',
                                        { style: { textDecoration: 'none' }, href: menu2l.path },
                                        _react2['default'].createElement(
                                            'li',
                                            {
                                                style: (0, _extend2['default'])(false, _this.selectStyle(index + ',' + index2), styles.noStyleLi, { paddingLeft: '35px' }),
                                                key: index + ',' + index2,
                                                onClick: _this.selectNav.bind(_this, index + ',' + index2),
                                                onMouseOver: _this.hover.bind(_this, index + ',' + index2),
                                                onMouseOut: _this.leave.bind(_this, index + ',' + index2)
                                            },
                                            menu2l.text
                                        )
                                    );
                                })
                            )
                        );
                    }
                })
            );
        }
    }, {
        key: 'selectStyle',
        value: function selectStyle(path) {
            if (path == this.state.selectIndex) {
                return {
                    background: '#3565AD',
                    color: '#fff'
                };
            }

            if (path == this.state.hoverIndex) {
                return {
                    background: '#BCE8F1',
                    color: '#000'
                };
            }

            return {
                background: '',
                color: '#000'
            };
        }
    }, {
        key: 'selectNav',
        value: function selectNav(index) {
            this.setState({
                selectIndex: index
            });
        }
    }, {
        key: 'changeNavHide',
        value: function changeNavHide(index) {
            var newNav = this.state.navMenu;
            newNav[index].hide = !this.state.navMenu[index].hide;
            this.setState({
                navMenu: newNav
            });
        }
    }, {
        key: 'hover',
        value: function hover(index) {
            this.setState({
                hoverIndex: index
            });
        }
    }, {
        key: 'leave',
        value: function leave() {
            this.setState({
                hoverIndex: null
            });
        }
    }, {
        key: 'getStyles',
        value: function getStyles() {
            var styles = {
                noStyleLi: {
                    listStyle: 'none',
                    cursor: 'pointer',
                    borderBottom: '1px solid #ebebeb',
                    height: '42px',
                    lineHeight: '42px',
                    paddingLeft: '28px',
                    width: '180px'
                }
            };
            return styles;
        }
    }], [{
        key: 'proTypes',
        value: {
            navMenu: _react.PropTypes.array
        },
        enumerable: true
    }]);

    return SideNav;
})(_react.Component);

exports['default'] = SideNav;
module.exports = exports['default'];