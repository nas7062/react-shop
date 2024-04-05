import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import style from "../box/box.module.css";
export default function Box({img,text,descript,p,products,setproducts,link})
{
    useEffect(()=>{
        axios.get("/data/products.json").then((data)=>{
            setproducts(data.data.products);
        });
    },[setproducts]);
    return (
        <div className={style.box}>
            <div className={style.text}>
            <h2 >{text}</h2> 
            </div>
            <div >
                <Link to ={link}>
                <img  className={style.image}src={img}  alt="sss" />
                </Link>
            </div>
            <div className={style.descript}>
                <p>{descript}</p>
                <p className={style.p}>{p}</p>
            </div>
        </div>

    );
}