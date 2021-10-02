import './App.css';
import NavbarComp from './Components/NavbarComp';
import SignUp from './Screens/SignUp';
import { Route, Switch } from "react-router";
import Login from './Screens/Login';
import Products from './Screens/Products';
function App() {
  return (
    <div className="App">
     <NavbarComp/>
     <Switch>
     <Route  path="/signup" component={SignUp}></Route>
     <Route  path="/login" component={Login}></Route>
     <Route  path="/products" component={Products}></Route>
     </Switch>
     
    </div>
  );
}

export default App;
