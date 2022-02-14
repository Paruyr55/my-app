import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ProfileComponent from './components/ProfileComponent/ProfileComponent';
import logo from './logo.svg';
 

const App =()=> {
  return (
    <BrowserRouter>
    <div className='appWrapper'>
      <Header/>
      <Navbar/>      
        <div className='appWrapper-content'>
          <Routes>
            <Route path="/profile" element={<ProfileComponent/>} />
            <Route path="/dialogs" element={<Dialogs/>} />            
          </Routes>
        </div>      
    </div>
    </BrowserRouter>
  );
}

export default App;
