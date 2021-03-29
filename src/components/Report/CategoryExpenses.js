import React from 'react'
import FastfoodIcon from '@material-ui/icons/Fastfood';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import LanguageIcon from '@material-ui/icons/Language';
import {DisplayAmount} from '../Helpers'

function CategoryExpenses({ categoryExpenses }) {
    const { home, food, fuel, shopping, other } = categoryExpenses
    return (
        <div className='flex flex-wrap justify-around items-center pa1'>
            <div className="ba b--light-gray tc ma2 shadow-1 w5 h4 grow hover-green">
                <HomeIcon className="f3" style={{ fontSize: 60 }}/>
                <div className="f5 fw6 black-70 ma0">Home</div>
                <div className="f3 black-70 fw3 ttu">{DisplayAmount(home)}</div>
            </div>
            <div className="ba b--light-gray tc ma2 shadow-1 w5 h4 grow hover-green">
                <FastfoodIcon className="f3" style={{ fontSize: 60 }}/>
                <div className="f5 fw6 black-70 ma0">Food</div>
                <div className="f3 black-70 fw3 ttu">{DisplayAmount(food)}</div>
            </div>
            <div className="ba b--light-gray tc ma2 shadow-1 w5 h4 grow hover-green">
                <LocalGasStationIcon className="f3" style={{ fontSize: 60 }}/>
                <div className="f5 fw6 black-70 ma0">Fuel</div>
                <div className="f3 black-70 fw3 ttu">{DisplayAmount(fuel)}</div>
            </div>
            <div className="ba b--light-gray tc ma2 shadow-1 w5 h4 grow hover-green">
                <ShoppingBasketIcon className="f3" style={{ fontSize: 60 }}/>
                <div className="f5 fw6 black-70 ma0">Shopping</div>
                <div className="f3 black-70 fw3 ttu">{DisplayAmount(shopping)}</div>
            </div>
            <div className="ba b--light-gray tc ma2 shadow-1 w5 h4 grow hover-green">
                <LanguageIcon className="f3" style={{ fontSize: 60 }}/>
                <div className="f5 fw6 black-70 ma0">Other</div>
                <div className="f3 black-70 fw3 ttu">{DisplayAmount(other)}</div>
            </div>
        </div>
    )
}

export default CategoryExpenses
