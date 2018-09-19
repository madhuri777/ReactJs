import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Registration from './Components/Pages/Registration';
import Login from './Components/Pages/Login';
import ResetPassWord from './Components/Pages/ResetPassWord';
import Home from './Components/Pages/Home';
import NewPassWord from './Components/Pages/NewPassWord'

class App extends Component {
  render() {
    return (
      <div>
        <Router >
          <Switch>
            <Route exact path='/' render={() => (<Redirect to='/login' />)} />
            <Route path='/login' exact strict component={Login}></Route>
            <Route path='/registration' exact strict component={Registration}></Route>
            <Route path='/resetpassword' exact strict component={ResetPassWord}></Route>
            <Route path='/newpassword' exact strict component={NewPassWord}></Route>
            <Route path='/home' exact strict component={Home}></Route>
          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;
