import React from 'react';
import foodItems from './foodData';
import "./Homepage.css";
import Card from './Card';
import "./Card.css"
import HorizontalMenu from './HorizontalMenu';
import Header from './Header';

///the default page for the website, accepts the setPage, and setFood props from App.js
/// and uses them to render cards that when clicked accept NavChange, and CardChange 
/// for behaviour
class HomePage extends React.Component {

  
  
constructor(props) {
    super(props);
    this.state = {
      currentCardIndex: 0,
  };
}

/// currently uses lists to iterate over the items one at a time
/// eventually Id like to use the tag system to add logic for narrowing
/// selection of dishes, this is used as a prop to pass to the card object

handleCardChange = (change) => {
    const { currentCardIndex } = this.state;
    const newIndex = currentCardIndex + change;
    if (newIndex >= 0 && newIndex < foodItems.length) {
      this.setState({ currentCardIndex: newIndex});
      this.props.setCurrentFood(newIndex);
    }
  };

  /// uses the props from App, and creates new prop for the card objects to handle navigating to the recipe pages

handleNavChange = (change) => {
  console.log(change);
  
   const {currentCardIndex} = this.state;
   const newIndex = currentCardIndex + change;
   this.props.setCurrentFood( newIndex);
   this.props.setCurrentPage('recipe');
   }
  
  render() {

    const { currentCardIndex } = this.state;
    return (
      <div className="homepage-container">
        <Header />
        <HorizontalMenu setCurrentPage= {this.props.setCurrentPage} setCurrentFood = {this.props.setCurrentFood}/>
      
        
        <div className="card-container">
          <div className="card-column">
            <Card
              name={foodItems[currentCardIndex].name}
              image={foodItems[currentCardIndex].image}
              number = {0}
              description={foodItems[currentCardIndex].description}
            {/* Pass props to the Card object, which has two functions each returning different values based on 
            thumbs up or down, or navigating to recipe*/}
              handleCardChange={this.handleCardChange}              
              handleNavChange = {this.handleNavChange}


            />
            <Card
              name={foodItems[currentCardIndex+1].name}
              image={foodItems[currentCardIndex+1].image}
              number= {1}
              description={foodItems[currentCardIndex+ 1].description}
               {/* Pass props to the Card object, which has two functions each returning different values based on 
            thumbs up or down, or navigating to recipe*/}
            
              handleCardChange={this.handleCardChange}              
              handleNavChange = {this.handleNavChange}

            />
            
             <Card
              name={foodItems[currentCardIndex+2].name}
              image={foodItems[currentCardIndex+2].image}
              number = {2}
              description={foodItems[currentCardIndex+ 2].description}
              handleCardChange={this.handleCardChange}
              handleNavChange = {this.handleNavChange}
            />
     
          </div>
        </div>
      </div>
    );
  
} 
}
export default HomePage;
