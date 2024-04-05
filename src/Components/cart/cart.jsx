import { useState } from "react";
import style from "./cart.module.css";
import Cartlist from "./cartlist";
import Carttotal from "./cart.total";
export default function Cart({cart,setcart ,checks,setchecks ,buys,setbuys})
{
    const [total,settotal] = useState(0);   
    const CountHandler = (type,id,count) =>{
        const found = cart.filter((e) =>e.id ===id)[0];
        const index = cart.indexOf(found);
        const Item = {
            id :found.id,
            image :found.image,
            name :found.name,
            descript :found.descript,
            price :found.price,
            count :count
        };
        if(type ==="plus")
        {
            setcart([...cart.slice(0,index),Item,...cart.slice(index+1)]);
        }
        else{
            if(count===0)
                return;
            setcart([...cart.slice(0,index),Item,...cart.slice(index+1)]);
        }
    };
    
    const RemoveHandler =(id) =>
    {
        setcart(cart.filter((e)=>e.id !==id));
        setchecks(checks.filter((check) =>check !== id));
    }
    const CheckHandler = (id, checked) =>{
        if(checked)
        {
            setchecks([...checks,id]);
        }
        else
        {
            setchecks(checks.filter((check) =>check !==id))
        }
    }
    const CheckAllHandler = (checkd) =>{
        if(checkd)
        {
            const checkItem = [];
            cart.map((cart) =>checkItem.push(cart.id));
            setchecks(checkItem);
        }
        else
        {
            setchecks([]);
        }
    }
   
    const isAllChecked = cart.length === checks.length  && checks.length !==0;
    const found = checks.map((check) =>{
        return(
        cart.filter((e) => e.id ===check));
    });

    return(
        <>
        <header>
            <h1>장바구니</h1>
        </header>
        <div className={style.head}>
            <input type="checkbox"onChange={(e) =>CheckAllHandler(e.currentTarget.value)}  checked={isAllChecked}/>
            <span> 상품정보 </span>
            <span> 상품수량 </span>

        </div>
        {cart.length ===0 ?(

            <h2 className={style.none}>담아놓은 상품이없습니다.</h2>

        ) :(cart.map((cart)=>{
            return <Cartlist key={`key-${cart.id}`} cart ={cart} setcart ={setcart} counthandler ={CountHandler} 
            removehandler = {RemoveHandler} checkhandler={CheckHandler} checks ={checks}/>
        } )
        )}
        
        
        <Carttotal total ={total} settotal ={settotal} found ={found} setcart ={setcart} cart ={cart} buys ={buys} setbuys= {setbuys}/>
      
        </>
    );
}