import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Footer from './Components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import UpdateInventory from './Components/UpdateInventory/UpdateInventory';
import Blog from './Components/Blog/Blog';
import MyItems from './Components/MyItems/MyItems';
import AddItems from './Components/AddItems/AddItems';
import ManageItems from './Components/ManageItems/ManageItems';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='inventory/:inventoryId' element={
          <PrivateRoute>
            <UpdateInventory />
          </PrivateRoute>
        }></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/myItems' element={<MyItems/>}></Route>
        <Route path='/addItem' element={<AddItems/>}></Route>
        <Route path='/manageItems' element={<ManageItems/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
