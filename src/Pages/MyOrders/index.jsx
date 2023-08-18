import Layout from "../../Components/Layout"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import OrdersCard from "../../Components/OrdersCard"
import OrderCard from "../../Components/OrderCard"
import './styles.css'

function MyOrders() {
  const context = useContext(ShoppingCartContext)

    return (
      <Layout>

        <div className='flex w-full h-full px-20 fixed'>

          <div className='mr-5 w-2/5'>
            <div className='font-semibold mb-3'>
              Order history
            </div>
            <div className="overflow-y-scroll h-full">
              {
                context.order.map((order, index) => (
                    <OrdersCard
                      key={index}
                      index={index}
                      totalPrice={order.totalPrice} 
                      totalProducts={order.totalProducts} 
                      date={order.date}
                    />
                ))
              }  
            </div>
          </div>

          <div className='w-full h-full '>
            <div className='font-semibold mb-3'>
              Details
            </div>
            <div className='pb-20 px-3 overflow-y-scroll h-full'>
                  {
                      context.order[context.idOrder].products.map(product => (
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
          </div>
        </div>
      </Layout>
    )
  }
  
  export default MyOrders
  