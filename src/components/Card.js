import React from 'react';
import "./Card.css";


// creates a card object that takes props from homepage. Hopepage will pass info from foodItems, to create three of these cards at a time
const Card = ({ name, image, number, description, handleCardChange, handleNavChange }) => {

  /// for now this just cycles the display backwards
  const handlePrevCard = () => {
    handleCardChange(-1);
  };

  /// for nnow this just cycles the display one forwards
  const handleNextCard = () => {
    handleCardChange(1);
  };

  ///uses indexes to go to the recipe page for the selected food
  const handleNavigation = () => {
    handleNavChange(number);

  };

  /// html code for the layout of the cards, and the button functionality
  return (
    <div className="card">
      <h3>{name}</h3>

      <div className="card-image">
        <img src={require(`./images/${image}`)} alt={name} />
      </div >

      <div className='box'>
        <p className="desc">{description}</p>
      </div>

      <div className="card-buttons">
      <img src={require("./images/dislike.png")} className="card-button" onClick={handlePrevCard} width={"45px"} height={"45px"} alt='thumbs-down'></img>
        <img src={require("./images/tick.png")} className="card-button" onClick={handleNavigation} width={"45px"} height={"45px"} alt='choose'></img>
        <img src={require("./images/like.png")} className="card-button" onClick={handleNextCard} width={"45px"} height={"45px"} alt='thumbs-up'></img>
      </div>
    </div>
  );
};

export default Card;
