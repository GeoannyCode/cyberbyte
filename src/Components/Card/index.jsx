import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { PlusIcon, CheckIcon } from '@heroicons/react/24/outline'

const Card = (data) => {

    const context = useContext(ShoppingCartContext)

    const showProduct = ( productDetail ) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.closeProductDetail()
    }

    const renderIcon = (id) =>{
        const productAdded = context.cartProducts.some(product => product.id === id);

        return(
            productAdded
            ?
            <div className='absolute top-0 right-0 flex justify-center items-center bg-green-500 w-6 h-6 rounded-full m-2 p-1'>
                <CheckIcon className="h-6 w-6 cursor-pointer"/>
            </div>
            :
            <div 
                className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                onClick={(event) => addProductsToCart(event, data.data) }
            >
                <PlusIcon className="h-6 w-6 cursor-pointer"/>
            </div>
        )
    }

    return (
        <div 
            className='bg-white cursor-pointer w-56 h-60 rounded-lg'
            onClick={() => showProduct(data.data)}
            >
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-sm font-semibold m-2 pd-5 px-3 py-0.5 border-2 border-black'>{data.data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg border-2 border-black' src={data.data.images[0]} alt={data.data.title} />
                {renderIcon(data.data.id)}
            </figure>

            <p className='flex justify-between '>
                <span className='text-sm font-ligh'>{data.data.title}</span>
                <span className='text-lm font-medium'>${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card