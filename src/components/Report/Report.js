import React, {useContext, useState} from 'react'
import { Context } from '../../Store'
import WeeklyExpenses from './WeeklyExpenses'
import CategoryExpenses from './CategoryExpenses'


function Report() {
    const [{weeklyExpenses, categoryExpenses}, dispatch] = useContext(Context)
    return (
        <div>
            <h1>Reports</h1>
            <h2>Category Overview</h2>
            <CategoryExpenses categoryExpenses={categoryExpenses}/>
            <h2>Weekly Overview</h2>
            <WeeklyExpenses expenses={weeklyExpenses} />
        </div>
    )
}

export default Report

// 5. Report:
//    a. Show total amount spent per week of the current month.
//    b. Show total amount spent per category basis on the current month.

/*
User 
    Name
    ID
    Email
    Password
    Expenses: {
        DateTime:
        Category:
        Amount:
        Currency:
        Description:
//    d. The categories are -- Home, Food, Fuel, Shopping and Other.
    }

*/