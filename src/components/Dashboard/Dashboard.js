import React, {useState, useContext} from 'react'
import { Context } from '../../Store'
import Transactions from './Transactions'
import {DisplayAmount} from '../Helpers'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

function Dashboard() {
    const [state] = useContext(Context)
    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Total Spent Amount</h2>
            <div className="ba b--light-gray tc ma2 shadow-1 pa2 w5 h4 grow hover-green">
                <MonetizationOnIcon className="f3" style={{ fontSize: 60 }}/>
                <div className="f5 fw6 black-70 ma0">Total Spend Amount</div>
                <div className="f3 black-70 fw3 ttu">{DisplayAmount(state.total)}</div>
            </div>
            <h2>Last 5 Transactions</h2>
            <Transactions transactions={state.lastFive} />
        </div>
    )
}

export default Dashboard





// import React, { useContext } from 'react'
// import Context from '../../Store'

//     const [state, dispatch] = useContext(Context)

// 3. Dashboard:
//    a. Show total spent amount
//    b. List last 5 transactionsf