import {useContext} from 'react'
import getSymbolFromCurrency from 'currency-symbol-map'
import { Context } from '../Store'

export const DisplayAmount = (amount) => {
    const [state] = useContext(Context)
    return getSymbolFromCurrency(state.currency)+amount
} 