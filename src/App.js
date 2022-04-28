import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
