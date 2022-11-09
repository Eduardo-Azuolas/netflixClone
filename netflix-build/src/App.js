import React, { useEffect } from 'react';

import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { auth } from './firebase'

import './App.css';

function App() {
  const user = null

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth)
      } else {

      }
    })

    return unsubscribe
  }, [])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />}></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
