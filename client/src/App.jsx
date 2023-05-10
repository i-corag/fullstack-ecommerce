import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/sharedComponents/Header'
import Home from './components/homeComponents/Home'
import ProductList from './components/productComponents/ProductList'
import ProductDetail from './components/productComponents/ProductDetail'
import Cart from './components/cartComponents/Cart';
import Register from './components/authComponents/Register'
import LogIn from './components/authComponents/LogIn'
import AdminContainer from './components/adminComponents/shared/AdminContainer'
import UpdateBrand from './components/adminComponents/brands/UpdateBrand'
import CreateBrand from './components/adminComponents/brands/CreateBrand'
import CreateCategory from './components/adminComponents/categories/CreateCategory'
import UpdateCategory from './components/adminComponents/categories/UpdateCategory'
import CreateProduct from './components/adminComponents/products/CreateProduct'
import UpdateProduct from './components/adminComponents/products/UpdateProduct'
import UpdateUser from './components/adminComponents/users/UpdateUser'
import Wishlist from './components/wishlistComponents/Wishlist'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/categories/:categoryId" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />

        <Route path="/admin/:adminId" element={<AdminContainer />} />

        <Route path="/admin/brands/create" element={<CreateBrand />} />
        <Route path="/admin/brands/update/:id" element={<UpdateBrand />} />

        <Route path="/admin/categories/create" element={<CreateCategory />} />
        <Route path="/admin/categories/update/:id" element={<UpdateCategory />} />

        <Route path="/admin/products/create" element={<CreateProduct />} />
        <Route path="/admin/products/update/:id" element={<UpdateProduct />} />

        <Route path="/admin/users/update/:id" element={<UpdateUser />} />

        <Route path="/admin/orders/update/:id" element={<div text={'Hola'} />} />

        <Route path="*" element={<h3>404 Not Found</h3>} />
      </Routes>
    </>
  )
}

export default App
