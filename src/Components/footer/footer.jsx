import { Link } from "react-router-dom";
import style from "../footer/footer.module.css";
export default function Footer()
{
    const MoveTop =() =>{
        window.scrollTo({top :0,behavior:'smooth'});
    }
    return(
        <>
        <hr className={style.foothr}/>
        <footer className={style.footer}>
           
            <section className={style.subscript}>
                <h3>10012</h3>
                <p>onwer: 김민석 tel 010-9314-7062</p>
                <p>e-mail: nas7062@naver.com</p>
                <p>address: 인천광역시 서구 봉오재 1로 36</p>
                <p>copyright © 10012 all rights reserved</p>
            </section>
            <section >
                <ul className={style.item}>
                    <Link to ="/comu"><li>커뮤니티</li></Link>
                    <Link to ="/"><li>이용안내</li></Link>
                    <Link to ="/"><li>이용약관</li></Link>
                    <Link to ="/"><li>회사소개</li></Link>
                    
                </ul>
            </section>
            <section className={style.time}>
                <h3>Time</h3>
                <p>MON-FRI AM 10:10 ~PM 09:00</p>    
                <p>SAT,SUN,HOLIDAY OFF</p>
            </section>
            <div className={style.topbtn}>
                <img onClick={() =>{
                    MoveTop();
                }} src={`${process.env.PUBLIC_URL}/image/top.png`} alt="" />
            </div>
        </footer>
        </>
    );
};