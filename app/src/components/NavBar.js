import React from 'react'
const NavBar = () => {
  return (
    <>
        <nav className='navbar bg-dark text-white'>
            <h3 className='mx-2'>Prem Y</h3>
            <ul className='list-unstyled d-flex m-3'>
                <li className='me-2'>
                  <a href="https://github.com/Prem-rao" target='_blank'><box-icon name='github' type='logo' color='#ffffff' ></box-icon></a>
                </li>
                <li className='me-2'><a href="https://www.linkedin.com/in/prem-rao-6a8264257" target='_blank'><box-icon name='linkedin' type='logo' color='#ffffff' ></box-icon></a></li>
            </ul>
        </nav>
    </>
  )
}

export default NavBar
