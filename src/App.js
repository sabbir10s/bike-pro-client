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
import MyProduct from './Pages/Inventory/MyProduct/MyProduct';
import AddProduct from './Pages/Inventory/AddNewProduct/AddProduct';
import UpdateStock from './Pages/Inventory/UpdateStock/UpdateStock';
import { ToastContainer } from 'react-toastify';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}

function App() {
  const location = useLocation();
  return (
    <div>
      {
        location.pathname === '/signIn' || location.pathname === '/signup' ? <></> : <Navbar />
      }

      <ToastContainer />
      <Wrapper>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={<Home />}>
            <Route index
              element={<PrivateRoute><AllProducts /></PrivateRoute>} />
            <Route path='menage' element={<PrivateRoute>
              <MenageProducts />
            </PrivateRoute>} />

            <Route path='addProduct' element={<PrivateRoute>
              <AddProduct />
            </PrivateRoute>} />

            <Route path='myStock' element={<PrivateRoute>
              <MyProduct />
            </PrivateRoute>} />
            <Route path='updateStock/:Id' element={<PrivateRoute>
              <UpdateStock />
            </PrivateRoute>} />
          </Route>



          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<NotFond />} />
        </Routes>
      </Wrapper>
    </div>
  );
}

export default App;
