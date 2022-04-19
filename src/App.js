import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Service from './components/pages/Service';
import Tutorial from './components/pages/Tutorial';

import { AppProvider } from "./context/AppContext"
import Dashboard from './components/pages/dasbboarduser/Dashboard';
import Profile from './components/pages/dasbboarduser/Profile';
import Setting from './components/pages/dasbboarduser/Setting';
import Transaksi from './components/pages/dasbboarduser/Transaksi';
import Riwayat from './components/pages/dasbboarduser/Riwayat';
import Petugas from './components/pages/dasbboarduser/Petugas';

function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/service">
            <Service/>
          </Route>
          <Route path="/tutorial">
            <Tutorial/>
          </Route>
          <Route path="/login" render={(props) => <Login {...props} />}/>
          <Route path="/register"render={(props) => <Register {...props} />}/>
          <Route path="/dashboard" render={(props) => <Dashboard {...props} />}/>
          <Route path="/profile" render={(props) => <Profile {...props} />}/>
          <Route path="/setting" render={(props) => <Setting {...props} />}/>
          <Route path="/transaksi" render={(props) => <Transaksi {...props} />}/>
          <Route path="/petugas" render={(props) => <Petugas {...props} />}/>
          <Route path="/riwayat" render={(props) => <Riwayat {...props} />}/>
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
