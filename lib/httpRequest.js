/**
 * Created by roderickWang on 7/22/15.
 */
import {HTTP_ADDRESS} from '../constants/AppConstants'
import {httpFaild} from './actionLib'
import {LOADING,CLOSE_ALERT} from '../constants/ActionTypes'
import $ from 'jquery'

const SERVER_ERROR = '服务器通讯异常';
export default function (address, type = 'POST', params = {}, sucFuc, dispatch, loading = true) {
    let postfix = "";

    if (window.location.origin.indexOf("localhost") != -1 && window.location.port=="3000") {
        type = 'GET'
        postfix = ".json";
    }

    let failFunc = httpFaild.bind(null, dispatch);

    if (loading) {
        dispatch({
            type: LOADING,
            data: {
                show: true
            }
        });
    }

    $.ajax({
        type: type,
        url: HTTP_ADDRESS + address + postfix + "?uid=" + new Date(),
        data: JSON.stringify(params),
        timeout: 30000,
        "contentType": "application/json; charset=utf-8",
        success: function (data) {
            if (loading) {
                dispatch({
                    type: LOADING,
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
        error: function (xhr, errorType, error) {
            if (loading) {
                dispatch({
                    type: LOADING,
                    data: {
                        show: false
                    }
                });
            }
            failFunc(SERVER_ERROR);
        }
    });
}