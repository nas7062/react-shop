import { useState,useEffect } from "react";
import { Link ,useNavigate } from "react-router-dom";
import style from './login.module.css';
export default function Login({islogin,setislogin})
{
    const [usernames,setusername] = useState('');
    const [passwords,setpassword] = useState('');
    const [users,setusers] = useState([]); //user 저장
    const [Loginusername,setLoginusername] = useState(null); //로그인 되어있는지
    const navigate = useNavigate();
    
    useEffect(() =>{
        const Users = JSON.parse(localStorage.getItem('users')) || [];
        setusers(Users);
    },[]); // localstrage에서 users를 가져와 users에 저장;

    useEffect(() =>{
        if(Loginusername) {
            localStorage.setItem('users',JSON.stringify(users));
        } 
      
    }, [users]); //로그인 되어있으면 localstrage에 users 저장.

    const LoginHandler = (username,password) =>{
        const userCheck = users.find((u)=>u.usernames ===usernames && u.passwords === passwords);
        //localstrage에 저장되어있는 usernames와 passwords가 입력한 username와 passwords가 같은지 체크
        if(userCheck){
            setLoginusername(userCheck); 
            alert("로그인 성공");
            setislogin(true);  // 로그인 성공 
            setTimeout(() => {
                navigate("/") // 메인 페이지로 이동 
            }, 250);
        } 
        else{
            alert("아이디 혹은 비밀번호가 올바르지 않습니다.");
        }
        
    }
    
    const SubmitHandler = (e) =>{
        e.preventDefault(); // 기본동작 멈춤.
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