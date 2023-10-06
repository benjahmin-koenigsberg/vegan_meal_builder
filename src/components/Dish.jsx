import {useState, useContext} from 'react'
import FoodContext  from '../context/FoodContext';

const Dish = () => {

const {food, setFood} = useContext(FoodContext)

  return (
    <div>
      <fieldset required="true">
        <legend>Choose your dish</legend>
        <input
          type="radio"
          value="bowl"
          checked={food.dish === "bowl"}
          onChange={(e) => {
          setFood({ ...food, dish: e.target.value });

          }}
        />
        <label>Bowl</label>
        <input
          type="radio"
          value="plate"
          checked={food.dish === "plate"}
          onChange={(e) => {
          setFood({ ...food, dish: e.target.value });
          }}
        />
        <label>Plate</label>
      </fieldset>
    </div>
  );
}

export default Dish
