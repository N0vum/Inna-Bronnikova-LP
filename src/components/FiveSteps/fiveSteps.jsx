import React from "react";
import { motion } from "framer-motion";
import { StyledFiveSteps } from "./fiveSteps.styled";
const fiveStepsAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
const FiveSteps = () => {
  const steps = [
    {
      role: "diagnost",
      text: "диагностика",
      digit: 1,
    },
    {
      role: "transform",
      text: "трансформация продукта",
      digit: 2,
    },
    {
      role: "pull",
      text: "привлечение целевых клиентов",
      digit: 3,
    },
    {
      role: "sale",
      text: "продажа без продажи",
      digit: 4,
    },
    {
      role: "scale",
      text: "масштабирование результатов",
      digit: 5,
    },
  ];
  return (
    <StyledFiveSteps>
      <div className="topic">Двигатель дохода - это 5 простых шагов:</div>
      <div className="steps">
        {steps
          .slice()
          .sort((a, b) => a.digit - b.digit)
          .map((s) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              custom={s.digit}
              viewport={{ amount: 0.5, once: true }}
              variants={fiveStepsAnimation}
              key={s.digit}
              className="step"
            >
              <div id={`id_${s.digit}`} className="step_digit">
                {s.digit}
              </div>
              <div className="step_text">{s.text}</div>
            </motion.div>
          ))}
      </div>
    </StyledFiveSteps>
  );
};

export default FiveSteps;
