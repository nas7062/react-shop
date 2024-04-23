import { useEffect } from "react";
import axios from "axios";
import Slider from "react-slick"
import { Link } from "react-router-dom";
import styled from "./slickslider.module.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SlickSlider({products,setproducts})
{
    useEffect(()=>{
        axios.get("/data/products.json").then((data)=>{
            setproducts(data.data.products);
        });
    },[setproducts]); // axios로 products.json에 정보를 요청해 받은 데이터로 setproducts에 정보를 저장함.


    const settings = {
        dots: true, // 슬라이더 아래 dots 버튼 표시 
        infinite: true, // 무한반복
        speed: 200, // 넘어가는 속도
        slidesToShow: 6, // 보여지는 슬라이더 개수
        arrows:true, // 이전 다음 표시
        slidesToScroll: 1, // 한번에 넘어가는 슬라이더 개수 
        autoplay: true, //  자동시작
        autoplaySpeed: 2000, // 자동으로 넘어가는 시간  2000 => 2초
    };

    return(
        <Slider {...settings} >
        {products.map((product,index) =>(
            <Link to ={`/product/${product.id}`}>
            <div key={index}>
                <img className={styled.img} src={product.image} alt={`key`} />
            </div>
            </Link>
        ))}
        </Slider> // 저장된 Prodcuts로 map함수를 이용하여 출력하여 Slider를 만듬.
    );
};