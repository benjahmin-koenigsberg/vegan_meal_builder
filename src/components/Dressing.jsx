import React from 'react'
import { useContext } from 'react';
import FoodContext from '../context/FoodContext';

const Dressing = () => {
const {  handleModal, food, setFood, updateStats } = useContext(FoodContext)

  return (
    <div>
      <fieldset required="true">
        <legend>Choose your dressing</legend>
        <input
          type="radio"
          value="tahini"
          checked={food.dressing === "tahini"}
          onChange={(e) => {
          setFood({ ...food, dressing: e.target.value });
                    updateStats(e);

          }}
        />
        <label>Tahini</label>
        <input
          type="radio"
          value="mustard"
          checked={food.dressing === "mustard"}
          onChange={(e) => {
            setFood({ ...food, dressing: e.target.value });
                      updateStats(e);

          }}
        />
        <label>Maple Mustard</label>
        <input
          type="radio"
          value="goddess"
          checked={food.dressing === "goddess"}
          onChange={(e) => {
          setFood({ ...food, dressing: e.target.value });
          updateStats(e);

          }}
        />
        <label>Green Goddess</label>
        <div className="info-button">i</div>
        <span className="info-button" id="dressings" onMouseUp={handleModal}>
          i
        </span>
      </fieldset>
    </div>
  );
}

export default Dressing
