import Cart from "../Components/cart/cart";
export default function Basket({cart,setcart,checks,setchecks,buys,setbuys})
{
    return <Cart  cart ={cart}  setcart ={setcart} checks ={checks} setchecks ={setchecks} setbuys={setbuys} buys= {buys}/>
};