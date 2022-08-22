import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import Main from "./components/Main/main";
import MenuButton from "./MenuButton";
import Terms from "./components/Terms/terms";
import FiveSteps from "./components/FiveSteps/fiveSteps";
import Invitation from "./components/Invitation/invitation";
import FeedBacks from "./components/FeedBacks/feedBacks";
import Footer from "./components/Footer/footer";
import Features from "./components/Features/features";
import AboutMe from "./components/AboutMe/aboutMe";
import Finality from "./components/Finality/finality";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <GlobalStyles />
        <MenuButton />
        <Main />
        <Terms />
        <Features />
        <FiveSteps />
        <Invitation />
        <AboutMe />
        <FeedBacks />
        <Finality />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
export default App;
