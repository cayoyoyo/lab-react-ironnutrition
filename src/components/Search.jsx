import React, { useState } from 'react';
import '../App.css'; 
import foods from '../foods.json';
import FoodBox from './FoodBox';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFoods = foodList.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search Food"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredFoods.map((food, index) => (
        <FoodBox key={index} food={food} />
      ))}
    </div>
  );
}

export default App;
