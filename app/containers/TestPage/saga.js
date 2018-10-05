import { take, call, fork, put } from 'redux-saga/effects';

import { MAKE_PLUS } from './constants';

import { makePlusSuccesFromServerAction } from './actions';

function* plusWatcher() {
    console.log('start plus saga');
    while (true) {
        console.log('zdem plus');
        const action = yield take(MAKE_PLUS);
        console.log('shodili na server');

        yield put(makePlusSuccesFromServerAction());


    }
}

export default function* testSaga() {
    console.log('start saga');
    yield fork(plusWatcher);
}