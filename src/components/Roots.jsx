import React from 'react'
import { useContext } from 'react';
import FoodContext from '../context/FoodContext';

const Roots = () => {

const {food, setFood, handleModal, updateStats} = useContext(FoodContext)

  return (
    <div>
      <fieldset required="true">
        <legend>Choose your root</legend>
        <input
          type="radio"
          value="beet"
          checked={food.root === "beet"}
          onChange={(e) => {
            setFood({ ...food, root: e.target.value });
                      updateStats(e);

          }}
        />
        <label>Beet</label>
        <input
          type="radio"
          value="carrot"
          checked={food.root === "carrot"}
          onChange={(e) => {
            setFood({ ...food, root: e.target.value });
                      updateStats(e);

          }}
        />
        <label>Carrot</label>
        <input
          type="radio"
          value="yam"
          checked={food.root === "yam"}
          onChange={(e) => {
          setFood({ ...food, root: e.target.value });
                    updateStats(e);

          }}
        />
        <label>Yam</label>
        <div className="info-button">i</div>
        <span className="info-button" id="roots" onMouseUp={handleModal}>
          i
        </span>
      </fieldset>
    </div>
  );
}

export default Roots
