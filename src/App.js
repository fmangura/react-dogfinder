import { BrowserRouter, Route, Routes, Navigate, Link } from 'react-router-dom';
import './App.css';
import DogsList from './components/DogsList'
import DogPage from './components/DogPage';
import Nav from './components/Nav';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <div className='Navbar'>
            <li><Link to={`/dogs`}>Home</Link></li>
            <li><Nav name={'Whiskey'}/></li>
            <li><Nav name={'Duke'}/></li>
            <li><Nav name={'Perry'}/></li>
          </div>
          <Routes>
            <Route path='/dogs' element={<DogsList />}></Route>
            <Route path='/dogs/:dogname' element={<DogPage />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
