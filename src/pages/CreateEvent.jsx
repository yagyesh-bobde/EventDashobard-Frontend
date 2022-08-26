import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CreateEventForm from '../components/CreateEventForm'
import { eventContext } from '../context/EventState'


const CreateEvent = () => {
  const { formValues } = useContext(eventContext)
  const navigate = useNavigate();

  return (
    <div className='create_event'>

      {/* BACK & PREVIEW BUTTONs ON TOP */}
      <div className="row place-opp" style={{ position: 'relative', top:'5', left:'0', zIndex:'5'}}>
        <div className="col-3">
          <button onClick={()=> navigate('/')} type='button' className='btn place-center text-primary'>
              {'<'} Back
          </button>
        </div>
        <div className="col-2">
          <button disabled={(formValues.name && formValues.long_desc && formValues.banner && formValues.eventDate && formValues.eventTime)} onClick={() => navigate('/preview')} type='button' className='btn btn-outline-danger' >
            Preview Page
          </button>
        </div>
        
      </div>

      {/* CREATE EVENT FORM */}
      <CreateEventForm />

    </div>
  )
}

export default CreateEvent
