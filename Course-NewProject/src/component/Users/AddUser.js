import React, { useState, useRef } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import styles from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Helper/Wrapper'

const AddUser = props => {
  const nameRef = useRef()
  const ageRef = useRef()

  const [userName, setUserName] = useState('')
  const [userAge, setUserAge] = useState('')
  const [error, setError] = useState()

  const submitHandler = event => {
    event.preventDefault()
    const enteredName = nameRef.current.value;
    const enteredAge = ageRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Error Occured',
        message: 'Please input a valid name and age (non empty values)'
      })
      return
    }

    if (+enteredAge < 1) {
      setError({
        title: 'Error Occured',
        message: 'Please input a valid age'
      })
      return
    }
    props.onAddUser(enteredName, enteredAge)
    console.log(userName, userAge)
    setUserName('')
    setUserAge('')
  }

  const nameChangeHandler = event => {
    setUserName(event.target.value)
  }

  const ageChangeHandler = event => {
    setUserAge(event.target.value)
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    // <Wrapper>
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={nameChangeHandler}
            value={userName}
            ref={nameRef}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={userAge}
            onChange={ageChangeHandler}
            ref={ageRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
    // </Wrapper>
  )
}
export default AddUser
