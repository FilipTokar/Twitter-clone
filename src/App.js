import './App.css';
import Features from './components/Features';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Feed/>
      <Features/>
    </div>
  );
}

export default App;
