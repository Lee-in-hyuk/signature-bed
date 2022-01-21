import './App.css';
import Header from './include/Header';
import Main from './main/Main';
import { Routes, Route } from 'react-router-dom';
import Video from './components/Video';
import Footer from './include/Footer';
import Test from './main/Test';

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Routes>
        <Route path='/Video' element={<Video/>}/>
      </Routes>
      <Main/>
      <Footer/> */}
      <Test/>
    </div>
  );
}

export default App;
