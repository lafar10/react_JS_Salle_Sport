import logo from './logo.svg';
import {BrowserRouter as Router, Redirect , Route, Switch} from 'react-router-dom';
import axios from 'axios';


import MasterPage from './layouts/front/MasterPage';


import PrivateAdminRoute from './Routages/PrivateAdminRoute';

//Auth
import Login from './components/front/auth/Login';
import Register from './components/front/auth/Register';
import Unauthorized from './components/front/Unauthorized';
import Forbidden from './components/front/Forbidden';

//front

import Pdf from './components/front/Pdf';

axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function(config){

    const token = localStorage.getItem('token');

    config.headers.Authorization = token ? 'Bearer ' + token : '';

    return config;

});


function App() {
  return (
    <div className="App">

        <Router>

              <Switch>

                    {/* <Route path='/admin' name='/admin'  render={(props) => <MasterAdmin {...props}/>} />*/}           
                    {/*<Route path='/Login' component={Login}   />
                    <Route path='/Register' component={Register} />*/}

                    <Route path='/Forbidden' component={Forbidden}   />
                    <Route path='/Unauthorized' component={Unauthorized} />

                    <Route path='/Pdf/:id' component={Pdf} />

                    <Route path='/TownClub' name='/TownClub'  render={(props) => <MasterPage {...props}/>} />

                    <Route path='/Login'>
                        {localStorage.getItem('token') ? <Redirect to='/TownClub/Home'/> : <Login />}
                    </Route>
                    <Route path='/Register'>
                        {localStorage.getItem('token') ? <Redirect to='/TownClub/Home'/> : <Register />}
                    </Route>

                    <PrivateAdminRoute  path='/admin' name='/admin' />

              </Switch>

        </Router>

    </div>
  );
}

export default App;
