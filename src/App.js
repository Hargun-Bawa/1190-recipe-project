import './App.css';
import HomePage from './components/HomePage' 
import React, {useState } from 'react'
import Recipe from './components/Recipe';
import foodItems from './components/foodData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home',
      currentFood: 0,
    };
  }

setCurrentPage = (page) => {
  this.setState({ currentPage: page});
};
setCurrentFood = (foodIndex) => {
  this.setState({currentFood: foodIndex})
}
getPage() {
  if(this.state.currentPage === 'home') {
    
    return( 
    
    <HomePage setCurrentPage = {this.setCurrentPage}  setCurrentFood = {this.setCurrentFood}/>
    )
  }
  else if(this.state.currentPage === 'recipe') {
    console.log(this.currentFood)
    return(<Recipe currentFood = {this.state.currentFood} />

  
  )
}
}
  render() {
  return (

      <div className="App">
 
      {this.getPage() }

    </div>
  );
  }
}


export default App;
