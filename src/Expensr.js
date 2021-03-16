import React, { useContext, useEffect } from 'react'
import { Context } from './Store'
import './Expensr.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
import Expenses from './components/Expenses/Expenses'
import Report from './components/Report/Report'

function Expensr() {
  const [state, dispatch] = useContext(Context)

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(users => {
        const user = users[1]
        console.log(users[0])
        dispatch({type: 'SET_LOGIN', payload: true})
        dispatch({type: 'SET_USER', payload: user})
        dispatch({type: 'SET_EXPENSES', payload: user.expenses})
      })
      .catch(err => console.log('Error in Expensr.js: ', err))
    }, [dispatch])

  return (
    <div className='expensr'>
      {
        state.login ? 
          <Router>
            <Navbar/>
              <Switch>
                <Route path='/expenses'><Expenses /></Route>
                <Route path='/report'><Report /></Route>
                <Route path='/'><Dashboard/></Route>
              </Switch>
          </Router>
          :
          <Home />
      }
    </div>
  );
}

export default Expensr;

// Components: 
//    Homepage -> User Authentication; Sign in/up
//    Expensr Container
//     Navbar
//     Dashboard, Expenses, Report

// 1. User authentication: SignIn and Signup
// 2. Provide three pages - Dashboard, Expenses, and reports accessible through a navbar.

// 6. The front-end must be a Single-Page-Expensrlication.