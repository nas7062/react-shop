import { useState } from "react";
import style from './review.module.css';

export default function Review({OnReivew})
{
    const [title,settitle] = useState('');
    const [comment,setcomment] = useState('');

    const TitleHandler = (e) =>{
        settitle(e.target.value);
    } // title이 바뀌면 title값을 변경해주는 함수 
    const CommentHandler = (e) =>{
        setcomment(e.target.value);
    }// commnet가 바뀌면 comment값을 변경해주는 함수 

    const SubmitHandler = (e) =>{
            e.preventDefault(); // 기본 동작을 실행하지 않도록함.
 
            if(title ==='')
            {
                alert("제목을 입력해 주세요.");
                return;
            } // title 비어있을시 리턴
            else if(comment === '')
            {
                alert("내용을 입력해 주세요.");
                return;
            }// comment 비어있을 시 리턴

            const NewReview = {
                id :new Date().getTime(),
                title,
                comment,
            }; // 새로운 리뷰 생성.
            OnReivew(NewReview); // 리뷰 등록.
            settitle('');  //title 초기화
            setcomment(''); //commnet 초기화
    }
    return(
        <form onSubmit={SubmitHandler} className={style.form}  >
                <h2>리뷰작성</h2>
                <div>
                    <label >리뷰제목:</label>
                    <input type="text" value={title} onChange={TitleHandler} />
                </div>
                <div>
                    <label >리뷰내용:</label>
                    <textarea value={comment} onChange={CommentHandler} />
                </div>
                <button type="submit">제출하기</button>
        </form>
    );
}