import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './Pages/Login/Login'
import Homepage from './Pages/Homepage/Homepage'

import {useStateValue} from 'Context/StateProvider'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [{user}, dispatch] = useStateValue();
  return (
    <div className="App">
        {/* <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Login}/>
            <Route path='/home' exact component={Homepage}/>
          </Switch>
        </BrowserRouter> */}
        {!user ? (
           <Login/>
        ) : (
            <Homepage/>
        )}
    </div>
  );
}

export default App;
