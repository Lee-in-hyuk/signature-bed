import './App.css';
import Header from './include/Header';
import Main from './main/Main';
import { Routes, Route } from 'react-router-dom';
import Footer from './include/Footer';
import Collection1 from './components/Collection1';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/collection1' element={<Collection1/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
