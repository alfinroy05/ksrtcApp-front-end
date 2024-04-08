import logo from './logo.svg';
import './App.css';
import AddBus from './ksrtcApp/AddBus';
import DeleteBus from './ksrtcApp/DeleteBus';
import SearchBus from './ksrtcApp/SearchBus';

function App() {
  return (
    <div>
      <AddBus/>
      <DeleteBus/>
      <SearchBus/>
    </div>
  );
}

export default App;
