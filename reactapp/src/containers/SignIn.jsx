<<<<<<< HEAD
=======
import React, {useEffect} from 'react';
import Login from '../components/Auth/SignIn';
>>>>>>> 1655f8e46693827b5a991949bce50d7584d091d5

function SignIn() {
    useEffect(()=>{
        document.title = "SignIn | Travel.com"
    },[])
    
    return (
        <Login/>
    )
}

export default SignIn;