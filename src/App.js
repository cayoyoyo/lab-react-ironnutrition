import React, { useState } from 'react';
import './App.css';
import { Row, Col } from 'antd';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);

  const addFood = (newFood) => {
    setFoodList([...foodList, newFood]);
  };

  const deleteFood = (foodToDelete) => {
    const updatedFoodList = foodList.filter((food) => food !== foodToDelete);
    setFoodList(updatedFoodList);
  };
  

  return (
    <div className="App">
      <h1>Food List</h1>
      <Row gutter={16}>
        <Col span={12}>
          <Search />
          {foodList.map((food, index) => (
            <FoodBox key={index} food={food} deleteFood={deleteFood} />
          ))}
        </Col>
        <Col span={12}>
          <AddFoodForm addFood={addFood} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
