import './App.css';
import NavBar from "./components/NavBar/NavBar";
import HomeDisplay from './components/UI/Display/HomeDisplay.js';
import Services from "./components/Services/Services";
import Products from "./components/Products/Products";
import Articles from "./components/Articles/Articles";
import Footer from './components/Footer/Footer.js';
import { Switch , Route , Redirect } from "react-router-dom";

function App() {
  return (
    <>
    
    <div className="App">
    <NavBar />
     <Switch >
        <Route exact path='/' component={HomeDisplay} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/articles' component={Articles} />
        <Redirect to='/' />
     </Switch >
      <Footer />
    </div>
    </>
  );
}

export default App;
