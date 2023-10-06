import React from "react";
import { useContext } from "react";
import FoodContext from "../context/FoodContext";

const FoodStats = () => {

const { foodStats } = useContext(FoodContext)

const totalCalories =
  foodStats.green.calories + foodStats.bean.calories + foodStats.root.calories ;
  //  foodStats.grain.calories + foodStats.fat.calories + foodStats.dressing.calories

const totalCarbs = foodStats.green.carbs + foodStats.bean.carbs ;

  return (
    <footer>
      <h3 className="FoodStats-text">{totalCalories.toFixed(1)}</h3>
      <div className="macros-container">
        <h3 className="FoodStats-text">{totalCarbs.toFixed(1)}</h3>
        <h3 className="FoodStats-text">{}</h3>
        <h3 className="FoodStats-text">{}</h3>
      </div>
    </footer>
  );
};

export default FoodStats;
