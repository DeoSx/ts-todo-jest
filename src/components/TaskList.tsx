import * as React from 'react'

import { ContextApp } from '../App'
import { Task } from '../types/TaskTypes'
import { ActionType } from '../types/StateTypes'

const TasksList: React.FC = () => {
  const { state, changeState } = React.useContext(ContextApp)

  const removeTask = (task: Task): void => {
    changeState({ type: ActionType.REMOVE, payload: task })
  }

  const toggleTask = (task: Task): void => {
    changeState({ type: ActionType.TOGGLE, payload: task })
  }

  return (
    <>
      <ul>
        {state.tasks.map((task, i) => {
          return (
            <li key={i} className={task.isDone ? 'ready' : ''}>
              <label>
                <input
                  type="checkbox"
                  onChange={() => toggleTask(task)}
                  checked={task.isDone}
                />
              </label>
              <span>{task.name}</span>
              <button onClick={() => removeTask(task)}>shut</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TasksList
