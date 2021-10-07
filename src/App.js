
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import NavBar from './components/NavBar';
import $ from 'jquery'
import Details from './components/Details';


function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Route  path="/" exact component={Home} />
      <Route  path="/cart"  component={Cart} />
      <Route  path="/details/:id" exact component={Details} />
    </Router>
    </>
  );
}

export default App;
