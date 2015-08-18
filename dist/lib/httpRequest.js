/**
 * Created by roderickWang on 7/22/15.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _constantsAppConstants = require('../constants/AppConstants');

var _actionLib = require('./actionLib');

var _constantsActionTypes = require('../constants/ActionTypes');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var SERVER_ERROR = '服务器通讯异常';

exports['default'] = function (address, type, params, sucFuc, dispatch) {
    if (type === undefined) type = 'POST';
    if (params === undefined) params = {};
    var loading = arguments.length <= 5 || arguments[5] === undefined ? true : arguments[5];

    var postfix = "";

    if (window.location.origin.indexOf("localhost") != -1 && window.location.port == "3000") {
        type = 'GET';
        postfix = ".json";
    }

    var failFunc = _actionLib.httpFaild.bind(null, dispatch);

    if (loading) {
        dispatch({
            type: _constantsActionTypes.LOADING,
            data: {
                show: true
            }
        });
    }

    _jquery2['default'].ajax({
        type: type,
        url: _constantsAppConstants.HTTP_ADDRESS + address + postfix + "?uid=" + new Date(),
        data: JSON.stringify(params),
        timeout: 30000,
        "contentType": "application/json; charset=utf-8",
        success: function success(data) {
            if (loading) {
                dispatch({
                    type: _constantsActionTypes.LOADING,
                    data: {
                        show: false
                    }
                });
            }
            if (typeof data === 'string') {
                data = JSON.parse(data);
            }

            if (data.code == 200 || data.code == undefined) {
                sucFuc(data);
            } else {
                failFunc(data.msg || SERVER_ERROR);
            }
        },
        error: function error(xhr, errorType, _error) {
            if (loading) {
                dispatch({
                    type: _constantsActionTypes.LOADING,
                    data: {
                        show: false
                    }
                });
            }
            failFunc(SERVER_ERROR);
        }
    });
};

module.exports = exports['default'];