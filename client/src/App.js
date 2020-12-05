import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Activate from './pages/Activate';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordConfirm from './pages/ResetPasswordConfirm';
import Shop from './pages/Shop';
import Cancel from './pages/Cancel';
import Success from './pages/Success';
import Contact from './pages/Contact';
// Place PrivateRoute whenever
// import PrivateRoute from './components/PrivateRoute';
import { Provider } from 'react-redux';
import store from './redux/store';

import Layout from './components/Layout';

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/reset_password' component={ResetPassword} />
          <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
          <Route exact path='/activate/:uid/:token' component={Activate} />
          <Route exact path='/cancel' component={Cancel} />
          <Route exact path='/success' component={Success} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

export default App;
