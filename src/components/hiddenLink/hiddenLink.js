import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/slice/authSlice'

const ShowOnLogin = ({children}) => {
  const isLogedin=useSelector(selectIsLoggedIn)
  if(isLogedin) {
    return children
  }
  return null
}

export const ShowOnLogout = ({children}) => {
    const isLogedin=useSelector(selectIsLoggedIn)
    if(!isLogedin) {
      return children
    }
    return null
  }
export default ShowOnLogin