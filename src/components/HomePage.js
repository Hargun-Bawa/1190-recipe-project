import React from 'react';
import foodItems from './foodData';
import "./Homepage.css";
import Card from './Card';
import "./Card.css"
import HorizontalMenu from './HorizontalMenu';
import Header from './Header';

class HomePage extends React.Component {

  
  
constructor(props) {
    super(props);
    this.state = {
      currentCardIndex: 0,
  };
}

handleCardChange = (change) => {
    const { currentCardIndex } = this.state;
    const newIndex = currentCardIndex + change;
    if (newIndex >= 0 && newIndex < foodItems.length) {
      this.setState({ currentCardIndex: newIndex});
      this.props.setCurrentFood(newIndex);
    }
  };

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
              handleCardChange={this.handleCardChange}              
              handleNavChange = {this.handleNavChange}


            />
            <Card
              name={foodItems[currentCardIndex+1].name}
              image={foodItems[currentCardIndex+1].image}
              number= {1}
              description={foodItems[currentCardIndex+ 1].description}
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
