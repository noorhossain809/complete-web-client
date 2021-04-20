import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';
import Admin from './components/Admin/Admin';
import Book from './components/Dashboard/Dashboard/Book/Book';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import TestimonialForm from './components/TestimonialForm/TestimonialForm';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddService from './components/AddService/Addservice/AddService';

import BookingList from './components/Sidebar/BookingList/BookingList';
import AllOrders from './components/AllOrders/AllOrders/AllOrders';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import ManageService from './components/ManageService/ManageService';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/manageServices">
            <ManageService></ManageService>
          </Route>
          <PrivateRoute path="/buy-product/:id">
            <Book></Book>
          </PrivateRoute>
          <Route path="/review">
            <TestimonialForm></TestimonialForm>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/booking">
            <BookingList></BookingList>
          </Route>
          <Route path="/orderList">
            <AllOrders></AllOrders>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
