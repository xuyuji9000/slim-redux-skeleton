import { delay } from 'redux-saga'
import { put, takeEvery, call  } from 'redux-saga/effects'
import * as consts from './consts'

export function* helloSnackbar()
{
    console.log('Hello Snackbar')
}
