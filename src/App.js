import React from "react";
import { Landing } from "./Pages/Landing";
import { Nav } from "./Components/Nav";
import { View } from "./Pages/View";
import { Upload } from "./Pages/Upload";
import AOS from "aos";
import "aos/dist/aos.css";
import { HashRouter as Router, Route } from "react-router-dom";

AOS.init({
  duration: 2000,
});

function App() {
  return (
    <Router>
      <Route path="/" exact component={Nav} />
      <Route path="/" exact component={Landing} />
      <Route path="/view" exact component={View} />
      <Route path="/upload" exact component={Upload} />
    </Router>
  );
}

export default App;
