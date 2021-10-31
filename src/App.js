
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import AddServices from './components/AddServices/AddServices';
import SingleService from './components/SingleService/SingleService';
import ManageServices from './components/ManageServices/ManageServices';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Cart from "./components/Cart/Cart";
import MyOrder from "./components/MyOrder/MyOrder";

function App() {
  return (
    <div className="">
      <AuthProvider>
      <Router>
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
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/contacts'>
            <Contacts></Contacts>
          </Route>
          <Route path='/login'>
              <Login></Login>
          </Route>
          <Route path='/addServices'>
              <AddServices></AddServices>
          </Route>

          <Route path='/manageServices'>
              <ManageServices></ManageServices>
          </Route>

          <Route path='/myOrder'>
              <MyOrder></MyOrder>
          </Route>

          <PrivateRoute path='/singleService/:id'>
              <SingleService></SingleService>
          </PrivateRoute>

          <PrivateRoute path='/cart'>
              <Cart></Cart>
          </PrivateRoute>

          <Route path='*'>
              <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
