import React from 'react'
import getSymbolFromCurrency from 'currency-symbol-map'

function Transactions({ transactions }) {
    if (transactions.length) {
        return (
            <div className=''>
            {transactions.map(({amount, category, currency, date, description}) => 
                <div className="ba b--light-gray tc ma2 shadow-1 pa2 grow" style={{cursor:'pointer'}}>
                    <div className="f5 fw6 black-70 ma0 pv1">Date: {new Date(date).toLocaleString()}</div>
                    <div className="f5 fw6 black-70 ma0 pv1">Category: {category.toUpperCase()}</div>
                    <div className="f5 fw6 black-70 ma0 pv1">Description: {description}</div>
                    <div className="f3 black-70 fw3 ttu pt2 hover-green">{amount}</div>
                </div>
            )}
            </div>
        )
    }
    else { return <h1>No Transactions to Display!</h1>}
}

export default Transactions

