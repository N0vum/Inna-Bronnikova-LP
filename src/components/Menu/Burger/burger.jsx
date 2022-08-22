import React from "react";
import { StyledBurger } from "./burger.styled";

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open}>
      <div className="menu_letters">Menu</div>
      <div className="sticks" onClick={() => setOpen(!open)}>
        <div className="stick" />
        <div className="stick" />
        <div className="stick" />
      </div>
    </StyledBurger>
  );
};

export default Burger;
