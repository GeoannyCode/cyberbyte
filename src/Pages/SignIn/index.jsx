import { useState, useContext, useRef } from "react"
import { Link, Navigate } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import Layout from "../../Components/Layout"


function SignIn(){
  const context = useContext(ShoppingCartContext)
  const [view, setView] = useState('user-info')
  const form = useRef(null)

  //Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const handleSignIn = () => {
    const stringifiedSignOut = JSON.stringify(false)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setSignOut(false)
    // Redirect
    return <Navigate replace to={'/'} />
  }

  const createAccount = () =>{
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }

    // Create account
    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    context.setAccount(data)
    // Sign In
    handleSignIn()
  }

  const renderLogIn = () => {
    return(
      <div className="flex flex-col w-80">
        <p>
          <span className="font-light text-sm" >Email:</span>
          <span>{parsedAccount?.email}</span>
        </p>
        <p>
          <span className="font-light text-sm" >Password:</span>
          <span>{parsedAccount?.password}</span>
        </p>
        <Link to={"/"}>
          <button 
            className='bg-black disabled:bg-black/40 disabled:cursor-auto py-3 text-white w-full rounded-lg cursor-pointer mt-3'
            onClick={()=> handleSignIn()}
            disabled={!hasUserAccount}>
            Log in
          </button>
        </Link>
        <div>
          <a href="/"></a>
        </div>
        <button 
          className='bg-black py-3  disabled:bg-black/40 text-white w-full rounded-lg cursor-pointer mt-3'
          onClick={() => setView('create-user-info')}
          disabled={hasUserAccount}>
          Sign up
        </button>
      </div>
    )
  }

  const renderCreateUserInfo = () => {
    return(
        <form ref={form} className='flex flex-col gap-4 w-80'>
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-light text-sm">Your name:</label>
            <input 
              type="text" 
              name="name" 
              id="name"
              defaultValue={parsedAccount?.name}
              className="rounded-lg border border-black placeholder: font-light placeholder:text-sm
              placeholder: text-black/60 focus:outline-none py-2 px-4"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-light text-sm">Your email:</label>
            <input 
              type="text" 
              name="email" 
              id="email"
              defaultValue={parsedAccount?.email}
              className="rounded-lg border border-black placeholder: font-light placeholder:text-sm
              placeholder: text-black/60 focus:outline-none py-2 px-4"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-light text-sm">Your password:</label>
            <input 
              type="password" 
              name="password" 
              id="password"
              defaultValue={parsedAccount?.password}
              className="rounded-lg border border-black placeholder: font-light placeholder:text-sm
              placeholder: text-black/60 focus:outline-none py-2 px-4"
            />
          </div>

          <Link to="/">
            <button 
              className='bg-black py-3  disabled:bg-black/40 text-white w-full rounded-lg cursor-pointer mt-3'
              onClick={() => createAccount()}>
              Create
            </button>
          </Link>

        </form>
    )
  }

  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn()

  return(
      <Layout>
          <h1 className="font-medium text-xl text-center mb-6 w-80" > Welcome </h1>
          {renderView()}
      </Layout>
  )

}

export default SignIn