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
import Board from './components/board/Board';
import Basic1 from './components/Basic1';
import Basic2 from './components/Basic2';
import Basic3 from './components/Basic3';
import G2_01 from './components/G2_01';
import G2_02 from './components/G2_02';
import G2_03 from './components/G2_03';
import Active from './components/Active';

function App() {
  const sampleData = [
    {
      no:1,
      title: "basic",
      description: '샘플1',
      date: '22-01-28'
    },
    {
      no:2,
      title: "basic",
      description: '샘플1',
      date: '22-01-28'
    },
    {
      no:3,
      title: "basic",
      description: '샘플1',
      date: '22-01-28'
    },
    {
      no:4,
      title: "basic",
      description: '샘플1',
      date: '22-01-28'
    },
    {
      no:5,
      title: "basic",
      description: '샘플1',
      date: '22-01-28'
    },
    {
      no:6,
      title: "basic",
      description: '샘플1',
      date: '22-01-28'
    },
    {
      no:7,
      title: "basic",
      description: '샘플1',
      date: '22-01-28'
    },
    {
      no:8,
      title: "basic",
      description: '샘플1',
      date: '22-01-28'
    },
    {
      no:9,
      title: "basic",
      description: '샘플1',
      date: '22-01-28'
    },
  ]
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
        <Route path='/board' element={<Board sampleData={sampleData}/>}/>
        <Route path='/basic1' element={<Basic1/>}/>
        <Route path='/basic2' element={<Basic2/>}/>
        <Route path='/basic3' element={<Basic3/>}/>
        <Route path='/g2_01' element={<G2_01/>}/>
        <Route path='/g2_02' element={<G2_02/>}/>
        <Route path='/g2_03' element={<G2_03/>}/>
        <Route path='/active' element={<Active/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
