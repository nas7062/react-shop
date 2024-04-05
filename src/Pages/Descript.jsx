import Detail from "../Components/detail/detail";


export default function Descript({cart,setcart,reviews,setreviews,Qna,setQna,buys,setbuys})
{
    return <Detail cart ={cart} setcart ={setcart} reviews={reviews}
     setreviews={setreviews} Qna ={Qna} setQna ={setQna} buys={buys} setbuys={setbuys}/>;
}