import React, { useContext, useEffect } from 'react'
import EventList from '../components/EventList'
import { eventContext } from '../context/EventState';


const Dashboard = () => {

  const { getEvents } = useContext(eventContext);

  useEffect(() => {
    getEvents()
  // eslint-disable-next-line
  }, [])

  return (
    <div className='dashboard'>
      <div className="row">
        <div className="col-3 bg-dark">
          <header className='header'>
            <h5>Dashboard</h5>
          </header>
        </div>
        <div className="col-9 ">
          <header className='home_header'>
            <h2>Welcome, Ravi</h2>
            <p>This is your personal dashboard, where you can manage all your events!</p>
          </header>
          <main className='event_list'>
            <EventList />
          </main>
        </div>
    </div>
    </div>
  )
}

export default Dashboard