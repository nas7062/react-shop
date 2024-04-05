import { useState,useEffect } from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './Pages/home';
import Descript from './Pages/Descript';
import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import Basket from './Pages/basket';
import Best from './Pages/Best';
import Login from './Components/login/login';
import SignUp from './Components/signup/signup';
import Buy from './Pages/Buy';
import Community from './Pages/comunnity';
import New from './Pages/New';
import ScrollToTop from './Components/scroll/scrolltotop';
function App() {
  const [products,setproducts] = useState([]);
  const [cart,setcart] = useState([]);
  const [checks,setchecks] = useState([]);
  const [buys,setbuys] = useState([]);
  const [islogin,setislogin]=  useState(false);
  const [reviews,setreviews] = useState(() =>{
    const posts = JSON.parse(localStorage.getItem('reviews')) || [];

    return posts ? posts : [];
  })
  const [Qna,setQna] = useState(() =>{
    const qnas = JSON.parse(localStorage.getItem('Qna')) || [];

    return qnas ? qnas : [] ;
});

  useEffect(() =>{
    localStorage.setItem('reviews',JSON.stringify(reviews));
  } ,[reviews]);

  useEffect(()=>
    {
        localStorage.setItem('Qna',JSON.stringify(Qna));
    },[Qna]);

    
  return (
    
    <BrowserRouter>
    <ScrollToTop/>
    <Header cart={cart} islogin={islogin} setislogin ={setislogin}  />
    <Routes>
    <Route path='/' element={<Home products ={products} setproducts= {setproducts}/>}  />
    <Route path='/best' element ={<Best products ={products} setproducts= {setproducts} />} />
    <Route path='/product/:id' element ={<Descript cart={cart} setcart ={setcart} reviews={reviews} setreviews ={setreviews}  Qna ={Qna} setQna ={setQna} buys={buys} setbuys ={setbuys}/> } />
    <Route path='/cart' element ={<Basket cart={cart} setcart ={setcart} checks ={checks} setchecks={setchecks} setbuys={setbuys} buys= {buys}/>} />
    <Route path='/login' element ={<Login   islogin={islogin} setislogin ={setislogin}/>}/>
    <Route path='/signup' element ={<SignUp  />}/>
    <Route path='/buy' element ={<Buy buys ={buys} setbuys ={setbuys} />}/>
    <Route path='/comu' element ={<Community reviews ={reviews} setreviews ={setreviews} Qna ={Qna} setQna={setQna} />}/>
    <Route path='/New' element ={<New  products ={products} setproducts= {setproducts}/> } />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
