import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import ErrorPage from './components/ErrorPage';
import {Switch,Route} from "react-router-dom";
import Logout from "./components/Logout";

function App() {
  return (
    <>
    <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/logout" component={Logout}/>
      <Route  to="*"  component={ErrorPage}/>
      </Switch>


     
    </>
    
  );
}

export default App;
