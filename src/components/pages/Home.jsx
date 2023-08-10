import React from 'react'
import Header from '../header/Header'

const Home = () => {
  return (
    <div className='Home'>
        <Header/>
        <div className="content">
            <div className='announcements section'>
                <h2>Announcements</h2>
                {/* Render posts from Announcements channel */}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='sermons section'>
                <h2>Latest Sermon</h2>
                <div className='sa-video'><iframe tabindex="-1" width="100%" height="100%" src="https://embed.sermonaudio.com/player/v/broadcaster/cotwstl/" allow="fullscreen" frameborder="0" scrolling="no"></iframe></div>
            </div>
            <div className='events section'>
                <h2>Events</h2>
                {/* Render posts from Events Channel */}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    </div>
  )
}

export default Home