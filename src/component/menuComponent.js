import React from "react";
import DishDetail from "./dishDetailComponent";
const Menu = ({dishes}) => {
    // const {dish, comments} = dishes;
  return (
    <>
     {dishes.map((dish)=>{
      return <DishDetail key = {dish.id} {...dish} />
     })}
    </>
  );
};

export default Menu;
