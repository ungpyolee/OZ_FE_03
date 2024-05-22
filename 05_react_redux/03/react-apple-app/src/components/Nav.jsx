import React from 'react'

const Nav = () => {
  return (
    <NavWrapper>
      <Logo>
        <img
          alt="logo"
          src="/image/apple-logo.png"
          onClick={()=> (window.location.herf = '/')}
          />
      </Logo>
    </NavWrapper>
  )
}

export default Nav