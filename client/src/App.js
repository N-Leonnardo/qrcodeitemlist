import './App.css';
import Admin from './views/Admin.js';


import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route path='/'>
            <Admin/>
          </Route>


        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App; 