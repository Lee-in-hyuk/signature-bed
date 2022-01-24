import './App.css';
import Header from './include/Header';
import Main from './main/Main';
import { Routes, Route } from 'react-router-dom';
import Footer from './include/Footer';
import Collection1 from './components/Collection1';
import Collection2 from './components/Collection2';
import Collection3 from './components/Collection3';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/collection1' element={<Collection1/>}/>
        <Route path='/collection2' element={<Collection2/>}/>
        <Route path='/collection3' element={<Collection3/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
