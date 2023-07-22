import React from 'react'

function ErrorPage({error}) {
  return (
    <div>
        <h1>{error.status}</h1>
        <br/>
        <h4>{error.message}</h4>
    </div>
  )
}

export default ErrorPage;