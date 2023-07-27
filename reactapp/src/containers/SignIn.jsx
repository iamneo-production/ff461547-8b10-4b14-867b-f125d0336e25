import React, {useEffect} from 'react';
import Login from '../components/Auth/SignIn';

function SignIn() {
    useEffect(()=>{
        document.title = "SignIn | Travel.com"
    },[])
    
    return (
        <Login/>
    )
}

export default SignIn