import React from 'react'
import { useContext } from 'react';
import FoodContext from '../context/FoodContext';
import Dressing from './Dressing';
import '../images.css';

const FoodContent = () => {

const { food} = useContext(FoodContext)

  return (
    <>
      <div className="food-container">
        <div className={`${food.dish} food`}></div>
        <div className={`${food.green} food`}></div>
        <div className={`${food.bean} food`}></div>
        <div className={`${food.root} food`}></div>
        <div className={`${food.grain} food`}></div>
        <div className={`${food.fat} food`}></div>
        <div className={`${food.dressing} food`}></div>
      </div>
    </>
  );
}

export default FoodContent
