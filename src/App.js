import './App.css';
import Clients from './Components/Clients/client';
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/login';
import Products from './Components/Products/product';
import Team from './Components/Team/team';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  
  return (
    <div>
       <Router>
           
          <Routes>
          <Route exact path="/login" element={ <Login /> } />
          <Route exact path="/home" element={ <Homepage /> } />
          <Route exact path="/clients" element={  <Clients/>} /> 
          <Route exact path="/product" element={<Products/>} />
          <Route exact path="/team" element={<Team/>} />
          </Routes>
       </Router>
    </div>
  );
}

export default App;
