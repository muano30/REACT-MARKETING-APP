import '../style/login.css'
import React, {useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addMessage} from '../Redux/actions/index';
import { useHistory } from 'react-router-dom';

function Login(){
  const dispatch = useDispatch()
  const message = useSelector(state => state.loginInfo.message)
  const [loginForm, setLoginForm] = useState({
      name: '',
      surname: '',
      dropdown: '',
  })

  const handleChange = (e) => {
      setLoginForm({...loginForm, [e.target.name]: e.target.value});
  };

  
  let history = useHistory();

  const redirect = () => {
    console.log('loginForm.dropdown',loginForm.dropdown  )
    history.push(loginForm.dropdown ==="Looking for job" ? '/joblist' : '/jobform')
  }
 
const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessage(loginForm), redirect())
}


  return (
    <div>
      
        <form  className="loginForm" onSubmit={handleSubmit}>
        <div>

        <h1>LOGIN</h1>
        </div>
<div>
        <input type="text" placeholder="Fisrst Name"
        onChange={handleChange}
        name = "name"
        value ={loginForm.name}
        />

</div>

<div>

        <input type="text" placeholder="Last Name"
                onChange={handleChange}
                name = "surname"
                value ={loginForm.surname}
        />
</div>

<select onChange={handleChange} name = "dropdown" value ={loginForm.dropdown}>
    <option selected="DefaultValue">Select...</option>
    <option className="login-option">Looking for job</option>
    <option className="login-option">Advertising job</option>

    </select>
        <div>
      <button className="loginButton" type="submit">Login</button>
            
            </div>

      </form>
// <ul>
//       {message.map((text, index)=>{
//         return(
//           <li key={index}>{text}</li>
//         )
//       })}
//       </ul> 

    </div>
  )
}


export default Login;
