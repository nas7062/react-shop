import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './signup.module.css';

export default function SignUp()
{
    const [usernames,setusername] = useState('');
    const [passwords,setpassword] = useState('');
    const [Loginusername,setLoginusername] = useState(null);
    const [users,setusers] = useState([]);
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

    const SingUpHandler = (username,password) =>{
        const existing =users.find((u) => u.usernames=== usernames);
        if(existing )
        {
            alert("이미 존재하는 아이디입니다.");
            return;
        }
        else if (!usernames)
        {
            alert("아이디를 입력해주세요");
            return;
        }
       else if (!passwords)
        {
            alert("비밀번호를 입력해주세요");
            return;
        }
        const newUser = {
            id :new Date().getTime(),
            usernames,
            passwords,
        };
        
        setusers((prev) =>[...prev,newUser]);
        setLoginusername(newUser);
        alert("회원가입 성공!");
        
        setTimeout(() => {
            navigate("/")
        }, 250);
        
        
}
    const UsernameHandler = (e) =>{ 
        setusername(e.target.value);
    };
    const PasswordHandler = (e) =>{
        setpassword(e.target.value);
    };

    const SubmitHnadler = (e) =>{
        e.preventDefault();
        const onSignup =(username,password) =>{
            SingUpHandler();
            
        };

        onSignup(usernames,passwords);
        
        setusername('');
        setpassword('');

        
    };

    
    return (
        <>
        
        <form  onSubmit ={SubmitHnadler} className={style.form}>
            <h3 className={style.title}>JOIN US</h3>
            <div>
                <label>아이디</label>
                <input type="text" className={style.input} value={usernames} onChange={UsernameHandler}/>
            </div>
            <div>
                <label>비밀번호</label>
                <input type="password" className={style.input} value={passwords} onChange={PasswordHandler}/>
            </div>
            <button className={style.btn} type ="submit">회원가입</button>
        </form>
       
        </>
    );
};
