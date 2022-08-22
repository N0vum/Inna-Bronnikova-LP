import React from "react";
import { StyledFooter } from "./footer.styled";

const Footer = () => {
  return (
    <StyledFooter id="contacts">
      <div>
        <p>ИП Бронникова Инна Сергеевна</p>
        <p>ИНН 540434548335</p>
        <p>ОГРН 321547600095324</p>
      </div>

      <div className="contacts">
        <button
          className="footer_icons btn-icon"
          onClick={() =>
            window.open("https://vk.com/inna_nowtimepro", "_blank")
          }
        >
          <img src="../photos/Icons/vk.png" alt="vk-logo" />
        </button>
        <button
          className="footer_icons btn-icon"
          onClick={() => window.open("https://t.me/inna_nowtimepro", "_blank")}
        >
          <img src="../photos/Icons/telegram.png" alt="telegram-logo" />
        </button>
        <p>Тел.: +7 901 713 08 24</p>
        <p style={{ whiteSpace: "nowrap" }}>E-mail: nowtime.bro@yandex.ru</p>
      </div>

      <a href="#top" className="footer_arrow-up btn-icon">
        ⇧
      </a>
      <p className="footer_copy">© 2022 Novum</p>
    </StyledFooter>
  );
};
export default Footer;
