import { createContext, useState } from 'react'


export const eventContext = createContext();

const EventState = (props) => {
    const [allEvents, setallEvents] = useState([]);
    const [oneEvent, setoneEvent] = useState([])
    const [formValues, setformValues] = useState({
        name: '',
        banner: 'https://img.freepik.com/premium-vector/web-development-coding-programming-futuristic-banner-computer-code-laptop_3482-5572.jpg?w=2000',
        short_desc: '',
        long_desc: '',
        lang: 'english',
        eventDate: '',
        eventTime: '',
        link: '',
    })

    // SITE URL
    const host = 'https://events-dashboard-backend.herokuapp.com'

    // TODO: API CALL FOR GETTING ALL Tasks
    const getEvents = async () => {
        const response = await fetch(`${host}/api/events/all`);
        const json = await response.json()
        if (json.success) {
            let newEvents = [...json.res]
            newEvents = newEvents.reverse()
            setallEvents(newEvents)
        } else {
            alert(json.error)
        }
    }

    // TODO: Create Event call
    const createEvent = async ( ) => {
        const response = await fetch(`${host}/api/events/createEvent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...formValues }) 
        });
        const json = await response.json()
        
        if (json.success) {
            setallEvents(allEvents.reverse().concat(json.res).reverse())
            
            alert("Added note successfully")
        } else {
            alert(json.error.errors.message)
        }
    }
    // TODO: Read One Event
    const getOneEvent = async(id) => {
        const event = allEvents.filter(item => item._id === id)
        console.log(event)
        setoneEvent(event[0])
    //     const response = await fetch(`${host}/api/events/${id}`)
    //     const json = await response.json()
    //     if (json.success) {
    //         setallEvents(allEvents.reverse().concat(json.res).reverse())
    //         alert("Added note successfully")
    //     } else {
    //         alert(json.error.errors.message)
    //     }
    // }
    }

    // TODO: Update an event

    const editEvent = async (id ) => {
        // TODO: API CALL FOR EDITING A NOTE

        const response = await fetch(`${host}/api/tasks/updateEvent/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...formValues }) // body data type must match "Content-Type" header
        });
        const json = await response.json()


        //* EDIT IN THE NOTES
        if (json.success) {
            const indexFind = allEvents.findIndex((note) => id === note._id)
            let newNotes = allEvents;
            newNotes[indexFind] = {
                _id: id,
                ...formValues
            }
            setallEvents(newNotes)
            alert("Edited note successfully", "success")
        } else {
            alert(json.error, "danger")
        }
    }
    // TODO: Delete an event
    const deleteEvent = async (id) => {
        // TODO: API CALL FOR DELETING A NOTE
        const response = await fetch(`${host}/api/events/deleteEvent/${id}`, {
            method: 'DELETE',
            headers: {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        });
        const json = await response.json()

        // * UPDATE THE FRONTEND NOTES
        if (json.success) {
            let newNotes = allEvents.filter((note) => note._id !== id)
            setallEvents(newNotes)
            alert("Deleted note successfully", "success")
        } else {
            alert(json.error, "danger")
        }
    }


  return (
      <eventContext.Provider value={{ allEvents, oneEvent, getEvents, createEvent, getOneEvent, editEvent, deleteEvent, formValues, setformValues }}>
        {props.children}
    </eventContext.Provider>
  )
}

export default EventState
