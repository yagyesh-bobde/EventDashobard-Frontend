import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { eventContext } from '../context/EventState'

const Preview = () => {
  const { formValues, createEvent } = useContext(eventContext);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault()
    createEvent()
    navigate('/')
  }

  return (
    <div className='preview'>
      <div className="row">
        <img src={formValues.banner} style={{ width:'100%', height:'30vh'}} />
      </div>
  {/*  */}
      <div className="row my-4" style={{ display: 'flex', justifyContent:'center' }}>
        {/*  */}
        <div className="col-sm-12 col-md-8 text-center">
          <div className='w-50' style={{ marginLeft: '5%'}}>
            <h2>Event: {formValues.name}</h2>
            <span style={{ fontWeight:'300'}}><i>{formValues.short_desc}</i></span>
            <h3>Description:</h3>
            <p>{formValues.long_desc}</p>
          </div>
        </div>
       
        {/*  */}
        <div className="col-sm-12 col-md-4 my-4" style={{ borderRadius: '25px', background: '#eeeeee'}}>
          
          <div className="row">
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
             
              <p> <i className="fa-solid fa-calendar d-inline mx-2 text-primary"></i><span style={{ fontWeight: '700' }}>{formValues.eventDate}</span></p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems:'center'}}>
              <p><i className="fa-solid fa-clock d-inline mx-2 text-primary"></i><span style={{ fontWeight: '700' }}>{formValues.eventTime}</span></p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems:'center'}}>
              <p> <i className="fa-solid fa-video d-inline mx-2 text-primary"></i><a href={formValues.link} style={{ fontWeight: '700', textDecoration:'none !important'}}>Link</a></p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems:'center'}}>
              <p><i className="fa-solid fa-dollar-sign d-inline mx-2 text-primary"></i><span className='text-success' style={{ fontWeight:'700'}}>Free</span></p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems:'center'}}>
              <span>Duration- 45 Minutes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row place-center" style={{ position: 'relative', top: '5', left: '0', zIndex: '5' }}>
        <div className="col-3">
          <button onClick={() => navigate('/createEvent')} type='button' className='btn place-center text-primary'>
            {'<'} Back
          </button>
        </div>
        <div className="col-2">
          <button onClick={() => onSubmit()} type='button' className='btn btn-success' >
            Save
          </button>
        </div>

      </div>
    </div>
  )
}

export default Preview