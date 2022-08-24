import React from "react";
import { StyledTelegram } from "./telegram.styled";

const Telegram = ({ active }) => {
  return (
    <StyledTelegram active={active}>
      <div className="text_telegram-invite">
        <div className="text_telegram-invite_paragraph">
          <p>📨</p>
          <p>Заявка на бесплатную консультацию получена!</p>
        </div>
        <div className="text_telegram-invite_paragraph">
          <p>📅</p>
          <p>Я свяжусь с тобой для согласования удобного времени.</p>
        </div>
        <div className="text_telegram-invite_paragraph">
          <p>🎁</p>
          <p>
            Получи методичку по закрытию возражения "ДОРОГО" в моем Telegram
          </p>
        </div>
      </div>
      <button
        className="btn_telegram"
        onClick={() => {
          window.open("https://tglink.ru/inna_bron_bot", "_blank");
          active
            ? window.ym(90054720, "reachGoal", "button1-submint")
            : window.ym(90054720, "reachGoal", "button2-submint");
        }}
      >
        <img src="../photos/Icons/telegram_white.png" alt="telegram" />
      </button>
    </StyledTelegram>
  );
};
export default Telegram;
