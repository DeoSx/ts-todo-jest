import * as React from 'react'

import { ContextApp } from '../App'
import { ActionType } from '../types/StateTypes'

const NewTask: React.FC = () => {
  const { state, changeState } = React.useContext(ContextApp)

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    changeState({ type: ActionType.ADD, payload: state.newTask })
    changeState({ type: ActionType.CHANGE, payload: '' })
    console.log(state)
  }

  const changeTask = (value: string) => {
    changeState({ type: ActionType.CHANGE, payload: value })
    console.log(state)
  }

  return (
    <>
      <form onSubmit={(event) => addTask(event)}>
        <input
          type="text"
          onChange={(event) => changeTask(event.target.value)}
          value={state.newTask}
        />
        <button type="submit">Add a task</button>
      </form>
    </>
  )
}

export default NewTask
