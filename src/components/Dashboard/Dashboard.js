import React, {useState, useContext} from 'react'
import { Context } from '../../Store'

function Dashboard() {
    const [state] = useContext(Context)
    const {id, first_name, last_name, email} = state.user
    const expenses = state.expenses

    return (
        <div>
            <h1>Dashboard</h1>
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