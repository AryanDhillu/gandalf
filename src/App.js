import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Eventdetails from './components/Eventdetails';
import Registerform from './components/Registerform';
import Levelone from './components/Levelone';
import Leveltwo from './components/Leveltwo';
import Levelthree from './components/Levelthree';
import Levelfour from './components/Levelfour';
import Levelfive from './components/Levelfive';
import Levelsix from './components/Levelsix';

function App() {

  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Eventdetails />} />
        <Route path="/registration" element={<Registerform />} />
        <Route path="/level1" element={<Levelone />} />
        <Route path="/level2" element={<Leveltwo />} />
        <Route path="/level3" element={<Levelthree />} />
        <Route path="/level4" element={<Levelfour />} />
        <Route path="/level5" element={<Levelfive />} />
        <Route path="/level6" element={<Levelsix />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
