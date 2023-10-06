import { useContext } from "react";
import FoodContext from "../context/FoodContext";
import Greens from './Greens';
import Beans from './Beans';
import Roots from './Roots';
import Grains from './Grains';
import Fats from './Fats';
import Dressing from './Dressing';

import React from 'react'

const BowlOptions = () => {


const { food } = useContext(FoodContext)

  return (
    <div>
      <Greens />
      {food.green ? <Beans /> : ""}
      {food.bean  ? <Roots /> : ""}
      {food.root  ? <Grains /> : ""}
      {food.grain ? <Fats /> : ""}
      {food.fat   ? <Dressing /> : ""}
    </div>
  );
}

export default BowlOptions
