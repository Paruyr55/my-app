import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ProfileComponent from './components/ProfileComponent/ProfileComponent';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';




 

const App =(props)=> { 
  
  return (
    <BrowserRouter>
    <div className='appWrapper'>
      <Header/>
      <Navbar/>      
        <div className='appWrapper-content'>
          <Routes>
            <Route path="/profile" 
                   element = {<ProfileComponent/>}  />
            <Route path="/dialogs" 
                   element={<DialogsContainer/>} />
            <Route path="/users" 
                   element={<UsersContainer />} />            
          </Routes>
        </div>      
    </div>
    </BrowserRouter>
  );
}

export default App;
