import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"
import { MagnifyingGlassIcon, FaceFrownIcon } from "@heroicons/react/24/solid"

function Home() {

  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if(context.searchByTitle?.length > 0 ){
      if(context.filteredItems?.length > 0){
        return(
          <div className='grid grid-cols-3 gap-6 w-full max-w-screen-lg'>
            {context.filteredItems?.map( item => (<Card key={item.id} data={item} />))}
          </div>
        )
      }else{
        return(
          <div className='flex flex-col justify-center items-center' >
            <FaceFrownIcon/>
            <p className='text-2xl' >We don't have anything </p>
          </div>
        )
      }
      
    } else if(context.searchByCategory?.length > 0 ){
      if(context.filteredItems?.length > 0){
        return(
          <div className='grid grid-cols-3 gap-6 w-full max-w-screen-lg'>
            {context.filteredItems?.map( item => (<Card key={item.id} data={item} />))}
          </div>
        )
      }else{
        return(
          <div className='flex flex-col justify-center items-center' >
            <FaceFrownIcon/>
            <p className='text-2xl' >We don't have anything </p>
          </div>
        )
      }
    }else {
      return (  
        <div className='grid grid-cols-3 gap-6 w-full max-w-screen-lg'>
          {context.items?.map( item => (<Card key={item.id} data={item} />))}
        </div>
      )
    }
  }

  return (
    <Layout>
      <div className='font-semibold'>
        <div className='flex justify-center mb-3 items-center'>
          <input 
            type="text" 
            className="p-1 rounded-lg mr-2 border-2 border-black'" 
            placeholder="" 
            onChange={(event) => context.setSearchByTitle(event.target.value)}  
          />
          <MagnifyingGlassIcon  className="h-6 w-6 text-black" />Search
        </div>
        {renderView()}
      </div>
      <ProductDetail/>
    </Layout>
  )
}

export default Home
