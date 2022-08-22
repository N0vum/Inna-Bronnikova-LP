import styled from "styled-components";

export const StyledMain = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 50% 50%;
  grid-auto-rows: 20% 80%;
  grid-template-areas:
    "title title"
    "card slogan";
  align-items: end;
  background-color: ${({ theme }) => theme.primaryWhite2};
  @media (min-height: 1024px) {
    height: 70vh;
  }
  @media (min-width: 1690px) {
    width: 70%;
    margin: 0 auto;
    grid-auto-rows: 20% 80%;
  }
  @media (max-width: 1023px) {
    height: auto;
  }
  @media (max-width: 576px) {
    grid-template-columns: 100%;
    grid-auto-rows: 10% 1fr 1fr;
    grid-template-areas:
      "title"
      "card"
      "slogan";
    width: 100%;
  }

  .title {
    grid-area: title;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-items: center;
    padding: 5rem 0 1rem 3rem;
    background: ${({ theme }) => theme.primaryWhite};
    z-index: 1000;
    @media (max-width: 1363px) {
      padding-left: 3rem;
    }
    @media (max-width: 1024px) {
      padding: 3rem 0 1.5rem 2rem;
    }
    @media (max-width: 768px) {
      padding: 4rem 0 1.5rem 2rem;
    }
    @media (max-width: 576px) {
      justify-items: start;
      text-align: center;
      align-self: flex-start;
      padding: 2.5rem 1rem 0rem 1rem;
    }
    @media (max-width: 375px) {
      padding-top: 2rem;
    }
  }
  .name {
    font-size: 2.3rem;
    letter-spacing: 0.5rem;
    padding-top: 1rem;
    color: ${({ theme }) => theme.primaryBlack};
    @media (max-width: 1024px) {
      font-size: 1.7rem;
      line-height: 2rem;
      padding-top: 0;
    }
    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
    @media (max-width: 576px) {
      margin: 0 auto;
      align-self: start;
      font-size: 2rem;
      line-height: 2.2rem;
    }
    @media (max-width: 355px) {
      padding: 0 1rem;
      font-size: 1.8rem;
    }
  }
  .role {
    grid-area: role;
    align-self: start;
    justify-self: center;
    font-size: 0.9rem;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    @media (max-width: 1024px) {
      font-size: 0.7rem;
      line-height: 0.5rem;
    }
    @media (max-width: 820px) {
      padding-bottom: 1.5rem;
    }
    @media (max-width: 576px) {
      padding: 0;
      line-height: 1.5rem;
      align-self: center;
      justify-self: start;
      font-size: 1rem;
      text-align: center;
    }
    @media (max-width: 320px) {
      font-size: 0.85rem;
    }
  }

  .slogan {
    height: 70%;
    grid-gap: 2rem;
    @media (min-height: 1024px) {
      margin-top: 8rem;
      height: auto;
    }
    @media (max-width: 890px) {
      margin-left: 1.5rem;
      align-items: center;
      height: 60%;
    }
    @media (max-width: 576px) {
      height: auto;
      align-self: flex-start;
      justify-content: center;
      grid-gap: 0rem;
      margin: 0 auto;
      padding: 0 2rem 3rem 2rem;
    }

    @media (max-width: 320px) {
      width: 95%;
      margin: -8rem 0.2rem 1rem 0.2rem;
    }
    @media (max-width: 280px) {
      margin-top: -11rem;
    }
  }

  .general > p {
    white-space: nowrap;
    @media (max-width: 1024px) {
      line-height: 1.2rem;
    }
    @media (max-width: 576px) {
      font-size: 1.4rem;
      line-height: 2.5rem;
    }
    @media (max-width: 414px) {
      font-size: 1.1rem;
      white-space: pre-wrap;
      line-height: 3.2rem;
      letter-spacing: 5px;
    }
    @media (max-width: 320px) {
      font-size: 16px;
      letter-spacing: 3px;
    }
    @media (max-width: 280px) {
      font-size: 16px;
      letter-spacing: 2px;
    }
  }
  .instruction {
    @media (max-width: 1024px) {
      line-height: 1.4;
    }
    @media (max-width: 890px) {
      padding-bottom: 3rem;
    }
    @media (max-width: 576px) {
      margin: -2rem 0 0 0;
      letter-spacing: 0.1rem;
      line-height: 3rem;
      font-size: 1.4rem;
    }
    @media (max-width: 319px) {
      font-size: 18px;
    }
  }
  .card {
    grid-area: card;
    height: auto;
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
    background-position: 50% 12%;
    align-self: end;
    justify-self: center;
    @media (max-width: 850px) {
      background-position: 40% 50%;
      height: 100%;
      width: 100%;
    }
    @media (max-width: 768px) {
      background-position: 60% 50%;
    }
    @media (max-width: 576px) {
      background-position: 60% 7%;
    }
    @media (max-width: 320px) {
      background-size: contain;
      background-position: 50% 35%;
    }
  }
  .card > img {
    object-fit: contain;
    width: 33rem;
    height: auto;
    align-self: end;
    margin-bottom: -5px;

    @media (min-width: 1690px) {
      width: 37rem;
    }
    @media (max-width: 1024px) {
      width: 26rem;
    }

    @media (max-width: 850px) {
      width: 0;
    }
  }
`;
