import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact>
          
        </Route>
      </Switch>
    </div>
  );
}

export default App;
