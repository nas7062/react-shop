import { Link } from "react-router-dom";
import style from "../product/product.module.css";
export default function Product({product})
{
    return(
        <div className={style.wrap}>
            <Link to ={`/product/${product.id}`}>
            <div >
                <img className={style.image} src={product.image}alt="" />
            </div>
            </Link>
            <div className={style.text}>
            <div className={style.descript}>
                <span >{product.descript}</span>
            </div>
            <div className={style.price}>
                <span  >{product.price}</span>
                <span>원</span>
            </div>
            </div>
        </div>

    );
}