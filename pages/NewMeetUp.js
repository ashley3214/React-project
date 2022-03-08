import React from 'react'
import { useNavigate } from 'react-router-dom'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetUp() {
  const navigate=useNavigate(); 
  function addMeetupHandler(meetupData){
    fetch('https://react-getting-started-12124-default-rtdb.firebaseio.com/meetups.json',{
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(()=>{
      navigate('/',{replace:true})
    })


  }
  return (
    <section>
      <h1>Add New NewMeetUp</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  )
}

export default NewMeetUp