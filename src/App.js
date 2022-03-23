import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import Movies from './components/Movies';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route path="/movies" element={<Movies></Movies>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
