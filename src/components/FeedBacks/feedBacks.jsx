import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { StyledFeedBacks } from "./feedBacks.styled";

const items = [...Array(16)]
  .map((e, i) => i + 1)
  .map((f, index) => (
    <img
      className="feedback"
      src={`photos/Feedbacks/${f}.jpg`}
      alt={`feedback number ${index + 1}`}
    />
  ));

const FeedBacks = () => {
  const responsive = {
    2000: {
      items: 4,
    },
    1440: {
      items: 3,
    },
    1200: {
      items: 3,
    },
    1024: {
      items: 2,
    },
    820: {
      items: 1,
    },
    500: {
      items: 1,
    },
    0: {
      items: 0,
    },
  };
  return (
    <StyledFeedBacks id="feedbacks">
      <div className="topic">Отзывы клиентов</div>
      <AliceCarousel
        items={items}
        responsive={responsive}
        animationDuration={1000}
        mouseTracking
        touchTracking
        mouseDragEnabled
        disableDotsControls
      />
    </StyledFeedBacks>
  );
};

export default FeedBacks;
