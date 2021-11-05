import './App.css';
import Exam from './components/exam/Exam';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Result from './components/result/Result';
import Header from './components/header/Header';
import history from './history';



function App() {
  return (
    <div className="App">
       <BrowserRouter history={history}>
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route  path="/result">
            <Result />
          </Route>
        
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
