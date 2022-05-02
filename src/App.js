import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Pages/AddNewItem/AddProduct';
import Home from './Pages/Home/Home/Home';
import Inventory from './Pages/Inventory/Inventory/Inventory';
import UpdateInventory from './Pages/Inventory/UpdateInventory/UpdateInventory';
import MenageInventory from './Pages/MenageInventory/MenageInventory';
import SignIn from './Pages/SignIn/SignIn/SignIn';
import SignUp from './Pages/SignIn/SignUp/SignUp';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';
import NotFond from './Shared/NotFound/NotFond';
import PrivateRoute from './Shared/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/inventory/:productId' element={<PrivateRoute>
          <UpdateInventory />
        </PrivateRoute>} />

        <Route path='/menageinventory' element={<MenageInventory />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFond />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
