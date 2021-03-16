// https://blog.ag-grid.com/deleting-selected-rows-and-cell-ranges-via-key-press/#selected-rows-delete
import React, {useContext, useState} from 'react'
import { Context } from '../../Store'
import ExpensesForm from './ExpenseForm'
import { AgGridReact, AgGridColumn } from 'ag-grid-react'
import 'ag-grid-enterprise'
import 'ag-grid-community/dist/styles/ag-grid.css' 
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css' 

function Expenses() {
    const [state] = useContext(Context)
    const {id, first_name, last_name, email} = state.user
    const expenses = state.expenses

    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const gridOptions = {
        rowSelection: 'multiple',
        pagination:'false',
        groupSelectsChildren:'true'
    }

    // const onButtonClick = e => {
    //     const selectedNodes = gridApi.getSelectedNodes()
    //     const selectedData = selectedNodes.map( node => node.data )
    //     const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ')
    //     alert(`Selected nodes: ${selectedDataStringPresentation}`)
    // }

    const onGridReady = params => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }

    const dateFormatter = (params) => {
        return new Date(params.value).toLocaleString()
    }

    const dateComparator = (date1, date2, nodeA, nodeB) => {
        return new Date(date1).valueOf() - new Date(date2).valueOf()
    }


    return (
        <div>
            Expenses
            <ExpensesForm />
            <div className="ag-theme-balham-dark" style={{ height: 400, width: 1000 }}>
                <AgGridReact 
                    onGridReady={onGridReady} 
                    gridOptions={gridOptions} 
                    rowData={expenses}
                >
                    <AgGridColumn 
                        field="date"
                        valueFormatter={dateFormatter}
                        sortable={true}
                        comparator={dateComparator}
                        unSortIcon={true}
                        filter='agTextColumnFilter'
                        filterParams={{ applyMiniFilterWhileTyping: true }}
                        floatingFilter={true}
                        initialSort='desc'
                    />
                    <AgGridColumn 
                        field="category"
                        sortable={true}
                        unSortIcon={true}
                        filter='agTextColumnFilter'
                        filterParams={{ applyMiniFilterWhileTyping: true }}
                        floatingFilter={true}
                    />
                    <AgGridColumn 
                        field="amount"
                        sortable={true}
                        unSortIcon={true}
                        />
                    <AgGridColumn field="currency"/>
                    <AgGridColumn field="description"/>
                </AgGridReact>
            </div>
        </div>
    )
}

export default Expenses


// 4. Expenses:
//    a. List of expenses for the current user.
//    b. Button to create a new expense.
//    c. Must contain the following fields: DateTime, Amount, Currency, Description (optional), and a Category.
//    d. The categories are -- Home, Food, Fuel, Shopping and Other.
//    e. Can be created only after logging in
//    f. Can be read only by the user who owns it.
//    g. Can be updated or deleted by the user who owns it.
//    h. Ability to filter the expenses by category.