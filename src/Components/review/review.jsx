import { useState } from "react";
import style from './review.module.css';

export default function Review({OnReivew})
{
    const [title,settitle] = useState('');
    const [comment,setcomment] = useState('');

    const TitleHandler = (e) =>{
            settitle(e.target.value);
    }
    const CommentHandler = (e) =>{
        setcomment(e.target.value);
    }

    const SubmitHandler = (e) =>{
            e.preventDefault();

            if(title ===' ')
            {
                alert("제목을 입력해 주세요.");
                return;
            }
            else if(comment === '')
            {
                alert("내용을 입력해 주세요.");
                return;
            }

            const NewReview = {
                id :new Date().getTime(),
                title,
                comment,
            };
            OnReivew(NewReview);
            settitle('');
            setcomment('');
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