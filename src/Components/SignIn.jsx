import { useRef, useState } from "react"
import {Link, useLocation, useNavigate} from"react-router-dom"
import { useAppContext } from "../Utils/AppContext"

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  })
  const [errorMessage, setErrorMessage] = useState("");
   const { handleLogin }  = useAppContext();
   const navigate = useNavigate();
   const location = useLocation();
  const redirectPath = location.state?.path || "/"
  const passwordShowRef = useRef();
  const passwordRef = useRef();

  function handleChange(e){
    const {value, name} = e.target;
    setCredentials(prev => (
      {
        ...prev,
        [name]: value,
      }
    ));
  }

  function handleSubmit(){
    if(!credentials.email || !credentials.password){
      setErrorMessage("Username/Email or Password Incorrect")
      return;
    }
    handleLogin(credentials);
    navigate(redirectPath, {replace: true})
  }

  function showPassword(){
    if(passwordShowRef.current.checked == true){
      passwordRef.current.type = "text"
    }else{
      passwordRef.current.type = "password"
    }
  }


  return (
    <div 
    data-aos="zoom-in"
    className="lg:w-[50%] md:w-[78%] w-[86%] h-auto mx-auto shadow py-9 px-6 rounded-md flex flex-col">
      <h3 className="text-center text-2xl font-semibold font-['Roboto'] mb-2 text-[#4477CE]">Welcome Back!</h3>
      {errorMessage && <p className=" text-red-500 text-center mb-2">{errorMessage}</p>}
      <form 
    className="w-full h-auto flex flex-col"
    >
      <div className="w-full mb-3">
        <label htmlFor="email" className=" font-['Roboto'] font-medium">Email</label>
        <input 
        value={credentials.email}
        onChange={handleChange}
        className=" bg-gray-200 rounded-sm px-3 p-2 block w-full mt-1"
        type="email" name="email" id="email" placeholder="Enter email address"
         />
      </div>
      <div className="w-full mb-3">
        <label htmlFor="password" className=" font-['Roboto'] font-medium">Password</label>
        <input 
        ref={passwordRef}
        value={credentials.password}
        onChange={handleChange}
        className=" bg-gray-200 rounded-sm px-3 p-2 block w-full mt-1 mb-1"
        type="password" name="password" id="password"
        placeholder="Enter password" 
         />
         <input onChange={showPassword} ref={passwordShowRef} type="checkbox" id="showPassword" />
         <label htmlFor="showPassword" className="ml-2">show password</label>
      </div>
    </form>
    <button 
      onClick={handleSubmit}
      className=" p-2 px-4 bg-gray-900 text-gray-50 uppercase font-['Raleway'] font-medium tracking-wider rounded-sm mt-3 mb-3 ">LOGIN</button>
    <p className="text-center">Don't have an account?<Link className=" underline underline-offset-2">Signup</Link> </p>
    </div>
  )
}
export default SignIn