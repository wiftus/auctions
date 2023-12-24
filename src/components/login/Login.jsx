import { useState } from 'react';

import './login.css';

const Login = ({ onLogin }) => {
   const [login, setLogin] = useState('');
   const [password, setPassword] = useState('');

   const handleLogin = () => {
      if (login === 'admin' && password === '121212') {
         onLogin(true);
      } else {
         alert('Uncorrect data!');
      }
   };

   return (
      <div className='login-block'>
         <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            className='login-input'
         />
         <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='login-input'
         />
         <button className='login-btn' onClick={handleLogin}>Login</button>
      </div>
   );
};

export default Login;
