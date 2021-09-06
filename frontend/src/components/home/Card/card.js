import React from 'react';
import './card.css'

const Card = (props) => {
    return (
        <div className="content">
            <div className='card-home'>
                <div className="gallery">
                    <div className="card-text">
                        <span className="text-1">{props.title}</span> <br/>
                        <span className="text-2">SUBTITLE</span>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Card;