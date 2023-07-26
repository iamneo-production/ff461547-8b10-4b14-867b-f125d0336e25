import React,{useEffect} from 'react'
function AdminHome() {
    useEffect(()=>{
        document.title = "Admin | Travel.com"
    },[])
    return (
        <div className='container flex justify-center'>
        <h1 className='font-semibold mt-20'>Admin Page </h1>
    </div>
    )
}

export default AdminHome