import React, { useContext, useEffect } from 'react'
import { eventContext } from '../context/EventState';
import AddEventCard from './Cards/AddEventCard'
import EventCard from './Cards/EventCard';

const EventList = () => {
  const { allEvents, getEvents } = useContext(eventContext);

  useEffect(() => {
    getEvents()
  }, [])
  
  return (
    <div>
      <div className="row" style={{ padding: '0', margin: '0' }}>
        <div className="col-3 mx-2 ">
          <AddEventCard />
        </div>
      </div>
      <hr />
      {
        (allEvents.length === 0 ) &&
        <h3 className='text-center my-5'><i className="fa-solid fa-face-sad-tear text-danger"></i>No Events To Display</h3>
      }
      { (allEvents.length !== 0) && 
        <div className="row event_list " style={{ overflowY: 'auto', maxHeight: '50vh' }}>
          <h4 style={{ textAlign:'right',  fontWeight:'200'}}>Total Events: {allEvents.length}</h4>
          {/* MAP THROUGH EVENTS HERE */}
          {allEvents.map(event => {
            return (
              <div className="col-md-4 col-sm-12 mt-2" >
                <EventCard event={event} />
              </div>
            )
          })}
        </div>}
      
    </div> 
   
  )
}

export default EventList