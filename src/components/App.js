import React, { useReducer } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm'
import Events from './Events'
import AppContext from '../contexts/AppContext'
import reducer from '../reducers'

console.log({AppContext})

const App = () => {
    const [state, dispatch] = useReducer(reducer, [])
    console.log(state, 'in App.js')

    return (
        <AppContext.Provider value={{ state, dispatch }}>
          <div className="container-fruid">
            <EventForm />
            <Events />
          </div>
        </AppContext.Provider>
    )
}

export default App