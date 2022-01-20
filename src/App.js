import './App.css';
import Header from './include/Header';
import Main from './main/Main';
import { Routes, Route } from 'react-router-dom';
import Video from './components/Video';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/video' element={<Video/>}/>
      </Routes>
      <Main/>
    </div>
  );
}

export default App;
