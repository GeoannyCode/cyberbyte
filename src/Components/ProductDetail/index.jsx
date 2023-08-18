import { useContext } from 'react'
import './styles.css'
import { XMarkIcon} from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'



const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)

    return (
        <aside 
            className={`${context.isProductDetailOpen ? 'flex': 'hidden'} product-detail flex flex-col fixed right-0 border-2 border-black rounded-lg backdrop-blur-xl bg-white/30`}>
            <div className='flex justify-between items-center p-6'>
                <h1 className='font-medium text-xl' >Detail</h1>
                <div>
                    <XMarkIcon 
                    className="h-6 w-6 cursor-pointer" 
                    onClick={() => context.closeProductDetail()}
                    />
                </div>
            </div>

            <div className='overflow-auto'>
                <figure className='px-6'>
                    <img 
                        className='w-full h-full rounded-lg' 
                        src={context.productToShow.images} 
                        alt={context.productToShow.title} 
                    />
                </figure>
                <p className='flex flex-col p-6'>
                    <span className='font-medium text-2xl mb-2'>{context.productToShow.price}</span> 
                    <span className='font-medium texr-md' >{context.productToShow.title}</span> 
                    <span className='font-light texr-sm' >{context.productToShow.description}</span> 
                </p>
            </div>
            
        </aside>
    )
}

export default ProductDetail