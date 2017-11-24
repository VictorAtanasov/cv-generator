import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


//Components
import {Home} from './components/Home';

//Containers
import Header from './containers/Header';
import Registration from './containers/registration';
import CvPage from './containers/CvPage';


export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/registration' component={Registration} />
            <Route path='/cv/:id' component={CvPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
