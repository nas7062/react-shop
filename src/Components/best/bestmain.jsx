import { useEffect } from "react";
import style from "../best/bestmain.module.css";
import axios from "axios";
import Product from "../product/product";
export default function Bestmain({products,setproducts})
{
    useEffect(()=>{
        axios.get("/data/products.json").then((data)=>{
            setproducts(data.data.products);
        });
    },[setproducts]);

    const SortHandler = (type) =>{
        const  newProduct =[...products];
        if(type ==="new")
        {
            newProduct.sort((a,b) =>a.id -b.id);
            setproducts(newProduct);
        }
        else if(type ==="row")
        {
            newProduct.sort((a,b) =>a.price - b.price);
            setproducts(newProduct);
        }
        else if(type ==="high")
        {
            newProduct.sort((a,b) =>b.price - a.price);
            setproducts(newProduct);
        }
    }
    return(
        <div>
            <div className={style.image}>
                <img  src={`${process.env.PUBLIC_URL}/image/1.jpg`} alt="" />
                <img   src={`${process.env.PUBLIC_URL}/image/18.jpg`} alt="" />
                <img  src={`${process.env.PUBLIC_URL}/image/25.jpg`} alt="" />
            </div>
            <div className={style.main}>
                <h2>BEST</h2>
                <span onClick={() =>SortHandler("new")}>신상품 | </span>
                <span onClick={() =>SortHandler("row")}>낮은가격 | </span>
                <span onClick={() =>SortHandler("high")}>높은가격 | </span>
                
            </div>
                <main>
        {products.map((product) =>{
            return <Product key={`key-${product.id}`} product = {product} />
        })}
                </main>
                
            
        </div>
    );
}