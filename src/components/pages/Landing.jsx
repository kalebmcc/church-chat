import React from 'react';
import LandingHeader from '../header/LandingHeader';
import chatting from '../../assets/chatting.svg';
import events from '../../assets/events.svg';
import announcements from '../../assets/announcements.svg';
import message from '../../assets/message.svg';

const Landing = () => {

  return (

    <div className='landing'>
        <LandingHeader/>
        <div className='hero-module'>
            <div className='copy'>
                <h1>Stay Connected and Up-to-date</h1>
                <p>It's never been easier to learn what's happening at COTW.</p>
                <a className='btn'>Sign up now</a>
            </div>
            <img src={chatting}/>
        </div>
        <div className='features' id='features'>
            <div className='copy'>
                <h1 className='title'>Features</h1>
                <div className='sbs events'>
                    <div className='copy'>
                        <h3>Events</h3>
                        <p>It's never been easier to learn what's happening at COTW.</p>
                    </div>
                    <div className='img-half'>
                        <img src={events}/>
                    </div>
                </div>
                <div className='sbs announcements flip'>
                    <div className='copy'>
                        <h3>Announcements</h3>
                        <p>It's never been easier to learn what's happening at COTW.</p>
                    </div>
                    <div className='img-half'>
                        <img src={announcements}/>
                    </div>
                </div>
                <div className='sbs messages'>
                    <div className='copy'>
                        <h3>Messages</h3>
                        <p>It's never been easier to learn what's happening at COTW.</p>
                    </div>
                    <div className='img-half'>
                        <img src={message}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='about'>
            <div className='copy'>
                <h1>For the Church by the Church</h1>
                <p>We are very excited that this project was created entirely from our congregation members at Church of the Word. Our hope is that better communication can lead to more chances to learn and share the gospel.</p>
            </div>
        </div>
    </div>

  )
}

export default Landing