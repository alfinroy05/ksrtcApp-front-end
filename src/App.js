import logo from './logo.svg';
import './App.css';
import AddBus from './ksrtcApp/AddBus';
import DeleteBus from './ksrtcApp/DeleteBus';
import SearchBus from './ksrtcApp/SearchBus';
import KsrtcNav from './ksrtcApp/KsrtcNav';
import ViewBus from './ksrtcApp/ViewBus';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddBus/>}/>
      <Route path='/delete' element={<DeleteBus/>}/>
      <Route path='/search' element={<SearchBus/>}/>
      <Route path='/view' element={<ViewBus/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
