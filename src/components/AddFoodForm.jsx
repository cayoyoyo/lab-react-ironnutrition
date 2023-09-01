import { useState } from 'react';

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
      setErrorForm('Please fill all the fields');
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
    <form onSubmit={submitHandler} className="w-50 mx-auto mt-5">
      {errorForm && (
        <div className="alert alert-danger" role="alert">
          Nombre, calorías, imagen y porciones son campos obligatorios.
        </div>
      )}
      <div className="mb-3">
        <label htmlFor="foodName" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="foodName"
          value={name}
          onChange={nameHandler}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="calories" className="form-label">
          Calories
        </label>
        <input
          type="number"
          className="form-control"
          id="calories"
          value={calories}
          onChange={caloriesHandler}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Image (URL)
        </label>
        <input
          type="text"
          className="form-control"
          id="image"
          value={image}
          onChange={imageHandler}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="servings" className="form-label">
          Servings
        </label>
        <input
          type="number"
          className="form-control"
          id="servings"
          value={servings}
          onChange={servingsHandler}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Agregar comida
      </button>
    </form>
  );
}

export default AddFoodForm;
