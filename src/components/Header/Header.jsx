import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <>
      <header className='text-3xl py-4 bg-blue-950 flex justify-between px-4 fixed top-0 left-0 w-full z-10'>
        <NavLink to='/' className='text-red-500 font-bold text-center  md:text-white lg:text-violet-600 hover:text-white transition-colors duration-300'>
          {'logo'}
        </NavLink>
        <div>
          <NavLink className='text-white mr-6' to='/catalog'>
            Catalog
          </NavLink>
          <NavLink className='text-white mr-6' to='/favorites'>
            Favorites
          </NavLink>
        </div>
      </header>
    </>

  )
}

export default Header