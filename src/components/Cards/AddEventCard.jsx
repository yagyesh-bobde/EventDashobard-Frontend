import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddEventCard = () => {
  const navigate = useNavigate();

  return (
    <button className='card btn d-flex' style={{ }} onClick={() => navigate('/createEvent')}>
      <h4 style={{display:'flex', flex:'wrap', overflow:'hidden', alignItems: 'center' }}>
        <i className="fa-solid fa-circle-plus icon d-inline" ></i>Add Event</h4>
    </button>
  )
}

export default AddEventCard