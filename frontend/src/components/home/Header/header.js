import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div>
            <div className='content'>
                <div className='content-sidebar'>
                <div className="title-home-header">
                    Choose <span>as you want</span> <br/> Pay <span>as you can</span>
                </div>
                <div className="nav-bar">
                    <ul>
                        <li>Latest</li>
                        <li>All</li>
                    </ul>
                </div>
            </div>
            </div>                 
        </div>
    )
}

export default Header