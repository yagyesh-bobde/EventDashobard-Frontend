import React, { useContext, useEffect, useState } from 'react'
import { eventContext } from '../../context/EventState'

const EventCard = ({ event }) => {
  const { editEvent, deleteEvent } = useContext(eventContext);

  const [showEditModal, setshowEditModal] = useState(false)
  const [showDeleteModal, setshowDeleteModal] = useState(false)


  const onDelete = () => {
    deleteEvent(event._id)
  }
  return (
    <div className="btn card my-2" stlye={{ borderRadius: "20px"}}>
      <img style={{ width:'100%',height:'150px', maxHeight:'150px'}} src={event.banner} className="card-img-top" alt="..."/>
        <div className="card-body">
        <div className="card-title" style={{ justifyContent: "space-between" }}>
          <div className="" >
            {event.name} 
          </div>
           
          </div>

        <span className="card-text" style={{ fontWeight: '300' }}><i>{event.short_desc}</i></span>
          <p style={{ fontSize:"1.25rem"}}>{event.long_desc}</p>
        </div>
        <ul className="list-group list-group-flush">
        <li className="list-group-item"><b>Language: </b>{event.lang}<br /><b>{'Date & Time :'} </b>{`${event.eventTime}`}</li>
          <li className="list-group-item"></li>
        </ul>
        <div className="card-footer d-flex">
          <a href={`${event.link}`} className="card-link">Event Link
          <i className="fa-solid fa-up-right-from-square d-inline mx-2"></i>
          </a>
        <div className="place-center" style={{ alignContent: 'right' }}>
          {/* <button type='button' className='btn' onClick={()=> showEditModal(true)} >
            <i className="fa-solid fa-pen-to-square mx-1"></i>
          </button> */}
          <button type='button' className='btn' data-bs-toggle="modal" data-bs-target="#deleteModal">
            <i className="fa-solid fa-trash "></i>
          </button>
        </div>
        </div>

        {/* MODALS */}
                {/* DELETE MODAL */}
      <div className="modal" id='deleteModal' tabindex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm: Delete Event</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete this event?</p>
            </div>
            <div className="modal-footer d-flex">
              <button type="button" className="btn btn-secondary d-inline w-25" data-bs-dismiss="modal">Close</button>
              <button type="button" data-bs-dismiss="modal" onClick={onDelete} className="btn btn-danger d-inline w-25">Delete</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default EventCard