import React from "react";
import { motion } from "framer-motion";
import { StyledTerms } from "./terms.styled";
const termsAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
};
const Terms = () => {
  const terms = [
    { position: 1, text: "Доход после февраля падает / не стабильный" },
    { position: 2, text: "Не знаешь, откуда брать клиентов" },
    { position: 3, text: "Работаешь 24/7 и не успеваешь отдыхать" },
    { position: 4, text: "Боишься или  не знаешь, как поднять цены" },
    { position: 5, text: "Не знаешь, как выйти на другой уровень дохода" },
    {
      position: 6,
      text: 'Встреча с клиентом заканчивается "я подумаю" или "дорого"',
    },
  ];

  return (
    <StyledTerms>
      <div className="topic">Тебе подходит моя система, если:</div>
      <div className="terms">
        {terms
          .slice()
          .sort((a, b) => a.position - b.position)
          .map((term) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              key={term.position}
              custom={term.position}
              viewport={{ amount: 0.2, once: true }}
              variants={termsAnimation}
              className="term"
            >
              <p className="term_check">✔</p>
              <p className="term_text">{term.text}</p>
            </motion.div>
          ))}
      </div>
    </StyledTerms>
  );
};
export default Terms;
