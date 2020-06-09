import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import theme from "./ui/Theme";
import Services from "./Services";
import CustomSoftware from "./CustomSoftware";

import LandingPage from "./LandingPage";

function App() {
  //Det the selected MenuItem
  const [selectedIndex, setSelectedIndex] = useState(0);
  //Det. the current active tab
  const [value, setValue] = useState(0);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />

          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <LandingPage
                  {...props}
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              )}
            />
            <Route
              exact
              path="/services"
              render={(props) => (
                <Services
                  {...props}
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              )}
            />
            <Route
              exact
              path="/customsoftware"
              render={(props) => (
                <CustomSoftware
                  {...props}
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              )}
            />
            <Route
              exact
              path="/mobileapps"
              component={() => <div>mobileapps</div>}
            />
            <Route
              exact
              path="/websites"
              component={() => <div>websites</div>}
            />
            <Route
              exact
              path="/revolution"
              component={() => <div>revolution</div>}
            />
            <Route exact path="/about" component={() => <div>about</div>} />
            <Route exact path="/contact" component={() => <div>contact</div>} />
            <Route
              exact
              path="/estimate"
              component={() => <div>estimate</div>}
            />
          </Switch>
          <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
