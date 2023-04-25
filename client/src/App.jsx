import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import ProductDetail from './components/ProductDetail'
import RegisterForm from './components/RegisterForm'
import LogInForm from './components/LogInForm'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/categories/:categoryId" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="*" element={<h3>404 Not Found</h3>} />
      </Routes>
    </>
  )
}

export default App
