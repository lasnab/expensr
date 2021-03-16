import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='flex justify-between bg-black bb b--black-10'>
            <Link to='/' className='link white-70 hover-white no-underline flex items-center pa3'>Expensr</Link>
            <div className='flex-grow pa3 flex items-center'>
                <Link to='/' className='f6 link dib white dim mr3 mr4-ns'>Dashboard</Link>
                <Link to='/expenses' className='f6 link dib white dim mr3 mr4-ns'>Expenses</Link>
                <Link to='/report' className='f6 link dib white dim mr3 mr4-ns'>Report</Link>
            </div>
        </div>
    )
}

export default Navbar
