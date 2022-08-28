import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { eventContext } from '../context/EventState'
import img from '../assets/bg-1.jpg'



const PreviewOneEvent = () => {
    const { oneEvent, getOneEvent } = useContext(eventContext);

    const navigate = useNavigate();
    const goEdit = () => {
        getOneEvent(oneEvent._id)
        navigate(`/edit/${oneEvent._id}`)
    }
    return (
        <div className='preview'>
            <div className="row img">
                <img src={oneEvent.banner} style={{ width: '100%', height: '30vh' }} />
            </div>
            {/*  */}
            <div className="row my-4" style={{ display: 'flex', justifyContent: 'center' }}>
                {/*  */}
                <div className="col-sm-12 col-md-8 text-center">
                    <div className='w-50' style={{ marginLeft: '5%' }}>
                        <h2>Event: {oneEvent.name}</h2>
                        <span style={{ fontWeight: '300' }}><i>{oneEvent.short_desc}</i></span>
                        <h3>Description:</h3>
                        <p>{oneEvent.long_desc}</p>
                    </div>
                </div>

                {/*  */}
                <div className="col-sm-12 col-md-4 my-4" style={{ borderRadius: '25px', background: '#eeeeee' }}>

                    <div className="row place-opp">
                        <div className="col-4" style={{ alignItems:'center'}}>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <p> <i className="fa-solid fa-calendar d-inline mx-2 text-primary"></i><span style={{ fontWeight: '700' }}>{oneEvent.eventDate}</span></p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <p><i className="fa-solid fa-clock d-inline mx-2 text-primary"></i><span style={{ fontWeight: '700' }}>{oneEvent.eventTime}</span></p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <p> <i className="fa-solid fa-video d-inline mx-2 text-primary"></i><a target='blank' href={oneEvent.link} style={{ fontWeight: '700', textDecoration: 'none !important' }}>Link</a></p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <p><i className="fa-solid fa-dollar-sign d-inline mx-2 text-primary"></i><span className='text-success' style={{ fontWeight: '700' }}>Free</span></p>
                            </div>
                        </div>
                        <div className="col-8">
                            <img style={{ margin: '5%', width: '75%', borderRadius:'75px' }} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbmV-MSe97eu2wTWlS9zgG6acyVpla5c5n8A&usqp=CAU'} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <span>Duration- 45 Minutes</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ marginTop:'-2.5%'}}>
                <div className="col-3">
                    <button onClick={() => navigate('/')} type='button' className='btn btn-primary text-light'>
                        {'<<'} Back {'<<'}
                    </button>
                </div>
                <div className="col-3">
                    <button type='button' className='btn d-flex' onClick={goEdit} >
                        <p>Edit <i className="fa-solid fa-pen-to-square mx-1 d-inline"></i></p>
                    </button>
                </div>


            </div>
        </div>
    )
}

export default PreviewOneEvent