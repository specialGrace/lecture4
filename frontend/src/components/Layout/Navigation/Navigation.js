import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styles from './Navigation.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {logout}from '../../../redux/actions/userActions'

const Navigation = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.loginUser)
  
  function logoutHandler() {
    dispatch(logout())
    navigate('/login')
    window.location.reload();
  }
  return (
    <div className={styles.navContainer}>
      <Link to="/">CompanyLogo</Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/create-post">Post</Link>
        </li>
        {userInfo ? (
          <li>
            <span>
              Dashboard
              <li>
                <Link to="/dashboard">Login</Link>
              </li>
              <li>
                <span style={{cursor:'pointer'}} onClick={logoutHandler}>Logout</span>
              </li>
            </span>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}

        <li>
          <Link to="/cartoon">Cartoon</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation