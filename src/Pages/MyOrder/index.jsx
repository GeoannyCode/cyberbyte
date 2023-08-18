import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"
import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard"
import { totalPrice } from "../../Utils"



function MyOrder() {
  const context = useContext(ShoppingCartContext)

    return (
      <Layout>
        <div className='font-semibold flex justify-between w-80 mb-3'>
          <Link to={'/my-orders'}>
            <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
          </Link>
          My order
        </div>
        <div className='flex flex-col w-60%'>
                {
                    context.order?.[0].products.map(product => (
                        <OrderCard 
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}   
                        />
                    ))
                }  
        </div>
        <div className="font-bold text-lg">
          <p>TOTAL: ${totalPrice(context.order?.[0].products)} </p>
        </div>
      </Layout>
    )
  }
  
  export default MyOrder
  