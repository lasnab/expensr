import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {DisplayAmount} from '../Helpers'

function WeeklyExpense({ expenses }) {
    const lineOptions = {
        chart: { type: 'spline' },
        title: { text: 'Weekly Overview' },
        xAxis: { name: 'Weeks'},
        yAxis: { name: 'Spending'},
        series: { data: expenses.map(expense => expense.amount) }
      };
    
    if (expenses.length) {
        return (
            <div className='flex flex-wrap justify-center items-center' style={{ cursor: 'pointer'}}>
                <div className="flex flex-column ph6">
                {expenses.map(({currency, week, amount}) => 
                    <div className="ba b--light-gray tc ma2 shadow-1 w4 h3 grow">
                        <div className="f5 fw6 black-70 ma0 pt2">Week: {week}</div>
                        <div 
                            className="f3 black-70 fw3 ttu pt2 hover-green">
                                {DisplayAmount(amount)}
                        </div>
                    </div>
                )}
                </div>
                <HighchartsReact highcharts={Highcharts} options={lineOptions} />
            </div>
        )
    }
    else { return <h1>No Weekly Expenses to Show :(</h1>}

}

export default WeeklyExpense
