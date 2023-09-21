import './assets/css/App.css';
import { BrowserRouter as Router,Routes,Route}  from 'react-router-dom'
import Login from './assets/css/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
