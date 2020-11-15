import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import News from './Components/News/News';
import {BrowserRouter, Route} from 'react-router-dom';


function App(props) {
  return (
    <BrowserRouter>
      <div className={'app-wrapper'}>
        <Header/>
        <Navbar/>
        <div className={'app-wrapper-content'}>
          <Route path={'/dialogs'} component={Dialogs}/>
          <Route path={'/profile'} component={Profile}/>
          <Route path={'/news'} component={News}/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
