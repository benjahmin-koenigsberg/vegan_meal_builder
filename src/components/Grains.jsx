import React from 'react'
import { useContext } from 'react';
import FoodContext from '../context/FoodContext';

const Grains = () => {

const { food, setFood, handleModal, updateStats} = useContext(FoodContext)


  return (
    <div>
      <fieldset required="true">
        <legend>Choose your grain</legend>
        <input
          type="radio"
          value="quinoa"
          checked={food.grain === "quinoa"}
          onChange={(e) => {
            setFood({ ...food, grain: e.target.value });
                      updateStats(e);

          }}
        />
        <label>Quinoa</label>
        <input
          type="radio"
          value="rice"
          checked={food.grain === "rice"}
          onChange={(e) => {
            setFood({ ...food, grain: e.target.value });
                      updateStats(e);

          }}
        />
        <label>Rice</label>
        <input
          type="radio"
          value="buckwheat"
          checked={food.grain === "buckwheat"}
          onChange={(e) => {
            setFood({ ...food, grain: e.target.value });
                      updateStats(e);

          }}
        />
        <label>Buckwheat</label>
        <div className="info-button">i</div>
        <span className="info-button" id="grains" onMouseUp={handleModal}>
          i
        </span>
      </fieldset>
    </div>
  );
}

export default Grains
