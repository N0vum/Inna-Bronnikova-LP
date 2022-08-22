import React from "react";
import ButtonModal from "../ButtonModal/buttonModal";
import { StyledFinality } from "./finality.styled";
import useMediaQuery from "../../useMediaQuery.jsx";
const dataFinality = {
  general_finality: "Остались вопросы?",
  instruction_finality: " Приходи на бесплатную консультацию и задай их лично!",
  img576_finality: "../photos/Inna/img_white.jpg",
  img_finality: "../photos/Inna/img_green_chair.jpg",
  alt_finality: "Inna Bronnikova",
};
const Finality = () => {
  const isMobile576 = useMediaQuery("(max-width: 576px)");
  return (
    <StyledFinality>
      <div className="finality_card">
        <img
          src={
            isMobile576
              ? dataFinality.img_finality
              : dataFinality.img576_finality
          }
          alt={dataFinality.alt_finality}
        />
      </div>
      <div className="slogan">
        <h2 className="general">{dataFinality.general_finality}</h2>
        <p className="instruction">{dataFinality.instruction_finality}</p>
        <ButtonModal className="buttonGrid" />
      </div>
    </StyledFinality>
  );
};
export default Finality;
