import React from 'react'
import './Home.css';
import {Link} from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from '../components/Search';
const Home = () => {
  return (
    <div className='home'>
      <div className="home__header">
          <div className="home__headerLeft">
            <Link >About</Link>
            <Link >Store</Link>
          </div>
          <div className="home__headerRight">
            <Link >Gmail</Link>
            <Link>Images</Link>
            <AppsIcon/>
            <AccountCircleIcon/>
          </div>
      </div>
      <div className="home__body">
       <h1 class='search'>Search</h1>
        <div className="home__inputContainer">
          <Search/>
        </div>
      </div>
    </div>
  )
}

export default Home
