import React, { useContext, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './pages/Login'
import Chat from './pages/Chat'
import ProfileUpdate from './pages/ProfileUpdate'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from 'firebase/auth/cordova'
import { auth } from './confiq/firebase'
import { AppContext } from './context/AppContext'
function App() {

  const navigate = useNavigate()

  const { loadUserData } = useContext(AppContext)
  console.log("Auth is :", auth)
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate('/chat')
        loadUserData(user.uid)
      } else {
        navigate('/')
      }
    })
  }, [])
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/profile' element={<ProfileUpdate />} />
      </Routes>
    </div>
  )
}

export default App