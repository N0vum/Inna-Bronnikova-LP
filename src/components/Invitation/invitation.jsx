import React from "react";
import { StyledInvitation } from "./invitation.styled";
import RegistrationForm from "../Form/form";

const dataInvitation = {
  topic:
    "Запишись на бесплатную консультацию и получи в подарок методичку 'Как закрыть возражение дорого' со скриптами для разных ниш",
  img_invitation: "../photos/Pics/box.png",
  alt: "gift box",
};
const Invitation = () => {
  return (
    <StyledInvitation>
      <div className="topic">{dataInvitation.topic}</div>
      <div className="invitation_container">
        <img
          className="box"
          src={dataInvitation.img_invitation}
          alt={dataInvitation.alt}
        />
        <div className="invitation_form">
          <RegistrationForm />
        </div>
      </div>
    </StyledInvitation>
  );
};
export default Invitation;
