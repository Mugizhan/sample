import React from 'react'
import Bg from '../image/top.jpg'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate()
  const Logout=()=>{
    navigate('/')

  }
  return (
    <div>
       <div className='bg-black h-screen'>
       <div className='bg-black w-screen h-Screen'>
       <img src={Bg} className='h-60'/>
       <div className='fixed inset-0 mt-5 ml-2'>
       <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="white" class="size-8" onClick={Logout}>
  <path fill-rule="evenodd" d="M10.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L12.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z" clip-rule="evenodd" />
  <path fill-rule="evenodd" d="M4.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L6.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z" clip-rule="evenodd" />
</svg>
        </div>
      <div className='relative bottom-10 bg-gradient-to-b from-white to-gray-600  w-screen h-screen backdrop-blur-sm rounded-3xl my-1 '>
       
      <div className='flex justify-center mt-20 '>
        <div className='flex flex-col flex gap-5 mt-10'>
         <div className='mt-10 mb-6 text-2xl font-bold '> <h1>Admin Login</h1></div>
       
         </div>
         
      </div><br/>
      <div className='flex justify-center'>
          <form className='w-80 flex flex-col flex gap-10'>
            <input type='text' placeholder='Username' className='w-full h-12 p-3 text-black rounded-xl bg-orange-50 shadow-xl'/>
            <input type='password' placeholder='Password' className='w-full h-12 p-3 text-gray-500 rounded-xl bg-orange-50 shadow-xl'/>
            <input type="submit" className=' bg-orange-400 w-full h-12 rounded-full  text-white text-lg shadow-xl' onClick={()=>{Handle(data[i].name)}} value='Login'/>
          
          </form>
         </div>
  
      </div>
  </div>
       </div>
    </div>
  )
}

export default Login