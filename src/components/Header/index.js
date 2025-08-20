import {useState} from 'react'

import {Link, useHistory} from 'react-router-dom'

import './index.css'

/* import {IoMdClose, IoMdMenu} from 'react-icons/io'
   <MdHome className="route-icon" />
    <IoMdMenu className="icon" /> 
    <IoMdClose className="icon" />
    */

// import {MdHome, MdSchedule} from 'react-icons/md'   <RxArrowTopRight className="route-icon" />

// import {RxArrowTopRight} from 'react-icons/rx'   <MdSchedule className="route-icon" />

const Header = () => {
  const [isSowMenu, setToggle] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const history = useHistory()

  const toggleMenuBtn = () => {
    setToggle(prev => !prev)
  }

  const onChangeInput = event => {
    setSearchQuery(event.target.value)
  }

  const handleSearch = () => {
    if (searchQuery) {
      history.push(`/search/${searchQuery}`)
    }
  }

  return (
    <>
      <nav className="nav-bar">
        <Link to="/" className="link">
          <h1 className="logo-high">MovieDB</h1>
        </Link>
        <div>
          <label htmlFor="search">Search</label>
          <input
            id="search"
            type="text"
            placeholder="Search movies..."
            onChange={onChangeInput}
            value={searchQuery}
          />
          <button type="button" className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="nav-items-lg">
          <Link to="/" className="link">
            <button type="button" className="btns item-lg">
              Popular
            </button>
          </Link>
          <Link to="/top-rated" className="link">
            <button type="button" className="btns item-lg">
              Top Rated
            </button>
          </Link>
          <Link to="/upcoming" className="link">
            <button type="button" className="btns item-lg">
              Upcoming
            </button>
          </Link>
        </div>
        {!isSowMenu ? (
          <button type="button" className="menu-btn" onClick={toggleMenuBtn}>
            Menu
          </button>
        ) : (
          <button type="button" className="menu-btn" onClick={toggleMenuBtn}>
            Close
          </button>
        )}
      </nav>

      {isSowMenu ? (
        <div className="menu-div">
          <div className="nav-items-sm">
            <Link to="/" className="route-link">
              <p className="item">Popular</p>
            </Link>
            <Link to="/top-rated" className="route-link">
              <p className="item">Top Rated Movies</p>
            </Link>
            <Link to="/upcoming" className="route-link">
              <p className="item">Upcoming Movies</p>
            </Link>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Header
