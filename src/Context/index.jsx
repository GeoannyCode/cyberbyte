import { createContext, useState, useEffect } from "react"

export const ShoppingCartContext = createContext()

export const initializeLocalStorage = () => {
    const accountInLocalStorage = localStorage.getItem('account')
    const signOutInLocalStorage = localStorage.getItem('sign-out')

    let parsedAccount
    let parsedSignOut

    if(!accountInLocalStorage){
        localStorage.setItem('account', JSON.stringify({}))
        parsedAccount = {};
    }else{
        parsedAccount = JSON.parse(accountInLocalStorage) 
    }
    
    if(!signOutInLocalStorage){
        localStorage.setItem('sign-out', JSON.stringify(false))
        parsedSignOut = false;
    }else{
        parsedSignOut = JSON.parse(signOutInLocalStorage)
    }

}


export const ShoppingCartProvider = ({children}) => {

    // My account
    const[account, setAccount] = useState({})

    //Sign out
    const[signOut, setSignOut] = useState(false)

    // Shopping Cart . Increment quantity
    const[count, setCount] = useState(0)

    // Product detail . Open/Close
    const[isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Checkout Site Menu . Open/Close
    const[isCheckoutMenuOpen, setIsCheckoutMenuOpen] = useState(false)
    const openCheckoutMenu = () => setIsCheckoutMenuOpen(true)
    const closeCheckoutMenu = () => setIsCheckoutMenuOpen(false)

    // Product detail . Show product
    const[productToShow, setProductToShow] = useState({})

     // Shopping Cart . Add products to cart
    const[cartProducts, setCartProducts] = useState([])

    // Shopping Cart . Order
    const[order, setOrder] = useState([])

    // MyOrders . Show Order
    const[idOrder, setIdOrder] = useState(0)

    // Get Products . 
    const [items, setItems] = useState(null) 
    const [filteredItems , setFilteredItems] = useState(null) 

    // Search by title
    const [searchByTitle, setSearchByTitle] = useState(null) 

     // Search by category
    const [searchByCategory, setSearchByCategory] = useState(null) 

    useEffect( () => {
        fetch('https://api.escuelajs.co/api/v1/products')
          .then(response => response.json())
          .then(data => setItems(data))
      }, [] )

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter( item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter( item => item.category.name.toLowerCase().includes(searchByCategory))
    }

    useEffect(() => {
        let filteredItems = items;

        if (searchByCategory) {
            filteredItems = filteredItemsByCategory(filteredItems, searchByCategory);
        }

        if (searchByTitle) {
            filteredItems = filteredItemsByTitle(filteredItems, searchByTitle);
        }

        setFilteredItems(filteredItems);
    }, [items, searchByCategory, searchByTitle]);

    
    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutMenuOpen,
            setIsCheckoutMenuOpen,
            openCheckoutMenu,
            closeCheckoutMenu,
            order,
            setOrder,
            idOrder,
            setIdOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            searchByCategory,
            setSearchByCategory,
            account,
            setAccount,
            signOut,
            setSignOut,
            
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}