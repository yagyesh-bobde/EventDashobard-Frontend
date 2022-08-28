import React, { useContext, useState } from 'react'
import { eventContext } from '../../context/EventState'
import { useNavigate } from 'react-router-dom'



const EditForm = () => {
    const { oneEvent, setoneEvent, editEvent } = useContext(eventContext);
    const navigate = useNavigate();

    const onChange = (e) => {
        setoneEvent({
            ...oneEvent,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        editEvent(oneEvent._id)
        navigate('/')
    }

    return (
        <div>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h3 style={{ color: 'grey' }} >Create Event</h3>

                    <div className="col-sm-12 col-md-5 my-3">
                        <input className='form-control' onChange={(e) => onChange(e)} value={oneEvent.name} name='name' id='name' type='text' placeholder='Event Name' required />
                        <input className='form-control' onChange={(e) => onChange(e)} name='banner' id='banner' type='text' placeholder='Banner' required value={oneEvent.banner} />
                        <input className='form-control' onChange={(e) => onChange(e)} value={oneEvent.short_desc} name='short_desc' id='short_desc' type='text' placeholder='Short Description' required maxLength={100} />
                        <textarea className='form-control' onChange={(e) => onChange(e)} value={oneEvent.long_desc} name='long_desc' style={{ height: '45%', width: '100%', margin: '10px auto' }} placeholder={'Please describe the event'} />
                    </div>
                    <div className="col-sm-12 col-md-5 my-3">
                        <select className='form-select' onChange={(e) => onChange(e)} name='lang' id='lang' defaultValue={oneEvent.lang} >
                            <option value='english' >English</option>
                            <option value='hindi' >Hindi</option>
                        </select>
                        <input className='form-control' onChange={(e) => onChange(e)} value={oneEvent.eventDate} name='eventDate' id='eventDate' type='date' placeholder='Choose Date' required />
                        <input className='form-control' onChange={(e) => onChange(e)} value={oneEvent.eventTime} name='eventTime' id='eventTime' type='time' placeholder='Event Time' required />
                        <input className='form-control' onChange={(e) => onChange(e)} value={oneEvent.link} name='link' type='text' placeholder='Event Link' required minLength={7} />
                    </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="row" style={{ marginTop: '5%' }}>
                    <button type='submit' className='btn btn-danger w-25 m-auto' style={{ fontWeight: '750' }}>
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditForm
