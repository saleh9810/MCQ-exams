import './App.css';
import {Router, Route, Switch} from 'react-router-dom';
import Result from './components/result/Result';
import Home from './components/home/Home';
import history from './history';



function App() {
  return (
    <div className="App">
       <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/result">
            <Result />
          </Route>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
