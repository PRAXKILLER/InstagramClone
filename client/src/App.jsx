import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path='/:type' element={<HomeLayout>
        <HomePage />
      </HomeLayout>}/>
    </Routes>
  );
}

export default App;
