import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import Header from "./Header";

import Home2 from "./Home2";
import Contact from "./Contact";
import NoMatch from "./NoMatch";
import Layout from "./components/Layout";
import NavigationBar from "./components/NavigationBar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Home /> */}

      <React.Fragment>
        <NavigationBar />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home2} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
        <Banner />
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
