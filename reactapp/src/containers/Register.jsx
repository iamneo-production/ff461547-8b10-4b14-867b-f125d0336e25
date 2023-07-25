import React,{useEffect} from 'react'
import Registration from '../components/Auth/Register'
function Register() {
    useEffect(()=>{
        document.title = "Register | Travel.com"
    },[])
    return (
        <Registration/>
    )
}

export default Register