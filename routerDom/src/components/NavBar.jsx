import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div className='bg-blue-300 flex justify-between'>
        <div className='flex items-center'>LOGO</div>
        <div className="flex gap-10 p-5">
          <Link to="/>">Home</Link>
          <Link to="/About">AboutPage</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
    </>
  );
}

export default NavBar