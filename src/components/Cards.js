import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
  return (
    <div className = "cards">
        <h1>Charts</h1>
        <div className = "cards__container">
            <div className = "cards__wrapper">
                <ul className = "cards__items">
                    <CardItem 
                    src = "images/barc_2_500x400.jpg"
                    text = "See data by bar chart"
                    label = "chart"
                    path = '/bar'
                    />
                    <CardItem 
                    src = "images/linegraph_500x400.png"
                    text = "See data by line chart"
                    label = "chart"
                    path = '/line'
                    />
                    <CardItem 
                    src = "images/piechart_2_500x400.jpg"
                    text = "See data by pie chart"
                    label = "chart"
                    path = '/pie'
                    />
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Cards