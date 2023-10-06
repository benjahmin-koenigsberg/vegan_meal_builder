import React from 'react'
import { useContext } from 'react';
import FoodContext from '../context/FoodContext';

const Fats = () => {

const {food, setFood, handleModal, updateStats } = useContext(FoodContext)

  return (
    <div>
      <fieldset required="true">
        <legend>Choose your fat</legend>
        <input
          type="radio"
          value="avacado"
          checked={food.fat === "avacado"}
          onChange={(e) => {
            setFood({ ...food, fat: e.target.value });
                      updateStats(e);

          }}
        />
        <label>Avacado</label>
        <input
          type="radio"
          value="walnuts"
          checked={food.fat === "walnuts"}
          onChange={(e) => {
            setFood({ ...food, fat: e.target.value });
                      updateStats(e);

          }}
        />
        <label>Walnuts</label>
        <input
          type="radio"
          value="flax"
          checked={food.fat === "flax"}
          onChange={(e) => {
            setFood({ ...food, fat: e.target.value });
                      updateStats(e);

          }}
        />
        <label>Flax seeds</label>
        <div className="info-button">i</div>
        <span className="info-button" id="fats" onMouseUp={handleModal}>
          i
        </span>
      </fieldset>
    </div>
  );
}

export default Fats
