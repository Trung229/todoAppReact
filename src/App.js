import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import ThemeContextProvider from './contexts/ThemeContext';
import UserContextProvider from './contexts/UserContext';
import ToggleButton from './components/ToggleButton';
import SignIn from './Page/SignIn'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import SignUp from "./Page/SignUp";
import Main from "./Page/Main";
import { UserContext } from './contexts/UserContext';
import React, { useContext } from 'react';
import TaskContextProvider from './contexts/TaskContext'

function App() {
  const unusedVar = 0;
  const unusedVar2 = 0;
  return (
    <UserContextProvider>
      <TaskContextProvider>
      <Router>
        <Switch>
          <Route path="/main/:user_id" component={Main}/>
          <Route path="/sign-up" component={SignUp}/>
          <Route extract path="/" component={SignIn}/>
        </Switch>
      </Router>
      </TaskContextProvider>
    </UserContextProvider>
  );
}

export default App;
