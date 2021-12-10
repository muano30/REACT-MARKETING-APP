import React from 'react'
import history from '../history'

function Navbar() {
  const navigatePage = (pageName) => {
    history.push(pageName)
  }

  return (
    <div>
      <button onClick={() => navigatePage('login')}> Login </button>
      <button onClick={() => navigatePage('joblist')}>JOBLIST</button>
      <button onClick={() => navigatePage('appliedjobs')}>APPLIED JOB</button>
      <button onClick={() => navigatePage('jobform')}>JOBFORM</button>

    </div>
  )
}


export default Navbar