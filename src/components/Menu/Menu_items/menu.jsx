import React from "react";
import { StyledMenu } from "./menu.styled";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="#about">Обо мне</a>
      <a href="#features">Для кого</a>
      <a href="#feedbacks">Отзывы</a>
      <a href="#contacts">Контакты</a>
    </StyledMenu>
  );
};

export default Menu;
