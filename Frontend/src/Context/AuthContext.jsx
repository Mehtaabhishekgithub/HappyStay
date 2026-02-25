import React, { createContext, useState } from 'react'
export const authDataContext = createContext()

function AuthContext({children}) {
  let serverUrl = "http://localhost:8000"
  const [loading, setLoading] = useState(false)
 const value={serverUrl,
  loading,setLoading
 }
  return (
    <div>
      <authDataContext.Provider value={value}>
        {children}
      </authDataContext.Provider>

    </div>
  )
}

export default AuthContext 