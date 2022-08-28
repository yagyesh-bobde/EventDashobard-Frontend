import React from 'react'
import { Dashboard, Preview, CreateEvent, PreviewOneEvent, EditPage } from './pages/index'
import {
  Routes, 
  Route
} from 'react-router-dom'
import EventState from './context/EventState'
import './App.css'


const App = () => {
  return (
    <div className='app'>
      <EventState>
        <Routes>
          <Route path='/' exact element={<Dashboard />} />
          <Route path='/preview' exact element={<Preview />} />
          <Route path='/edit/:id' exact element={<EditPage />} />
          <Route path='/preview/:id' exact element={<PreviewOneEvent />} />
          <Route path='/createEvent' exact element={<CreateEvent />} />
        </Routes>
      </EventState>
    </div>
  )
}

export default App