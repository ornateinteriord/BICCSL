import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Navbar from './pages/Navbar/Navbar';
import NotFound from './pages/not-found/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1 style={{ textAlign: 'center', marginTop: '20px' , color:"#313e4b" }}>Welcome to MLM</h1>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
