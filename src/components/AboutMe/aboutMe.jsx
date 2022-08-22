import React from "react";
import { StyledAboutMe } from "./aboutMe.styled";
import useMediaQuery from "../../useMediaQuery.jsx";

const AboutMe = () => {
  const isMobile576 = useMediaQuery("(max-width: 576px)");
  const dataAboutMe = [
    {
      title: "Обо мне",
      1: "Наставник по увеличению дохода",
      2: "Управляла бизнесами в 9 сферах",
      3: "Владелец 4 компаний",
      4: "Более 1500 клиентов выросли в доходе в 5 раз благодаря моей пошаговой системе продаж",
      5: "Прицельно нахожу зоны роста, привожу за руку к результатам",
      6: "Заражаю и заряжаю позитивом",
      7: "2 в/о + MBA",
    },
    {
      title: "Личные рекорды",
      1: "Рост выручки в 4980 раз за 1 год",
      2: "Превратила 180 тыс. в 2 млн. за 1 встречу",
    },
    {
      title: "Рекорды клиентов с марта 2022г.",
      1: "Рост выручки со 192 тыс. до 1,8 млн. за 3 недели",
      2: "Рост клиентской базы в 6 раз за 1 месяц",
    },
    { title: "ГАРАНТИЯ по договору" },
    {
      img_aboutMe: "../photos/Inna/img_pink_full.jpg",
      img_aboutMe576: "../photos/Inna/img_pink.jpg",
      alt: "Inna Bronnikova",
    },
  ];

  return (
    <StyledAboutMe id="about">
      <div className="about_text">
        {dataAboutMe
          .slice()
          .splice(0, dataAboutMe.length - 1)
          .map((data, index) => (
            <ul key={index}>
              {data.title}
              {Object.values(data)
                .splice(0, Object.values(data).length - 1)
                .map((str, index) => (
                  <div className="paragraph" key={index}>
                    <div className="circle">●</div>
                    <li>{str}</li>
                  </div>
                ))}
            </ul>
          ))}
      </div>
      <div
        className="about_photo"
        alt={dataAboutMe.alt}
        style={{
          backgroundImage: !isMobile576
            ? `url(${dataAboutMe.pop().img_aboutMe})`
            : `url(${dataAboutMe.pop().img_aboutMe576})`,
        }}
      ></div>
    </StyledAboutMe>
  );
};
export default AboutMe;
