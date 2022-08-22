import React from "react";
import { motion } from "framer-motion";
import { StyledMain } from "./main.styled";
import ButtonModal from "../ButtonModal/buttonModal";
import useMediaQuery from "../../useMediaQuery.jsx";
const dataMain = {
  name: "Инна Бронникова",
  role500_1: "Наставник миллионеров",
  role500_2: " по увеличению дохода",
  role: "Наставник миллионеров по увеличению дохода",
  general_main_1: "Продавай дорого, ",
  general_main_2: "легко и ",
  general_main_3: "с удовольствием!",
  general_main_all: "Продавай дорого, легко и с удовольствием!",
  instruction_main:
    "Разберем твою систему продаж и найдем зоны роста на бесплатной консультации",
  img576_main: "../photos/Inna/img_white.jpg",
  img576_2_main: "../photos/Inna/img_white2.jpg",
  img_main: "../photos/Inna/img_green_chair_croped.png",
  img850_main: "../photos/Inna/img_green_chair.jpg",
  alt_main: "Inna Bronnikova",
};

const sloganAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};
const instructionAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.4 },
  }),
};
const Main = () => {
  const isMobile850 = useMediaQuery(
    "(min-width: 577px) and (max-width: 850px)"
  );
  const isMobile576 = useMediaQuery("(max-width: 576px)");
  const isMobile500 = useMediaQuery("(max-width: 500px)");
  const isMobile400 = useMediaQuery("(max-width: 400px)");
  return (
    <StyledMain>
      <div className="title" id="top">
        <div className="name">{dataMain.name}</div>
        <div className="role">
          {!isMobile500 ? (
            <p>
              <span>{dataMain.role500_1}</span>
              <span style={{ whiteSpace: "nowrap" }}>{dataMain.role500_2}</span>
            </p>
          ) : (
            <p>{dataMain.role}</p>
          )}
        </div>
      </div>
      <motion.div initial="hidden" whileInView="visible" className="slogan">
        {!isMobile400 ? (
          <h2 className="general">
            <motion.p custom={1} variants={sloganAnimation}>
              {dataMain.general_main_1}
            </motion.p>
            <motion.p custom={2} variants={sloganAnimation}>
              {dataMain.general_main_2}
            </motion.p>
            <motion.p custom={3} variants={sloganAnimation}>
              {dataMain.general_main_3}
            </motion.p>
          </h2>
        ) : (
          <h2 className="general">
            <motion.p
              custom={1}
              variants={sloganAnimation}
              viewport={{ amount: 0.2, once: true }}
            >
              {dataMain.general_main_all}
            </motion.p>
          </h2>
        )}
        {isMobile400 ? (
          <motion.p
            className="instruction"
            custom={2}
            variants={instructionAnimation}
            viewport={{ amount: 0.2, once: true }}
          >
            {dataMain.instruction_main}
          </motion.p>
        ) : (
          <p className="instruction">{dataMain.instruction_main}</p>
        )}
        <ButtonModal />
      </motion.div>
      <div
        className="card"
        style={{
          backgroundImage: isMobile850
            ? `url(${dataMain.img850_main})`
            : isMobile576
            ? `url(${dataMain.img576_2_main})`
            : "none",
        }}
      >
        {isMobile576 ? null : (
          <img src={`${dataMain.img_main}`} alt={dataMain.alt_main} />
        )}
      </div>
    </StyledMain>
  );
};
export default Main;
