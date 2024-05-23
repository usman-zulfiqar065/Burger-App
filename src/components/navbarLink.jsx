const NavbarLink = ({children, active, onClick}) => {
  return (
    <a className={ "text-white hover:bg-[#8F5C2C] hover:border-b-4 hover:border-cyan-500 py-3.5 px-3 " + ( active ? 'bg-[#8F5C2C] border-b-4 border-cyan-500' : '' ) }
      onClick={() => onClick(children)}>{children}</a>
  )
}

export default NavbarLink;