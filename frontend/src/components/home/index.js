import React from 'react'
import './home.css'
import Header from './Header/header.js'
import Content from './Content/content.js'
import Card from './Card/card.js'
const home = () => {
    return (
        <div>
            <div className='content'>
               <Header/>
               <Content/>
               <div className='store-profile'>
                    <Card title="GALLERY"/>
                    <Card title="ACTIVITIES"/>
                    <Card title="KEYNOTES"/>
               </div>   
            </div>        
        </div>
    )
}

export default home