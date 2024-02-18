// App.js

import React from 'react';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Homepage from './Pages/Homepage';
import ViewAnimals from './Pages/ViewAnimals';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MyAccount from './Pages/MyAccount';
import MyAccountLogin from './Pages/MyAccountLogin';
import DonatePet from './Pages/DonatePet';
import AboutUs from './Pages/AboutUs';
import { AuthProvider } from './Tools/Context';

function App() {
  const [formType, setFormType] = React.useState('register');

  const handleFormSwitch = (type) => {
    setFormType(type);
  };

  return (
    <React.Fragment>
      <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ViewAnimals" element={<ViewAnimals />} />
          <Route path="/MyAccount" element={<MyAccount onFormSwitch={handleFormSwitch} />}/>
          <Route path="/MyAccountLogin" element={<MyAccountLogin onFormSwitch={handleFormSwitch} />} />
          <Route path="/DonatePet" element={<DonatePet />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </Router>
      <Footer />
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
