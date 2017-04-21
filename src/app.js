import 'babel-polyfill'
import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { Provider } from 'react-redux'

import { store } from './conf'
import Counter from './components/Counter'
import TestSnackbar from './components/TestSnackbar'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const App = function()
{
    return (
        <Provider store={store}>
            <Counter></Counter>
        </Provider>
    )
}

render(
    <App></App>,
    document.getElementById('root')
)
