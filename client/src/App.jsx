import {BrowserRouter , Routes, Route} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Index from './components/Index';
import Shop from  './components/Shop';
import ProductDetails from './components/ProductDetails';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product-details/' element={<ProductDetails/>}/>

        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
