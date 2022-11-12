import './App.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios'

function App() {
  const [listOfUsers, setListOfUsers] = useState([])
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [username, setUsername] = useState('')

  useEffect(() => {
    Axios.get('http://localhost:4000/getUsers').then((response)=>{
      setListOfUsers(response.data)
    })
  
    // return () => {
      
    // }
  }, [])

  const createUser = () => {
    Axios.post('http://localhost:4000/createUser', {
      name: name, age: age, username: username
    }).then((response)=>{
      alert('Successfully created user')
    })
  }
  

  return (
    <div className="App">
      <div className='usersDisplay'>
        {listOfUsers.map((user)=>{
          return <div>
            <h2>Name: {user.name}</h2>
            <h2>Age: {user.age}</h2>
            <h2>Username: {user.username}</h2>
            <br/>
          </div>
        })}
      </div>
      <hr/>
      <div>
        <input type='text' placeholder='Name...' onChange={(event)=>{setName(event.target.value)}}/>
        <input type='text' placeholder='Age... 'onChange={(event)=>{setAge(event.target.value)}}/>
        <input type='text' placeholder='Username...' onChange={(event)=>{setUsername(event.target.value)}}/>
        <button onClick={createUser}>Create User</button>
      </div>
    </div>
  );
}

export default App;
