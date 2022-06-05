import { useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import AllProducts from './Pages/AllProduct/AllProducts/AllProducts';
import Home from './Pages/Home/Home/Home';
import SignIn from './Pages/SignIn/SignIn/SignIn';
import SignUp from './Pages/SignIn/SignUp/SignUp';
import Navbar from './Shared/Navbar/Navbar';
import NotFond from './Shared/NotFound/NotFond';
import PrivateRoute from './Shared/PrivateRoute/PrivateRoute';
import MenageProducts from './Pages/Inventory/MenageProducts/MenageProducts';
// import Inventory from './Pages/Dashboard/Inventory/Inventory';
import MyProduct from './Pages/Inventory/MyProduct/MyProduct';
import UpdateProductStock from './Pages/Inventory/UpdateStock/UpdateProductStock';
import AddProduct from './Pages/Inventory/AddNewProduct/AddProduct';
import Inventory from './Pages/Inventory/Inventory/Inventory';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}

function App() {
  return (
    <>
      {/* <Navbar /> */}

      <Navbar>
        <Wrapper>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/allProducts' element={<AllProducts />} />

            {/* <Route path='/allProducts/:productId' element={<PrivateRoute>
              <UpdateProduct />
            </PrivateRoute>} /> */}

            <Route path='/inventory' element={<Inventory />}>

              <Route index element={<PrivateRoute>
                <MyProduct />
              </PrivateRoute>} />

              <Route path='menageProducts' element={<PrivateRoute>
                <MenageProducts />
              </PrivateRoute>} />

              <Route path='updateProduct/:productId' element={<PrivateRoute>
                <UpdateProductStock />
              </PrivateRoute>} />

              <Route path='addProduct' element={<PrivateRoute>
                <AddProduct />
              </PrivateRoute>} />



            </Route>

            <Route path='/signIn' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='*' element={<NotFond />} />
          </Routes>
        </Wrapper>
      </Navbar>
    </>
  );
}

export default App;
