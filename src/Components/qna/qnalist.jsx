
export default function QnaList({Qna})
{
    return (
        <div>
            <div>
                <h2>문의 목록</h2>
                <table>
                    <thead> 
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>내용</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Qna.map((Q,idx) =>{
                        return (
                            <tr key = {idx}>
                                <td>{idx+1}</td>
                                <td>{Q.title}</td>
                                <td>{Q.comment}</td>
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