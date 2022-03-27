import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './containers/Home'
import Characters from './containers/Characters'
import Favorites from './containers/Favorites'
import Account from './containers/Account'
import Character from './components/Character'
import './style/style.scss'

export * as actionCreators from './actions/index'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Header/>
        
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/characters' element={<Characters />}/>
          <Route path='/favorites' element={<Favorites />}/>
          <Route path='/account' element={<Account />}/>

          <Route path='/character' element={<Character />}/>
        </Routes>

        <Footer />

      </BrowserRouter>      
    </div>
  );
}

export default App;
