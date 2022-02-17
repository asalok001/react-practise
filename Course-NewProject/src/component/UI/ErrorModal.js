import React from 'react'
import ReactDOM  from 'react-dom'
import Card from './Card'
import Button from './Button'
import styles from './ErrorModal.module.css'

const BackDrop = props => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />
}

const ModalOverlay = props => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.ttle}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm}>Ok</Button>
      </footer>
    </Card>
  )
}

const ErrorModal = props => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
          />,
          document.getElementById('overlay-root')
      )}
    </React.Fragment>
  )
}

export default ErrorModal