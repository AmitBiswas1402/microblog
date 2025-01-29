import { Route, Routes } from 'react-router'
import HomePage from './pages/home/HomePage'
import SignUpPage from './pages/auth/signup/SignUpPage'
import LoginPage from './pages/auth/login/LoginPage'
import NotificationPage from './pages/notification/NotificationPage'
import ProfilePage from './pages/profile/ProfilePage'

import RightPanel from './components/common/RightPanel'
import Sidebar from './components/common/SideBar'
import { Toaster } from 'react-hot-toast'

function App() {
  
  return (
    <>
      <div className='flex max-w-6xl mx-auto'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/notifications' element={<NotificationPage />} />
          <Route path='/profile/:username' element={<ProfilePage />} />
        </Routes>
        <RightPanel />
        <Toaster />
      </div>
    </>
  )
}

export default App
