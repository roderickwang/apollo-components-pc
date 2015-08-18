/**
 * Created by roderickWang on 7/31/15.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = createStore;

function createStore(initialState, handlers) {
    return function (state, action) {
        if (state === undefined) state = initialState;

        return handlers[action.type] ? handlers[action.type](state, action) : state;
    };
}

module.exports = exports["default"];