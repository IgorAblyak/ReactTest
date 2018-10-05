import { MAKE_PLUS, MAKE_MINUS, MAKE_PLUS_SUCCESS_FROM_SERVER } from './constants';

export function makePlusAction() {
    return {
        type: MAKE_PLUS,
        payload: 1,
    }
}

export function makeMinusAction() {
    return {
        type: MAKE_MINUS,
    }
}

export function makePlusSuccesFromServerAction() {
    return {
        type: MAKE_PLUS_SUCCESS_FROM_SERVER,
    }
}


