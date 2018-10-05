import { fromJS, List } from 'immutable';

import { ADD_TASK, DELETE_TASK, CHANGE_INPUT_VALUE } from './constants';


// The initial state of the App
export const initialState = fromJS (
    {
        array: new List([]),
        inputValue:'',
		inputName: "",
		inputDate: "",
		inputTime: "",
		comments: "",
    }
);

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK: {
            return state.set('array', state.get('array').push({ text: state.get('inputValue') })).set('inputValue','');
        }
        case DELETE_TASK: {
            const index = state.get('array').indexOf(action.payload);
            return state.set('array', state.get('array').delete(index));
        }
        case CHANGE_INPUT_VALUE: {
            return state.set('inputValue', action.payload);
        }
        default:
            return state;
    }
}

export default reducer;