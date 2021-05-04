import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Com from './components/Com'

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Switch>
          <Route path="/home" exact component={() => <Com />} />
        </Switch>
        </Router>
    </div>
  );
}

export default App;
