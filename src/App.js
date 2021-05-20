import React from 'react';
import './App.css';
import TodoApp from './TodoApp'
import SignInSide from './App_1'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" exact component={SignInSide} />
      <Route path="/todoapp" component={TodoApp} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
