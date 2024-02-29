
import './App.css';
import Home from './pages/Home'
import {BrowserRouter, Route,Routes} from "react-router-dom"
import SearchPage from './pages/SearchPage';
function App() {
  return (
    <BrowserRouter>
        <div className="app">
        <Routes>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/images' element={<SearchPage/>}/>
          <Route path='/videos' element={<SearchPage/>}/>

          <Route path='/' element={<Home/>}>
          

          </Route>
  
        </Routes>
          {/* search page */}

        </div>
   </BrowserRouter>
  );
}

export default App;
