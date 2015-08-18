/**
 * Created by roderickWang on 7/26/15.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EnumSymbol = (function () {
    function EnumSymbol(name, _ref) {
        var value = _ref.value;
        var description = _ref.description;

        _classCallCheck(this, EnumSymbol);

        this.__initializeProperties();

        if (!Object.is(value, undefined)) this.value = value;
        if (description) this.description = description;

        Object.freeze(this);
    }

    _createClass(EnumSymbol, [{
        key: "toString",
        value: function toString() {
            return this.sym;
        }
    }, {
        key: "valueOf",
        value: function valueOf() {
            return this.value;
        }
    }, {
        key: "__initializeProperties",
        value: function __initializeProperties() {
            this.sym = Symbol["for"](name);
        }
    }, {
        key: "display",
        get: function get() {
            return this.description || Symbol.keyFor(this.sym);
        }
    }]);

    return EnumSymbol;
})();

exports["default"] = EnumSymbol;
module.exports = exports["default"];