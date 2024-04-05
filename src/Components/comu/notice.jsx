import style from './comu.module.css';
export default function Notice()
{
    return (
        <div className={style.notice}>
            <div>
               
                <table>
                    <thead> 
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                   
                            <tr >
                                <td>공지</td>
                                <td className={style.title}>적립금&쿠폰 안내</td>
                                <td>10012</td>
                            </tr>
                            <tr >
                                <td>공지</td>
                                <td className={style.title}>배송문의</td>
                                <td>10012</td>
                            </tr>
                            <tr >
                                <td>공지</td>
                                <td className={style.title}>배송 후 교환/환불 문의</td>
                                <td>10012</td>
                            </tr>
                            <tr >
                                <td>공지</td>
                                <td className={style.title}>배송 전 취소/변경 문의s</td>
                                <td>10012</td>
                            </tr>
                    
                    </tbody>
                </table>
            </div>
        </div>
    )
}