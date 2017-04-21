import { delay } from 'redux-saga'
import { put, takeEvery, call } from 'redux-saga/effects'
import * as consts from './consts'

function* helloSaga()
{
    console.log('hello saga.')
}

function* incrementAsync()
{
    yield call(delay, 1000)
    yield put({type: consts.INCREMENT})
}

export function* watchIncrementAsync()
{
    yield takeEvery(consts.INCREMENT_ASYNC, incrementAsync)
}

