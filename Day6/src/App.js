import { BrowserRouter as Router,Routes,Route}  from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';

import Dashboard from './components/Dashboard';
import './assets/css/Login.css';
import './assets/css/Signup.css';
import Order from './components/Order';
import Category1 from './components/Category1';
import Dash from './components/Dash';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
       
          <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/dash" element={<Dash/>}/>
          <Route path="/products/category1" element={<Category1/>}/>
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;