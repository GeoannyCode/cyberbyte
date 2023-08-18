import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { ShoppingBagIcon} from '@heroicons/react/24/outline'

const Navbar = () => {

    const context = useContext(ShoppingCartContext)

    const activeStyle = 'underline underline-offset-4'

    return(
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light border-b-2 border-black backdrop-blur-xl bg-white/30'>

            <ul className='flex items-center gap-3'>
                <li className="font-semibold text-lg ">
                    <NavLink to="/">
                        CyberByte
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/"
                        onClick={() => context.setSearchByCategory()} 
                        className={({ isActive }) => isActive ? activeStyle: undefined}
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/clothes" 
                        onClick={() => context.setSearchByCategory('clothes')} 
                        className={({ isActive }) => isActive ? activeStyle: undefined}
                        >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/electronics"
                        onClick={() => context.setSearchByCategory('electronics')}  
                        className={({ isActive }) => isActive ? activeStyle: undefined}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/fornitures"
                        onClick={() => context.setSearchByCategory('fornitures')}  
                        className={({ isActive }) => isActive ? activeStyle: undefined}
                    >
                        Fornitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/toys"
                        onClick={() => context.setSearchByCategory('toys')}  
                        className={({ isActive }) => isActive ? activeStyle: undefined}
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/others"
                        onClick={() => context.setSearchByCategory('others')}  
                        className={({ isActive }) => isActive ? activeStyle: undefined}
                    >
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className='flex items-center gap-3'>
                <li>
                    geo@anny.com
                </li>
                <li>
                    <NavLink to="/my-orders" className={({ isActive }) => isActive ? activeStyle: undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/my-account" className={({ isActive }) => isActive ? activeStyle: undefined}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sign-in" className={({ isActive }) => isActive ? activeStyle: undefined}>
                        Sign In
                    </NavLink>
                </li>
                <li className="flex items-center font-bold text-lg">
                    <ShoppingBagIcon className="h-6 w-6 inline-block" /> {context.count}
                </li>
            </ul>

        </nav>
    )
}

export  default Navbar