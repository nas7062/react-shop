import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./cart.module.css";

export default function Carttotal ({cart,total ,settotal,found,buys,setbuys,setcart}) 
{
    const navigate = useNavigate();
    useEffect(()=>{
        if(found)
        {
            const sum = found.map((item) =>item[0].price * item[0].count);
            const reducer = (cur,nex) => cur+nex;
            if(sum.length ===0)
            {
                settotal(0);
                return;
            }
            const itemtotal = sum.reduce(reducer);
            settotal(itemtotal);
        }
        else
        {
             settotal(0);
        }
       
    },[cart,total,settotal,found])
    return (
    <div className={style.wrap}>
        <div className={style.total}>
            <p>총금액</p>
            <p>{total}</p>
        </div>
        <div className={style.minus}>
            <img src={`${process.env.PUBLIC_URL}/image/minus2.png`} alt="" />
        </div>
        <div className={style.discount}>
            <p>할인금액</p>
            <p> 0원</p>
        </div>
        <div className={style.plus}>
            <img src={`${process.env.PUBLIC_URL}/image/plus.jpg`} alt="" />
        </div>
        <div className={style.price}>
            <p>배송비</p>
            <p> 0원 </p>
        </div>
        <div className={style.totalprice}>
            <p>결제금액</p>
            <p>{total}</p>
        </div>
        <div className={style.btn}>
            <button onClick={()=>{
                navigate('/buy');
                setbuys([...cart]);
                setcart([]);
            }}> 결제하기 </button>
        </div>
        </div>
        );
}
