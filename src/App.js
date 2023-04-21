import './App.css';
import Navbar from './components/navbar.js';
import MainBody from './components/MainBody';
function App() {
  return (
    <div className="App">
      <div className="navbar">
      <Navbar />
      </div>
      <MainBody />
    </div>
  );
}

export default App;
