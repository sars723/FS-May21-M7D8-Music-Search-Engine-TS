import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import MyNav from './components/MyNav';
import {useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import DetailPage from './components/DetailPage';

function App() {
  const [searchQuery,setSearchQuery]=useState('')
  return (
   <Router>
      <div className="App">
      <MyNav getSearchQuery={setSearchQuery}/>
     {/* <Home searchQuery={searchQuery}/> */}
     <Route path="/" exact render={routerProps =><Home {...routerProps} searchQuery={searchQuery}/>}/>
     <Route path="/detailPage/:id" exact component={DetailPage}/* render={routerProps=><DetailPage {...routerProps}/>} *//>
    </div>
   </Router>
  );
}

export default App;
