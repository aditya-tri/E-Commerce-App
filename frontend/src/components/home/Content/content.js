import React from 'react'
import './content.css'
import { withRouter } from 'react-router'

const Content = (props) => {
    
    const toShoplist = () => {
        props.history.push('/productlist') 
    }
    return (
        <div>
            <div className ="content">
                <div className="mid-content">
                    <div className="btn-home">
                         <button className="btn-home"type="button" onClick={toShoplist}>Shop Now</button>
                    </div>
                <div className="sub-title-home">
                    <span>New Concept</span> of Online Shopping
                </div>
            </div>
                <div className="text-home">
                    Lorem Ipsum will go here. Lorem <br/>
                    Ipsum will go here. Lorem Ipsum <br/>
                    will go here. Lorem Ipsum will go <br/>
                    here.
                </div> 
            </div>               
        </div>
    )
}

export default withRouter(Content);