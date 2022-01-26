import './App.css';
import Header from './include/Header';
import Main from './main/Main';
import { Routes, Route } from 'react-router-dom';
import Footer from './include/Footer';
import Collection1 from './components/Collection1';
import Collection2 from './components/Collection2';
import Collection3 from './components/Collection3';
import Product1 from './components/Product1';
import Product2 from './components/Product2';
import Product3 from './components/Product3';
import Product4 from './components/Product4';
import Store from './components/Store';
import About from './components/About';
import Board from './components/Board';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/collection1' element={<Collection1/>}/>
        <Route path='/collection2' element={<Collection2/>}/>
        <Route path='/collection3' element={<Collection3/>}/>
        <Route path='/product1' element={<Product1/>}/>
        <Route path='/product2' element={<Product2/>}/>
        <Route path='/product3' element={<Product3/>}/>
        <Route path='/product4' element={<Product4/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/board' element={<Board/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
