import { SHOW_ALERT } from '../types';
import { HIDE_ALERT } from '../types';
const handlers = {
    [SHOW_ALERT]: (_, { payload }) => ({ ...payload, visible: true }),
    [HIDE_ALERT]: state => ({ ...state, visible: false }),

    DEFAULT: state => state
}

export const alertReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
}