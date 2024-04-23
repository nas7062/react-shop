import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./cart.module.css";

export default function Carttotal ({cart,total ,settotal,found,buys,setbuys,setcart}) 
{
    const navigate = useNavigate(); // 페이지 이동
    useEffect(()=>{
        if(found) // found => cart에 체크된 product
        {
            const sum = found.map((item) =>item[0].price * item[0].count); 
            const reducer = (cur,nex) => cur+nex;
            if(sum.length ===0)
            {
                settotal(0);
                return;
            }
            const itemtotal = sum.reduce(reducer); // 체크된 proudct 가격과 갯수 곱한 값
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
                navigate('/buy'); // buy페이지로 이동
                setbuys([...cart]); // cart에 있는 상품 buy로 넘겨줌.
                setcart([]); // cart는 비움.
            }}> 결제하기 </button>
        </div>
        </div>
        );
}
