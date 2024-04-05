import style from './review.module.css';
export default function ReviewList({reviews})
{
    return (
        <div>
            <div>
                <h2>리뷰 목록</h2>
                <table>
                    <thead> 
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>내용</th>
                        </tr>
                    </thead>
                    <tbody>
                    {reviews.map((review,idx) =>{
                        return (
                            <tr key = {idx}>
                                <td>{idx+1}</td>
                                <td>{review.title}</td>
                                <td>{review.comment}</td>
                            </tr>
                        )
                    })
                }
                    </tbody>
                </table>
            </div>
        </div>
    )
}