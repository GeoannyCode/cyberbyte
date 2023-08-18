import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../Utils'

import './styles.css'

const CheckoutSiteMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const newDate = new Date()

        const orderToAdd = {
            date: newDate.toUTCString(),
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts),
        }

        context.setOrder([orderToAdd, ...context.order])
        context.closeCheckoutMenu()
        context.setCount(0)
        context.setCartProducts([])
        context.setSearchByTitle(null)

    }

    return (
        <aside 
            className={`${context.isCheckoutMenuOpen ? 'flex': 'hidden'} checkout-site-menu flex flex-col fixed right-0 border-2 border-black rounded-lg backdrop-blur-xl bg-white/30`}>
            <div className='flex justify-between items-center p-3'>
                <h1 className='font-medium text-xl' >My Order</h1>
                <div>
                    <XMarkIcon 
                    className="h-6 w-6 cursor-pointer" 
                    onClick={() => context.closeCheckoutMenu()}
                    />
                </div>
            </div>   
            <div className='scrollbar overflow-y-scroll scrollbar-thumb-blue-500 scrollbar-track-blue-100 pb-20 px-3'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard 
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}   
                            handleDelete={handleDelete}
                        />
                    ))
                }  
            </div>
            <div className='px-6 pb-3 absolute bottom-0 w-full bg-white border-t-2 border-black rounded-b-lg'>
                <p className='flex justify-between items-center'>
                    <span className='font-light' >Total:</span>
                    <span className='font-medium text-xl' >${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to={'/my-orders/last'}>
                    <button className='bg-black py-3 text-white w-full rounded-lg cursor-pointer' onClick={() => handleCheckout()} >Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSiteMenu