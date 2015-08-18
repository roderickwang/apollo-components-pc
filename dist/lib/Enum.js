/**
 * Created by roderickWang on 7/26/15.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _EnumSymbol = require('./EnumSymbol');

var _EnumSymbol2 = _interopRequireDefault(_EnumSymbol);

var Enum = (function () {
    function Enum(enumLiterals) {
        _classCallCheck(this, Enum);

        for (var key in enumLiterals) {
            if (!enumLiterals[key]) throw new TypeError('each enum should have been initialized with atleast empty {} value');
            this[key] = new _EnumSymbol2['default'](key, enumLiterals[key]);
        }
        Object.freeze(this);
    }

    _createClass(Enum, [{
        key: 'symbols',
        value: function symbols() {
            var _this = this;

            return (function () {
                var _ref = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = Object.keys(_this)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var key = _step.value;

                        _ref.push(_this[key]);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator['return']) {
                            _iterator['return']();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                return _ref;
            })();
        }
    }, {
        key: 'keys',
        value: function keys() {
            return Object.keys(this);
        }
    }, {
        key: 'contains',
        value: function contains(sym) {
            if (!(sym instanceof _EnumSymbol2['default'])) return false;
            return this[Symbol.keyFor(sym.sym)] === sym;
        }
    }]);

    return Enum;
})();

exports['default'] = Enum;
module.exports = exports['default'];