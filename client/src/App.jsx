import {BrowserRouter , Routes, Route} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Index from './components/Index';
import Shop from  './components/Shop';
import ProductDetails from './components/ProductDetails';
import Dashboard from './components/Dashboard/Dashboard';
import Orders from './components/Dashboard/Orders';
import Login from './components/Login';
import { AuthProvider} from './components/context/AuthContext';
import ProtectedRoute from './components/context/ProtectedRoute';
import DashboardHeader from './components/Dashboard/DashboardHeader';
import OrderDetails from './components/Dashboard/OrderDetails';
import Dishes from './components/Dashboard/Dishes';
import DishDetails from './components/Dashboard/DishDetails';
import Payments from './components/Dashboard/Payments'
import AddDish from './components/Dashboard/AddDish';
import AddToCart from './components/AddToCart';
import OrderTrack from './components/OrderTrack';

function App() {

  return (
    <>
      <BrowserRouter>
      <AuthProvider>
          <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
            {/* <Route path='/register' element={<Register/>}/> */}
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/product-details/' element={<ProductDetails/>}/>
            <Route path="/dashboard" element={<ProtectedRoute requiredRole="admin"><Dashboard /></ProtectedRoute>} />
            <Route path="/dashboard-header" element={<DashboardHeader />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/order-details" element={<OrderDetails />} />
            <Route path="/dishes" element={<Dishes />} />
            <Route path="/dish-details/:id" element={<DishDetails />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path='/payments' element={<Payments/>} />
            <Route path='/add-dish' element={<AddDish/>} />
            <Route path='/addtocart' element={<AddToCart/>} />
            <Route path='/track' element={<OrderTrack/>} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
     
    </>
  )
}

export default App
