import React from 'react';
import { Landing } from './Pages/Landing';
import { Nav } from './Components/Nav';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 2000,
});

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Landing />
    </React.Fragment>
  );
}

export default App;
