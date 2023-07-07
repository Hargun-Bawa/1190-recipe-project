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
      </div>
      <p className="desc">{description}</p>
      <div className="card-buttons">
        <button className="card-button" onClick={handlePrevCard}>←</button>
        <button className="card-button" onClick={handleNextCard}>→</button>
        <button className="card-button" onClick= {handleNavigation}>↑</button>
      </div>
    </div>
  );
};

export default Card;
