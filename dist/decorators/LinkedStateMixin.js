'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _libGetDisplayName = require('../lib/getDisplayName');

var _libGetDisplayName2 = _interopRequireDefault(_libGetDisplayName);

var _react = require('react');

var _libReactLink = require('../lib/ReactLink');

var _libReactLink2 = _interopRequireDefault(_libReactLink);

var _libReactStateSetters = require('../lib/ReactStateSetters');

var _libReactStateSetters2 = _interopRequireDefault(_libReactStateSetters);

exports['default'] = function (DecoratedComponent) {
    DecoratedComponent.prototype.linkState = function (key) {
        return new _libReactLink2['default'](this.state[key], _libReactStateSetters2['default'].createStateKeySetter(this, key));
    };

    /**
     * Notify store via action register by registerAction function.
     * @param path The deep path of store. example : favor.discount.ratio
     * @param value The change value
     */
    DecoratedComponent.prototype.notifyDeepValue = function (path, value) {
        var Pathes = path.split('.');
    };
};

module.exports = exports['default'];