import { useState,useEffect } from "react";
import { Link ,useNavigate } from "react-router-dom";
import style from './login.module.css';
export default function Login({islogin,setislogin})
{
    const [usernames,setusername] = useState('');
    const [passwords,setpassword] = useState('');
    const [users,setusers] = useState([]);
    const [Loginusername,setLoginusername] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() =>{
        const Users = JSON.parse(localStorage.getItem('users')) || [];
        
        setusers(Users);
    },[]);

    useEffect(() =>{
        if(Loginusername)
        {
            localStorage.setItem('users',JSON.stringify(users));
        }
      
    }, [users]);

    const LoginHandler = (username,password) =>{
        const userCheck = users.find((u)=>u.usernames ===usernames && u.passwords === passwords);

        if(userCheck)
        {
            setLoginusername(userCheck);
            alert("로그인 성공");
            setislogin(true);
            setTimeout(() => {
                navigate("/")
            }, 250);
        }
        else{
            alert("아이디 혹은 비밀번호가 올바르지 않습니다.");
        }
        
    }
    
    const SubmitHandler = (e) =>{
        e.preventDefault();
        
        const OnLogin =(username,password) =>{
            LoginHandler();
        };
        OnLogin(usernames,passwords);
        setusername('')
        setpassword('');
       
    }

        return(
            <div className={style.login} >
                <form onSubmit={SubmitHandler}>
                    <h1>LOGIN</h1>
                    <div className={style.email}>
                    <label htmlFor="username">아이디:</label>
                    <input type="text" id="username" value={usernames}
                     onChange={(e) =>setusername(e.target.value)} />
                    </div>
                    <div className={style.password}>
                    <label htmlFor="passwrod">비밀번호:</label>
                    <input type="password" id="password" value={passwords} 
                      onChange={(e) =>setpassword(e.target.value)}/>
                    </div>
                     
                    <button className={style.btn} type="submit">로그인</button>
                    <p>
                        아직 회원이 아니신가요? <Link to ="/signup">회원가입</Link>
                    </p>
                </form>
            </div>
        );
}