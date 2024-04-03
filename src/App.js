 /* eslint-disable */ 


 import React from 'react';
 import './App.css';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import Nab from './Components/Nav';
 import Productlist from './Components/Productlist';
 import {Routes,Route} from 'react-router-dom';
 import Cart from './Components/Cart';
 
 function App() {
   return (
     <div className="App">
       <Nab/>
       <Routes>
         <Route exact path="/" element={<Productlist/>}/>
         <Route path="/cart" element={<Cart/>}/>
       </Routes>
       
     </div>
   );
 }
 
 export default App;
 