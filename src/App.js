import { useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import AddProduct from './Pages/AddNewItem/AddProduct';
import AllProducts from './Pages/AllProduct/AllProducts/AllProducts';
import UpdateProduct from './Pages/AllProduct/UpdateProduct/UpdateProduct';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
// import MenageProduct from './Pages/MenageProduct/MenageProduct';
import MenageProducts from './Pages/MenageProduct/MenageProducts';
import MyProduct from './Pages/MyProduct/MyProduct';
import SignIn from './Pages/SignIn/SignIn/SignIn';
import SignUp from './Pages/SignIn/SignUp/SignUp';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';
import NotFond from './Shared/NotFound/NotFond';
import PrivateRoute from './Shared/PrivateRoute/PrivateRoute';

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
            <Route path='/allProducts/:productId' element={<PrivateRoute>
              <UpdateProduct />
            </PrivateRoute>} />

            <Route path='/menageProduct' element={<PrivateRoute>
              {/* <MenageProduct /> */}
              <MenageProducts />
            </PrivateRoute>} />

            <Route path='/addProduct' element={<PrivateRoute>
              <AddProduct />
            </PrivateRoute>} />

            <Route path='/myProduct' element={<PrivateRoute>
              <MyProduct />
            </PrivateRoute>} />

            <Route path='/blogs' element={<Blogs />} />
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
