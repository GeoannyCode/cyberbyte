import { useContext } from 'react'
import { CalendarIcon, ShoppingBagIcon, BanknotesIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'


const OrdersCard = props => {
    const context = useContext(ShoppingCartContext)

    const { index, totalPrice, totalProducts, date } = props
    

    const changeidProduct = () =>{
        context.setIdOrder(index)
    }

    return(
        <div 
            className='flex justify-between items-center mb-3 border-2 border-black cursor-pointer rounded-lg p-3'
            onClick={changeidProduct}>
            <div className='flex flex-col'>
                <div className='font-light flex items-center'><CalendarIcon className="h-5 w-5 mr-1"/> {date} </div>
                <div className='font-light flex items-center'><ShoppingBagIcon className="h-5 w-5 mr-1"/> {totalProducts} </div>
                <div className='font-light flex items-center'><BanknotesIcon className="h-5 w-5 mr-1"/> ${totalPrice} </div>
            </div>
            <div>
                <ChevronRightIcon className="h-5 w-5 mr-1"/>
            </div>
        </div>
    )
}

export default OrdersCard