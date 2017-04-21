import { delay } from 'redux-saga'
import { put, takeEvery, call } from 'redux-saga/effects'
import * as consts from './consts'

export function* helloSaga()
{
    console.log('hello saga.')
}

export function* incrementAsync()
{
    console.log('test 1')
    yield call(delay, 1000)
    yield put({type: consts.INCREMENT})
}

export function* watchIncrementAsync()
{
    console.log(consts.INCREMENT_ASYNC)
    yield takeEvery(consts.INCREMENT_ASYNC, incrementAsync)
}

