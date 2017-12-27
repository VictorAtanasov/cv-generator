import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//Components
import {Home} from './components/Home';

//Containers
import Header from './containers/Header';
import Registration from './containers/registration';
import CvPage from './containers/CvPage';
import PublicCvPage from './containers/PublicCvPage';


export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/registration' component={Registration} />
              <Route path='/cv/:id' component={CvPage} />
              <Route path='/public/cv/:id' component={PublicCvPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}
