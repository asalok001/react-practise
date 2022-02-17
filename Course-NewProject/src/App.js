import React, { useState } from 'react'
import UserList from './component/Users/UserList'

import AddUser from './component/Users/AddUser'
function App () {
  const [userList, setUserList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUserList(prevUserList => {
      return [
        ...prevUserList,
        { id: Math.random().toString(), name: uName, age: uAge }
      ]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  )
}

export default App
