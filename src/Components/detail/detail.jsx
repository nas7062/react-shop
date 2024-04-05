import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import style from "../detail/detail.module.css";
import Review from "../review/review";
import ReviewList from "../review/reviewlist";
import QnA from "../qna/qna";
import QnaList from "../qna/qnalist";
export default function Detail({cart,setcart,reviews,setreviews ,Qna,setQna,buys,setbuys})
{
    const {id} =useParams();
    const [product,setproduct] = useState({});
    const [count,setcount]= useState(1);
    
    const CountHandler = (type) =>{
        if(type ==="plus")
        {
            setcount(count+1);
            
        }
        else
        {
            if(count ===1) return;
            setcount(count-1);
        }
    }
   
    
   
    useEffect(() =>{
        
        axios.all([axios.get("/data/products.json"),axios.get("/data/news.json"),]).then(axios.spread((res1,res2)=>
        {
            {
                id < 9 ?setproduct(res1.data.products.find((product)=>product.id ===parseInt(id))) :
                setproduct(res2.data.products.find((product)=>product.id ===parseInt(id)))
            }
            
            
            
            
        })
        )
        
     
       
    },[id]);
   
    
    console.log(product);
   
    
    
    const CartCountHandler = (id,cnt) =>{
        const find  = cart.filter((e) => e.id ===id)[0];
        const index  =cart.indexOf(find);
        const Item ={
            id: product.id,
            image: product.image,   
            name :product.name,
            price :product.price,
            descript :product.descript,
            count :cnt
        }
        setcart([...cart.slice(0,index),Item,...cart.slice(index+1)]);
    }
    
    const CartHandler =()=>{
        const Item ={
            id: product.id,
            image: product.image,
            name :product.name,
            price :product.price,
            descript :product.descript,
            count :count
        }
        const found =cart.find((e)=>e.id ===Item.id);
        if(found)
        setcount(Item.id,found.count+count);
        else
        setcart([...cart,Item]);
        
    }
    
    const BuyHandler =()=>{
        const Item ={
            id: product.id,
            image: product.image,
            name :product.name,
            price :product.price,
            descript :product.descript,
            count :count
        }
        const found =buys.find((e)=>e.id ===Item.id);
        if(found)
        setcount(Item.id,found.count+count);
        else
        {
            setbuys([...buys,Item]);
            
        } 
           
      
    }
    
    const ReviewSubmitHandler = (newrivew) =>{
        setreviews((prevreview) =>[...prevreview, newrivew]);
    }
    
    const MoveHandler= (id) =>{
        const element = document.getElementById(id);

        if(element)
        {
            window.scrollTo({top:element.offsetTop , behavior :"smooth"});
        };
    }

    const QnaSubmitHandler = (newQna) =>{
        setQna((prev) =>[...prev,newQna]);
    }
    return(
        <>
            {product ? <main>
                <section className={style.img}>
                    <div className={style.img}>
                        <img className={style.image} src={product.image}alt="" />
                        
                    </div>
                </section>
                <section className={style.buy}>
                    <div >
                        <p>{product.name}</p>
                        <p>{product.descript}</p>
                        <hr className={style.detailhr}/>
                        <div >
                        <span className={style.title}>금액</span>
                        <span> {product.price}</span>
                        <span>won</span>
                        </div>
                        <div>
                        <span className={style.title} >COLOR </span>
                            <select id="color">
                                <option value="red">red</option>
                                <option value="black">black</option>
                                <option value="grey">grey</option>
                                <option value="navy">navy</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <span className={style.size}>SIZE</span>
                        <select id="size">
                                <option value="s">s</option>
                                <option value="m">m</option>
                                <option value="lg">lg</option>
                                <option value="xl">xl</option>
                        </select>
                    </div>
                    <div className={style.amount}>
                        <span  className={style.cnttitle}>count</span>
                        <div className={style.minus}>
                            <img src={`${process.env.PUBLIC_URL}/image/minus2.png`} alt=""  onClick={()=>CountHandler("minus")}/>
                        </div>
                        <div className={style.count}>
                            <span>{count}</span>
                        </div>
                        <div className={style.plus}>
                        <img src={`${process.env.PUBLIC_URL}/image/plus.jpg`} alt="" onClick={()=>CountHandler("plus")} />
                        </div>
                    </div>
                    <hr className={style.detailhr}/>
                   
                    <div>
                        <span className={style.title}>TOTAL PRICE</span>
                        <span className={style.price}>{product.price *count}</span>
                    </div>
                    <div >
                            <Link to="/buy"><button className={style.btn1} onClick={()=>BuyHandler()}>BUY IT NOW</button></Link>
                            <button className={style.btn2} onClick={()=>CartHandler()}>ADD TO CART</button>                          
                            <button className={style.btn3}>WISH LIST</button>                          
                    </div>
                </section>
                 <section className={style.main}>
                    <span onClick={() =>MoveHandler('detail')}>DETAIL</span>
                    <span onClick={() =>MoveHandler('review')}>REVIEW</span>
                    <span onClick={() =>MoveHandler('qna')}>Q&A</span>
                    <div className={style.mainimg}>
                        <div className={style.detail} id ="detail">
                            <h2>DETAIL</h2>
                            <hr />
                       {product && <img className={style.image} src={product.image2}alt="" />}
                       {product && <img className={style.image} src={product.image3}alt="" />}
                        
                        </div>
                        <div className={style.review} id ="review">
                        <h2>REVIEW</h2>
                        <hr />
                        <Review OnReivew ={ReviewSubmitHandler}/>
                        <ReviewList reviews={reviews}/>
                        </div>
                        <div className={style.qna} id ="qna">
                        <h2>Q&A</h2>
                        <hr />
                            <QnA OnQnA ={QnaSubmitHandler}/>
                            <QnaList Qna ={Qna}/>
                        </div>
                    </div>
                </section>
            </main> :<p className={style.loading}>loading...</p>}
        </>

    );
};