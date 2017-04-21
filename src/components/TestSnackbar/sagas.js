import { delay } from 'redux-saga'
import { put, takeEvery, call  } from 'redux-saga/effects'
import * as actionTypes from './actionTypes'

function* helloSnackbar()
{
    yield call(console.log,'Hello Snackbar')
}

export function* watchHelloSnackbar() 
{
    yield takeEvery(actionTypes.HELLO_SNACKBAR, helloSnackbar)
}
