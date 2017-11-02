import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

//Components
import { Home } from './components/Home';

//Containers
import Header from './containers/Header';
import authLogIn from './containers/authLogIn';
import authSignUp from './containers/authSignUp';


export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/logIn' component={ authLogIn } />
            <Route path='/signUp' component={ authSignUp } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
