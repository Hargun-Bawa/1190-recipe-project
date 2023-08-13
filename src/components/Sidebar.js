import React from 'react';
import "./Recipe.css"
import "./Sidebar.css"

/// Sidebar takes a foodIngredients prop, to create a list of ingredients
const Sidebar = ({ food }) => {

  return (
    <div className="sidebar">
      <div>{food.ingredients}</div>
      <h2>Ingredients</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>

        </thead>
        <tbody>
          {food.map((food, index) => (

            <tr key={index}>
              <td fontSize = '35px' className='ingredient-name'>{food.ingredient}</td>
              <td></td>
              <td className='ingredient-quantity'>{food.quantity}</td>
            </tr>
          ))}

        </tbody>
      </table>

    </div>
  );
};

export default Sidebar;
