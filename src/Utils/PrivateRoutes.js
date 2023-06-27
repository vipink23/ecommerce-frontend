
import { useSelector } from 'react-redux'
import { Navigate,Outlet } from 'react-router-dom'

function PrivateRoutes() {
    const {token} =useSelector((state)=> state.user)
    console.log(token, 'tokennnnn');
  return (
    token ? <Outlet/>: <Navigate to='/login'/>
  )
}

export default PrivateRoutes