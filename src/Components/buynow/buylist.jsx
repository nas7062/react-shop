import style from "./buy.module.css";
export default function Buylist({buys,cart})
{
    return(
        <section className={style.box}>
            <div className={style.image}>
                <img src={buys.image} alt="" />
            </div>
            <div className={style.text}>
                <p>{buys.name}</p>
                <p>{buys.descript}</p>
                <p>{buys.price * buys.count}</p>
                
            </div>
            
            
        </section>
    );
};