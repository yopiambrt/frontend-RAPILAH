import React, { useState, useMemo, useContext, useEffect } from "react"
import is from "is_js"
import axios from "axios"
import { API_URL } from "../config"

axios.defaults.baseURL = API_URL

const logoutApi = (token) => {
  axios({
    method: 'GET',
    url: '/logout',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then(res => res.data)
}

const userManager = {
  set(val) {
    window.localStorage.setItem('USER', val)
  },
  get() {
    return window.localStorage.getItem('USER')
  },
  remove() {
    window.localStorage.removeItem('USER')
  }
}

const AppContext = React.createContext()

function AppProvider(props) {
  const [user, setUser] = useState(JSON.parse(userManager.get()))

  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user, setUser]
  )

  return (
    <div creator={'Aji Kamaludin (aji19kamaludin)'}>
      <AppContext.Provider value={value} {...props} />
    </div>
  )
}

function useAuth() {
  const appContext = useContext(AppContext)
  if (!appContext) {
    throw Error('useAuth must be used within AppProvider')
  }
  const {
    user,
    setUser,
  } = appContext

  const isLoggedIn = () => {
    return is.not.empty(user) && is.not.null(user)
  }

  const persistUser = user => {
    userManager.set(JSON.stringify(user))
    setUser(user)
  }

  const logout = () => {
    logoutApi(user.token)
    userManager.remove()
    setUser(null)
  }

  return {
    user,
    isLoggedIn,
    persistUser,
    logout
  }
}

// Hook
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);
  return windowSize;
}

export { AppProvider, useAuth, useWindowSize }