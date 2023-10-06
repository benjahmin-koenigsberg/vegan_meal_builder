/** @format */

import React, { useContext } from "react";
import FoodContext from "../context/FoodContext";

const Greens = () => {
  const { handleModal, food, setFood, foodData, updateStats } =
    useContext(FoodContext);




  return (
    <div>
      <fieldset required="true">
        <legend>Choose your greens</legend>
        <input
          type="radio"
          value="spinach"
          checked={food.green === "spinach"}
          onChange={(e) => {
            setFood({
              ...food,
              green: e.target.value,
            });
                      updateStats(e);

          }}
        />
        <label>Spinach</label>
        <input
          type="radio"
          value="romaine"
          checked={food.green === "romaine"}
          onChange={(e) => {
            setFood({
              ...food,
              green: e.target.value,
            });
                      updateStats(e);

          }}
        />
        <label>Romaine</label>
        <input
          type="radio"
          value="mixed baby greens"
          checked={food.green === "mixed baby greens"}
             onChange={(e) => {
          setFood({ ...food, green: e.target.value });
                    updateStats(e);

          }}
        />
        <label>Mixed Baby Greens</label>
        <span className="info-button" id="greens" onMouseUp={handleModal}>
          i
        </span>
      </fieldset>
    </div>
  );
};

export default Greens;
