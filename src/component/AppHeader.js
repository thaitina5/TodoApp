import React, { useState } from 'react'
import Button, { SeclectButton } from './Button'
import styles from '../styles/modules/app.module.scss'
import TodoModal from './TodoModal'

function AppHeader() {
    const {modalOpen, setModalOpen} = useState(true);
  return (
    <div className={styles.appHeader}>
        <Button variant='primary'>Add Task</Button>
        <SeclectButton id='status'>
            <option value='all'>All</option>
            <option value='incomplete'>Incomplete</option>
            <option value='complete'>Complete</option>
        </SeclectButton>

        <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  )
}

export default AppHeader