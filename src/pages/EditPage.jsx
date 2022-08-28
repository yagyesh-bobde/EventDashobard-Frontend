import React from 'react'
import { useNavigate } from 'react-router-dom';
import EditForm from '../components/Cards/EditForm';
import CreateEventForm from '../components/CreateEventForm'

const EditPage = () => {
    const navigate = useNavigate();

    
  return (
        <div className='create_event'>

            {/* BACK & PREVIEW BUTTONs ON TOP */}
            <div className="row place-opp" style={{ position: 'relative', top: '5', left: '0', zIndex: '5' }}>
                <div className="col-3">
                    <button onClick={() => navigate('/')} type='button' className='btn place-center text-primary'>
                        {'<'} Back
                    </button>
                </div>

            </div>

            {/* CREATE EVENT FORM */}
            <EditForm />

        </div>
    )
}

export default EditPage
