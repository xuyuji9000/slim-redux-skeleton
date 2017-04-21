import 'babel-polyfill'
import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { Provider } from 'react-redux'

import Counter from './components/Counter'
import { store } from './conf'

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
