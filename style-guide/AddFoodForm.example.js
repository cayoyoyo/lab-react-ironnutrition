import React, { useState } from 'react';
import { Divider, Input } from 'antd';

function AddFoodForm({ addFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');
  const [errorForm, setErrorForm] = useState(false);

  const nameHandler = (e) => setName(e.target.value);
  const imageHandler = (e) => setImage(e.target.value);
  const caloriesHandler = (e) => setCalories(e.target.value);
  const servingsHandler = (e) => setServings(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();

    if (name === '' || image === '' || calories === '' || servings === '') {
      setErrorForm('Nombre, calorías, imagen y porciones son campos obligatorios.');
      return;
    }

    addFood({
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    });

    setName('');
    setImage('');
    setCalories('');
    setServings('');
    setErrorForm('');
  };

  return (
    <form onSubmit={submitHandler}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={nameHandler} />

      <label>Image</label>
      <Input value={image} type="text" onChange={imageHandler} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={caloriesHandler} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={servingsHandler} />

      {errorForm && <div className="alert alert-danger" role="alert">{errorForm}</div>}

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
