import { useState } from "react";
import style from './qna.module.css';

export default function QnA({OnQnA})
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

            const NewQna = {
                id :new Date().getTime(),
                title,
                comment,
            };
            OnQnA(NewQna);
            settitle('');
            setcomment('');
    }
    return(
        <form onSubmit={SubmitHandler} className={style.form}  >
                <h2>문의작성</h2>
                <div>
                    <label >문의내용:</label>
                    <input type="text" value={title} onChange={TitleHandler} />
                </div>
                <div>
                    <label >문의내용:</label>
                    <textarea value={comment} onChange={CommentHandler} />
                </div>
                <button type="submit">제출하기</button>
        </form>
    );
}