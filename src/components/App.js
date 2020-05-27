import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import theme from "./ui/Theme";

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
              component={() => <div style={{ height: "2000px" }}>Home</div>}
            />
            <Route
              exact
              path="/services"
              component={() => <div>services</div>}
            />
            <Route
              exact
              path="/customsoftware"
              component={() => <div>customsoftware</div>}
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
          <Footer
            value={value}
            setValue={setValue}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
