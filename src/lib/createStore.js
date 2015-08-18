/**
 * Created by roderickWang on 7/31/15.
 */
export default function createStore(initialState, handlers) {
    return (state = initialState, action) => {
        return handlers[action.type] ?
            handlers[action.type](state, action) :
            state;
    }
}