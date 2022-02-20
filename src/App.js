import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ProfileComponent from './components/ProfileComponent/ProfileComponent';
import DialogsContainer from './components/Dialogs/DialogsContainer';

 

const App =(props)=> { 
  
  return (
    <BrowserRouter>
    <div className='appWrapper'>
      <Header/>
      <Navbar/>      
        <div className='appWrapper-content'>
          <Routes>
            <Route path="/profile" 
                   element = {<ProfileComponent store={props.store}/>}  />
            <Route path="/dialogs" 
                   element={<DialogsContainer store={props.store}/>} />            
          </Routes>
        </div>      
    </div>
    </BrowserRouter>
  );
}

export default App;
