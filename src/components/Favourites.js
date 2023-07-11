import React from "react";
import foodItems from "./foodData";
import Header from "./Header"; 
import HorizontalMenu from "./HorizontalMenu";
import "./Favourites.css"
class Favourites extends React.Component {

    changePage = (index) => {
       this.props.setCurrentFood(index);
       this.props.setCurrentPage('recipe');
    }

  render() {
    const filteredObjects = foodItems.filter(obj => obj.active === true);
    return (
    <div>
    <Header setCurrentPage = {this.props.setCurrentPage}/>
    <HorizontalMenu /> 
    <h1>Favourite Food Items</h1>
      <div className="favourites-container">
        {filteredObjects.map(obj => (
          <div className="favourite-item" key={obj.name}>
            <img src={require(`./images/${obj.image}`)} alt={obj.name} onClick= {() => {this.changePage(obj.index)}} />
            <span className="food-name">{obj.name}</span>
          </div>
        ))}
      </div>
</div>
    ) 
    }
}

export default Favourites;

