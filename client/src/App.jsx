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
            <Route path="/dashboard-header" element={<ProtectedRoute requiredRole="admin"><DashboardHeader /></ProtectedRoute>} />
            <Route path="/orders" element={<ProtectedRoute requiredRole="admin"><Orders /></ProtectedRoute>} />

          </Routes>
        </AuthProvider>
      </BrowserRouter>
     
    </>
  )
}

export default App
