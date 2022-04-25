import Admin from './views/Admin.js';


import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route path='/admin'>
            <Admin/>
          </Route>
          
          {/* <Route path='/'>
            <Main/>
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App; 