import React from "react";
import { StyledTelegram } from "./telegram.styled";

const Telegram = () => {
  return (
    <StyledTelegram>
      <p className="text_telegram-invite">
        Зайди в мой Telegram-бот и забери методичку по закрытию возражения
        ДОРОГО
      </p>
      <button
        className="btn_telegram"
        onClick={() => window.open("https://tglink.ru/inna_bron_bot", "_blank")}
      >
        <img src="../photos/Icons/telegram_white.png" alt="telegram" />
      </button>
    </StyledTelegram>
  );
};
export default Telegram;
