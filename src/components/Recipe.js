import React from 'react';
import Header from './Header';
import foodItems from './foodData';
import HorizontalMenu from './HorizontalMenu';
import Sidebar from './Sidebar';
import "./Recipe.css"
/// Rather than creating a unique webpage for each food, the recipe page uses the currentFood Prop from App.js 
/// to dynamicaly render the webpage based on the active food
class Recipe extends React.Component {

    render() {
        return (
            <div className='all'>
                <div className='head'>

                    <Header className='h'></Header>
                    <HorizontalMenu className='h' setCurrentFood={this.props.setCurrentFood} setCurrentPage={this.props.setCurrentPage}></HorizontalMenu>
                </div>
                <div className='recipe'>
                    {/* The sidebar component uses the current food index and the ingredients key of the food objects to 
                dynamically display the ingredients  */}
                    <Sidebar className='sidebar' food={foodItems[this.props.currentFood].ingredients} />
                    <div className='rec'>
                        <div className='holder'>
                            <div className='image'>
                                <img src={require(`./images/${foodItems[this.props.currentFood].image}`)} className='image' alt={foodItems[this.props.currentFood].name}></img>

                            </div>
                            <div className='Recipe'>
                                <h1>{foodItems[this.props.currentFood].name}</h1>
                                {(foodItems[this.props.currentFood].recipe).map((step, index) => (
                                    <ul key={step}>
                                        {console.log({ step })}
                                        <li className='recipe-step'>{step}</li>
                                    </ul>
                                ))}

                            </div>
                        </div>
                        <div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
};
export default Recipe;
