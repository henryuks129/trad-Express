import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import Dictionary from './pages/Dictionary';
import CryptoTrading from './pages/CryptoTrading';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/Signin' element={<Signin/>} />
        <Route path='/CryptoTrading' element={<CryptoTrading/>} />
        <Route path='/Dictionary' element={<Dictionary/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
