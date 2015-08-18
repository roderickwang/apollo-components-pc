/**
 * Created by roderickWang on 7/31/15.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _constantsActionTypes = require('../constants/ActionTypes');

var _constantsModalTypes = require('../constants/ModalTypes');

var httpFaild = function httpFaild(dispatch, data) {
    dispatch({
        type: _constantsActionTypes.AlertTypes.CHANGE_ALERT,
        data: {
            showModal: true,
            alertType: _constantsModalTypes.ModalTypes.ERROR_INFO,
            title: '错误',
            info: data || '服务器通讯异常'
        }
    });
};
exports.httpFaild = httpFaild;