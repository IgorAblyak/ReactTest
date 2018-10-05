/*
 */
import { fromJS } from 'immutable';

import { MAKE_MINUS, MAKE_PLUS, MAKE_PLUS_SUCCESS_FROM_SERVER } from './constants';


// The initial state of the App
export const initialState = fromJS(
    {
        chislo: 0,
    }
);

function testReducer(state = initialState, action) {
    switch (action.type) {
        case MAKE_PLUS:
            return state.set('chislo', state.get('chislo') + 1);
        case MAKE_MINUS:
            return state.set('chislo', state.get('chislo') - 1);
        case MAKE_PLUS_SUCCESS_FROM_SERVER: {
            console.log('chtoto sdelaem');
            return state;
        }
        default:
            return state;
    }
}

export default testReducer;
