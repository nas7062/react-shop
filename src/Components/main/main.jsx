import { useEffect } from "react";
import axios from "axios";
import Product from "../product/product";
import Box from "../box/box";

 function Main({products,setproducts})
{
    useEffect(()=>{
        axios.get("/data/products.json").then((data)=>{
            setproducts(data.data.products);
        });
    },[setproducts]);
    return(
    <>
    
        <Box img ={`${process.env.PUBLIC_URL}/image/1.jpg`} text="BEST" descript="NOW,BEST" p="이번주 주문베스트" products={products} setproducts={setproducts} link ="/best"/>
        <Box img ={`${process.env.PUBLIC_URL}/image/25.jpg`}text="NEW" descript="NEW 5%할인" p="이번달 신상품" products={products} setproducts={setproducts} link="/New"/>
        <Box img ={`${process.env.PUBLIC_URL}/image/22.jpg`}text="SALE" descript=" 10%할인" p="이번달 세일상품" products={products} setproducts={setproducts}/>
        
        
        <main>
        {products.map((product) =>{
            return <Product key={`key-${product.id}`} product = {product} />
        })}
        </main>
    </>

    );
}
export default Main;