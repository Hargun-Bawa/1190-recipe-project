import React from "react";
import foodItems from "./foodData";
import Header from "./Header";
import HorizontalMenu from "./HorizontalMenu";
import "./Favourites.css"

/// the favourites page uses the foodData file to check if the active condition is set to true,
/// and only displays the foods set to true. Clicking on any of the images uses the setCurrentPage 
/// and setCurrent food props to render the clicked on recipe 

class Favourites extends React.Component {

  changePage = (index) => {
    this.props.setCurrentFood(index);
    this.props.setCurrentPage('recipe');
  }

  render() {
    const filteredObjects = foodItems.filter(obj => obj.active === true);
    return (
      <div>
        <Header />
        <HorizontalMenu setCurrentPage={this.props.setCurrentPage} />
        <h1>Favourite Food Items</h1>
        <div className="favourites-container">
          {filteredObjects.map(obj => (

            <div className="favourite-item" key={obj.name}>
              {/* it was only at this point I decided to give each food item its own index value independant of the js functions */}
              <img src={require(`./images/${obj.image}`)} alt={obj.name} onClick={() => { this.changePage(obj.index) }} />
              <span className="food-name">{obj.name}</span>
            </div>

          ))}
        </div>
      </div>
    )
  }
}

export default Favourites;

