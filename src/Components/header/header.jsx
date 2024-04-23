import { Link } from "react-router-dom";
import style from "./header.module.css";
export default function Header({cart,islogin,setislogin})
{
    const logoutHandler = () =>{
        setislogin(!islogin);
    } //Logout 함수
    return (
        <header className={style.header} >
        <h2 className={style.logo}>
            <Link to ="/" >
                10012
            </Link>
        </h2>    
        <div className={style.wrap}>
            <ul className={style.menu}>
                <li><Link to ="/best">Best</Link></li>
                <li><Link to ="/New">New</Link></li>
                <li><Link to ="/">Outer</Link></li>
                <li><Link to ="/">Top</Link></li>
                <li><Link to ="/">Pants</Link></li>
                <li><Link to ="/">ACC</Link></li>
            </ul>
            <ul className={style.login}>
                {!islogin ? <li><Link to ="/login">Login</Link></li> :
                <li onClick={()=>logoutHandler()}><Link to ="/">Logout</Link></li>} 
                {/* // 로그인이 안되어 있으면 Login을 띄우고 로그인이 되어 있으면 Logout을 보여줌.          */}
                <li><Link to ="/signup">Join</Link></li>
                <li><Link to ="/cart">Cart{cart.length>=1 ? 
                (<div className={style.cnt}> 
                    <p>{cart.length}</p>
                </div>) :("")}</Link></li>
                 {/* // cart에 아무것도 담겨 있지 않으면 ""를 보여주고 담겨져 있으면 cart.length만큼 보여준다. */}
                <li><Link to ="/comu">Community</Link></li>
            </ul>  
           
            </div>
        </header>
    );
};