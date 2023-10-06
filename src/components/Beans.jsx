import React from 'react'
import { useContext } from 'react';
import FoodContext from '../context/FoodContext';

const Beans = () => {

const { handleModal, food, setFood, updateStats} = useContext(FoodContext)
  return (
    <div>
      <fieldset required="true">
        <legend>Choose your beans</legend>
        <input
          type="radio"
          value="black"
          name='bean'
          checked={food.bean === "black"}
          onChange={(e) => {
          setFood({ ...food, bean: e.target.value });
          updateStats(e);
          }}
        />
        <label>Black</label>
        <input
          type="radio"
          value="pinto"
          checked={food.bean === "pinto"}
          onChange={(e) => {
          setFood({ ...food, bean: e.target.value });
          updateStats(e);
          }}
        />
        <label>Pinto</label>
        <input
          type="radio"
          value="garbanzo"
          checked={food.bean === "garbanzo"}
          onChange={(e) => {
          setFood({ ...food, bean: e.target.value });
          updateStats(e);
          }}
        />
        <label>Garbanzo</label>
        <div className="info-button">i</div>
        <span className="info-button" id="beans" onMouseUp={handleModal}>
          i
        </span>
      </fieldset>
    </div>
  );
}

export default Beans
