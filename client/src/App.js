import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookCollection from './Components/BookCollection/BookCollection';
import BookHire from './Components/BookHire/BookHire';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Login/Register';
import Navbar from './Components/Navbar/Navbar';
import RegistrationBook from './Components/RegistratonBook/RegistrationBook';
import Welcome from './Components/Welcome/Welcome';
import useFirebase from './Hooks/UseFirebase';

function App() {
  const { users } = useFirebase();

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={users.email ? <Welcome /> : <Login />} />
          <Route path="/register" element={<Register />} />
          {users.email && <Route path="/registrationbook" element={<RegistrationBook />} />}
          {users.email && <Route path="/bookcollection" element={<BookCollection />} />}
          <Route path="/bookcollection/:id" element={<BookHire />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;