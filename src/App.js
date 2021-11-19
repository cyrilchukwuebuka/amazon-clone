import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Checkout from './pages/checkout/Checkout';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

