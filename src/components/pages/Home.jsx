import React from 'react'
import Header from '../header/Header'
import Error from '../alerts/Error'
import { Link } from 'react-router-dom';

const Home = () => {


    

  return (
    <div className='Home'>
        <Header/>
        <Error/>
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
                <nav>
                <h2>Events</h2>
                <div className='event-icons'>
                    <a target="_blank" href="https://calendar.google.com/calendar/embed?src=633977072dce8678e42815b1eed61d2b4c49eb29f33511a23ce91e69d19b26b0%40group.calendar.google.com&ctz=America%2FChicago">
                        <svg href="https://calendar.google.com/calendar/embed?src=633977072dce8678e42815b1eed61d2b4c49eb29f33511a23ce91e69d19b26b0%40group.calendar.google.com&ctz=America%2FChicago" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-event calendar" viewBox="0 0 16 16">
                            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                        </svg>
                    </a>
                    <Link to="./new-event/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    </Link>
                </div>
                </nav>
                {/* Render posts from Events Channel */}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    </div>
  )
}

export default Home