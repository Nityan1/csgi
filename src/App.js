import logo from './logo.svg';
import './App.css';
import Sidebar from "./components/sidebar/Sidebar"
import getRoutes from './routes';

function App() {
  return (
    <div className="rootContainer">
      <Sidebar />
      <div className="pageContainer">
        {getRoutes()}
      </div>
    </div>
    
  );
}

export default App;
