import './App.css';
import HomePage from './components/HomePage'
import React from 'react'
import Recipe from './components/Recipe';
import Favourites from './components/Favourites';

// this is the react app main app that loads when the page is started
class App extends React.Component {

  // these constructors are the defaults, the variables inside are used to keep track of what should be shown on the screen
  // and which food is currently on call to be loaded for the recipe page
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home',
      currentFood: 0,
    };
  }

  // this is a function designed to be a prop to pass to all subpages, it combined with the above constructor is how I handle
  //navigation on the page
  setCurrentPage = (page) => {
    this.setState({ currentPage: page });
  };

  // function designed to be a prop to keep track of what food item is being asked for
  setCurrentFood = (foodIndex) => {
    this.setState({ currentFood: foodIndex })
  }

  // function that actually changes what page is shown on the webpage, changes based on the value assigned to currentpage
  getPage() {
    if (this.state.currentPage === 'home') {
      return (
        <HomePage setCurrentPage={this.setCurrentPage} setCurrentFood={this.setCurrentFood} />
      )
    }

    else if (this.state.currentPage === 'recipe') {
      console.log(this.currentFood)
      return (<Recipe currentFood={this.state.currentFood} setCurrentPage={this.setCurrentPage} />
      )
    }

    else if (this.state.currentPage === 'favourites') {
      return (<Favourites setCurrentFood={this.setCurrentFood} setCurrentPage={this.setCurrentPage} currentFood={this.state.currentFood} />
      )
    }
  }


  //render function to display the html and jsx
  render() {
    return (
      <div className="App">
        {this.getPage()}
      </div>
    );
  }
}


export default App;
