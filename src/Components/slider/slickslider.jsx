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
    },[setproducts]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 6,
        arrows:true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
        </Slider>
    );
};