import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';

const Register = () => {

const navigate = useNavigate();
const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
})

const registerUser =  async (e) => {
    e.preventDefault()
    const {name, email, password} = data;
    try {
      const {data} = await axios.post('http://localhost:3000/register', {
        name, email, password
      })
      if(data.error) {
        toast.error(data.error)
      }
      else {
        setData({})
        toast.success('Successfully Registered!')
        navigate('/login')
        }
      }
     catch (error) {
      console.log(error)
    }
}

  return (
    <div>
        <form onSubmit={registerUser}>
            <label>Username</label>
            <input type='text' placeholder='Enter a username' value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
            <label>Email</label>
            <input type='email' placeholder='Enter your email address' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
            <label>Password</label>
            <input type='password' placeholder='Create a password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register