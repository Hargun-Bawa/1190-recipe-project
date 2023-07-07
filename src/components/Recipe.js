import React from 'react';
import Header from './Header';
import foodItems from './foodData';
import HorizontalMenu from './HorizontalMenu';
import Sidebar from './Sidebar';
import "./Recipe.css"

class Recipe extends React.Component {

    render(){ 
        return(
        <div className='all'>
            <div className='head'>

            <Header className= 'h'></Header>
            <HorizontalMenu className= 'h'></HorizontalMenu>
            </div>
            <div className='recipe'>
            <Sidebar className = 'sidebar' food={ foodItems[this.props.currentFood].ingredients} />
            <div className='rec'>
                <div className='holder'>
                    <div className='image'>
                        <img  src= {require( `./images/${foodItems[this.props.currentFood].image}`)}  className='image'></img>

                    </div>
                    <div className='Recipe'>
                        <h1>{foodItems[this.props.currentFood].name}</h1>
                    {(foodItems[this.props.currentFood].recipe).map((step, index) => (
                        <ul key={step}>
                            {console.log({step})}
                            <li className='recipe-step'>{step}</li>
                        </ul>
                    ))}

                    </div>
                </div>

            </div>
            </div>
        </div>
        ) 
    }
};    
export default Recipe;
