import './App.css';
import AllRoutes from './Components/AllRoutes';
import Category from './Components/Category';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Category/>
     <AllRoutes/>
    </div>
  );
}

export default App;
