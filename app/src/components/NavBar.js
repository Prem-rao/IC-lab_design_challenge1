import React from 'react'
const NavBar = () => {
  return (
    <>
        <nav className='navbar bg-dark text-white'>
            <h3 className='mx-2'>Prem Y</h3>
            <ul className='list-unstyled d-flex m-3'>
                <li className='me-2'><box-icon name='github' type='logo' color='#ffffff' ></box-icon></li>
                <li className='me-2'><box-icon name='linkedin' type='logo' color='#ffffff' ></box-icon></li>
            </ul>
        </nav>
    </>
  )
}

export default NavBar
