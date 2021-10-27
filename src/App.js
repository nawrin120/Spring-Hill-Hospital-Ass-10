
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Doctors from './component/Doctors/Doctors';
import Footer from './component/Footer/Footer';
import Header from './component/Home/Header/Header';
import Home from './component/Home/Home/Home';
import ServiceDetails from './component/Home/Services/ServiceDetails/ServiceDetails';
import Services from './component/Home/Services/Services';
import Login from './component/Loigin/Login';
import PrivateRoute from './component/Loigin/PrivateRoute';
import NotFound from './component/NotFound/NotFound';
import Registration from './component/Registration/Registration';
import AuthProvider from './Context/AuthProvider';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>

          <Header></Header>

          <Switch>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path='/services'>
              <Services></Services>
            </Route>

            <PrivateRoute path='/serviceDetails/:id'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <PrivateRoute path='/doctors'>
              <Doctors></Doctors>
            </PrivateRoute>

            <PrivateRoute path='/about'>
              <About></About>
            </PrivateRoute>

            <Route path='/registration'>
              <Registration></Registration>
            </Route>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>

          <Footer></Footer>

        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
