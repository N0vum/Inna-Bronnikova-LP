import React from "react";
import { StyledFeatures } from "./features.styled";

const Features = () => {
  const clients = [
    { position: 1, role: "expert", text: "эксперт" },
    { position: 3, role: "freelancer", text: "фрилансер" },
    { position: 2, role: "mentor", text: "наставник" },
    {
      position: 4,
      role: "businessWoman",
      text: "офлайн/онлайн предприниматель",
    },
    { position: 6, role: "manager", text: "управляешь продажами" },
    { position: 5, role: "sales", text: "менеджер по продажам" },
  ];
  return (
    <StyledFeatures id="features">
      <div className="topic">Эти задачи необходимо решить, если ты:</div>
      <div className="clients">
        {clients
          .slice()
          .sort((a, b) => a.position - b.position)
          .map((c) => (
            <div key={c.position} className={`client client_${c.role}`}>
              <p>{c.text}</p>
              <img src={`../photos/Clients/${c.role}.jpg`} />
            </div>
          ))}
      </div>
    </StyledFeatures>
  );
};
export default Features;
