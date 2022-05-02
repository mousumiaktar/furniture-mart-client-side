import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import SingleInventory from './components/SingleInventory/SingleInventory';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import SocialLogin from './components/SocialLogin/SocialLogin';
import NotFound from './components/NotFound/NotFound';
import AddInventory from './components/AddInventory/AddInventory';
import ManageItem from './components/ManageItem/ManageItem';
import MyItems from './components/MyItems/MyItems';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='page-height'>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory/:inventoryId" element={
          <RequireAuth>
            <SingleInventory></SingleInventory>
          </RequireAuth>
        }></Route>
        <Route path="/manageitem" element={<ManageItem></ManageItem>
        }></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/sociallogin" element={<SocialLogin></SocialLogin>}></Route>
        <Route path="/addinventory" element={<AddInventory></AddInventory>}></Route>
        <Route path="/myitems" element={<MyItems></MyItems>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
