import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import OurBlog from './pages/OurBlog';
import LogIn from './pages/LogIn';
import Register from './components/Register';


function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='/categories' element={<CategoryPage />} />
        <Route path='/blog' element={<OurBlog />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/register' element={<Register />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
