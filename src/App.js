import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//Components
import {Home} from './components/Home';
import {Footer} from './components/Footer';

//Containers
import Header from './containers/Header';
import Registration from './containers/registration';
import CvPage from './containers/CvPage';


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
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}
