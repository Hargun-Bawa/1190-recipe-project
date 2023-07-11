import React from 'react';
import "./Card.css";

const Card = ({ name, image, number,  description, handleCardChange , handleNavChange}) => {
  const handlePrevCard = () => {
    handleCardChange(-1);
  };

  const handleNextCard = () => {
    handleCardChange(1);
  };

  const handleNavigation= ()=> {
   handleNavChange(number);
    
  };
    
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
        <img src={require("./images/dislike.png")} className="card-button" onClick={handlePrevCard} width={"25px"} height={"25px"}></img>

        <img src={require("./images/tick.png")} className="card-button" onClick={handleNavigation} width={"25px"} height={"25px"}></img>
        <img src={require("./images/like.png")} className="card-button" onClick={handleNextCard} width={"25px"} height={"25px"}></img>
      </div>
    </div>
  );
};

export default Card;
