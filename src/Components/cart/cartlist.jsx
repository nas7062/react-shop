import style from "./cart.module.css";
export default function Cartlist({cart ,counthandler,removehandler ,checkhandler ,checks})
{
    return (

        <section className={style.box}>
            <input type="checkbox" onChange={(e) =>{
                checkhandler(cart.id,e.currentTarget.checked);
            }
            } checked ={checks.includes(cart.id) ? true :false} />
            <div className={style.image}>
                <img src={cart.image} alt="" />
            </div>
        
            <div className={style.text}>
                <p>{cart.name}</p>
                <p>{cart.descript}</p>
                <p>{cart.price * cart.count}</p>
                
            </div>
            <div className={style.amount}>
                <div className={style.minus}>
                    <img onClick={() =>counthandler("minus",cart.id,cart.count -1)}  src={`${process.env.PUBLIC_URL}/image/minus2.png`} alt=""  />
                </div>
                <div className={style.count}>
                    <span>{cart.count}</span>
                </div>
                <div className={style.plus}>
                    <img  onClick={() =>counthandler("plus",cart.id,cart.count +1)} src={`${process.env.PUBLIC_URL}/image/plus.jpg`} alt=""  />
                </div>
            </div>
            <div className={style.x}>
                <button onClick={ () =>removehandler(cart.id)}>x</button>
            </div>
        </section>
    );
};