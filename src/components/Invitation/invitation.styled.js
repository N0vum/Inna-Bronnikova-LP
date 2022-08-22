import styled from "styled-components";

export const StyledInvitation = styled.div`
  height: 100vh;
  padding: 5rem 0;
  display: grid;
  grid-template-rows: 30% 70%;
  justify-items: center;
  background-color: #fff;
  @media (min-width: 1690px) {
    width: 70%;
    margin: 0 auto;
  }
  @media (min-height: 1024px) {
    height: 50vh;
  }
  @media (max-width: 1240px) {
    height: auto;
  }
  @media (max-width: 768px) {
    grid-template-rows: 20% 80%;
  }
  @media (max-width: 400px) {
    padding: 6rem 0 4rem 0;
  }
  .topic {
    width: 70%;
    margin-bottom: 5rem;
    letter-spacing: 0.2rem;
    @media (max-width: 500px) {
      width: 90%;
      letter-spacing: 0;
    }
  }
  .invitation_container {
    width: 60%;
    display: grid;
    grid-template-columns: 40% 60%;
    align-self: center;
    @media (max-width: 768px) {
      align-items: center;
      grid-template-columns: repeat(auto-fill, minmax(150px, 600px));
      margin: -2rem 0 -5rem 0;
    }
  }
  .invitation_form {
    @media (max-width: 768px) {
      justify-self: center;
    }
  }
  .box {
    width: 15rem;
    margin-top: 5rem;
    z-index: 100;
    @media (max-width: 1280px) {
      width: 13rem;
    }
    @media (max-width: 768px) {
      margin: 0 auto;
      width: 11rem;
    }
    @media (max-width: 576px) {
      width: 7rem;
    }
  }
`;
