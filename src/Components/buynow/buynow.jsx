import Buylist from "./buylist";
import style from "./buy.module.css";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Buynow({buys,setbuys})
{
    const [total,settotal] = useState(0);  
   const [radio,setradio] =useState([]);
   const [selected, setSelected] = useState("");
   const navigate =useNavigate();
    const selectList = [
        "gmail.com","naver.com","daum.net"
      ];
    const CheckHandler = (e) =>{

        setradio(e.target.value);
    }
    const handleSelect = (e) => {
        setSelected(e.target.value);
      };
    const OrderHanlder =() =>{
        alert("주문이 완료되었습니다.");
        navigate("/");
        setbuys([]);
    }
    
    useEffect(()=>{
        
            const sum = buys.map((item) =>item.price * item.count);
            const reducer = (cur,nex) => cur+nex;
            if(sum.length ===0)
            {
                settotal(0);
                return;
            }
            const itemtotal = sum.reduce(reducer);
            settotal(itemtotal);
        
        
       
    },[buys,total,settotal])
    return(
        <>
            <header className={style.top}>
                <h1>구매하기</h1>
            </header>
            <div className={style.head}>
                <span>상품 정보</span>
                
            </div>
            {buys.map((buys)=>{
            return <Buylist key={`key-${buys.id}`}  buys={buys} setbuys={setbuys} />
            })} 

            <div className={style.adr}>
                <h3>배송지 입력</h3>
                <label htmlFor="">받으시는 분</label>
                <input type="text" />
                <label htmlFor="">주소</label>
                <input type="text" />
                <input type="text" />
                <label htmlFor="">휴대전화</label>
             </div>
            <div className={style.number}>
                <select name="" id="">
                    <option value="010">010</option>
                    <option value="011">011</option>
                    <option value="016">016</option>
                    <option value="017">017</option>
                    <option value="018">018</option>
                    <option value="019">019</option>
                </select>
                <input type="text" />
                <input type="text" />
                
            </div>
                <div className={style.email}>
                <label htmlFor=""> 이메일</label>
                <input type="text"  />@
                <input type="text"  value={selected}  />
                <select className={style.select} onChange={handleSelect} value={selected}>
                    <option value="">직접입력</option>
                {selectList.map((item) => {
            return <option value={item} key={item}>
              {item}
            </option>;
          })}
  </select>
            </div>
            <div className={style.setbuys}>
                <h3>결제 수단</h3>
                <p>총 금액은 TOTAL : {total}</p>
                <input type="radio"   value="1" checked ={radio ==="1"} onChange={CheckHandler}/>
                <label htmlFor="">카드결제</label>
                <input type="radio"   value="2" checked ={radio ==="2"} onChange={CheckHandler}/>
                <label htmlFor="">카카오페이</label>
                <input type="radio"   value="3" checked ={radio ==="3"} onChange={CheckHandler} />
                <label htmlFor="">네이버페이</label>
                <input type="radio"   value="4" checked ={radio ==="4"} onChange={CheckHandler}/>
                <label htmlFor="">실시간 계좌이체</label>
                <button onClick={() =>OrderHanlder()}>Order</button>
            </div>
        </>
    );
};