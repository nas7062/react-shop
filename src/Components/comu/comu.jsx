import { useState } from "react";
import style from "./comu.module.css";
import ReviewList from "../review/reviewlist";
import QnaList from "../qna/qnalist";
import Notice from "./notice";
export default function Comu({reviews,setreviews,setQna,Qna})
{
    const [visible,setvisible] = useState(false);
    const [qna,setqna] = useState(false);
    const [notice,setnotice]= useState(true);
    return(
        <>
        <div className={style.main}>
        <h2>Community</h2>
        <p>문의를 넣어주시면 빠르게 답변 받아보실 수 있습니다</p>
        <h3>FAQ</h3>
        <ul>
           <li onClick={() =>{
                setnotice(!notice);
                setqna(false);
                setvisible(false);
            }} >공지사항</li>
            
            <li onClick={() =>{
                setqna(!qna);
                setvisible(false);
                setnotice(false);
            }}>상품문의</li> 
            <li onClick={() =>{
                setvisible(!visible);
                setqna(false);
                setnotice(false);
            }}>상품후기</li> 
        </ul>
        </div>
        <div className={style.notice}>
            { notice &&<Notice/>}
        </div>
        <div className={style.review}>
            {visible &&< ReviewList reviews={reviews}/>}
        </div>
        <div>
            {qna && <QnaList Qna={Qna}/>}
        </div>
        </>
    );
}