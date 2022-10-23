import { useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Shared/Navbar/Navbar';
import NotFond from './Shared/NotFound/NotFond';
import PrivateRoute from './Shared/PrivateRoute/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Pages/Dashboard/Dashboard';
import AllProducts from './Pages/Dashboard/AllProducts/AllProducts';
import MenageProducts from './Pages/Dashboard/MenageProducts/MenageProducts';
import AddProduct from './Pages/Dashboard/AddNewProduct/AddProduct';
import MyProduct from './Pages/Dashboard/MyProduct/MyProduct';
import UpdateStock from './Shared/UpdateStock/UpdateStock';
import SignIn from './Pages/Authentication/SignIn/SignIn';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import Home from './Pages/Dashboard/Home/Home';

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
          <Route path='/' element={<Dashboard />}>
            <Route index
              element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path='products'
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
