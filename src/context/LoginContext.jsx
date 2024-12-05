import React, {  createContext,  } from 'react'

const Mycontext = createContext()
const LoginContext = ({children}) => {
  return (
    <Mycontext.Provider>
      
    </Mycontext.Provider>
  )
}

export default LoginContext
