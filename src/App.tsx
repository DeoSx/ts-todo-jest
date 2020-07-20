import * as React from 'react'

import { useReducer } from 'react'
import { Action, State, ContextState } from './types/StateTypes'
import { todoReducer } from './reducer'
import NewTask from './components/NewTask'
import TasksList from './components/TaskList'

export const initialState: State = {
  newTask: '',
  tasks: []
}

export const ContextApp = React.createContext<Partial<ContextState>>({})

const App: React.FC = () => {
  const [state, changeState] = useReducer<React.Reducer<State, Action>>(
    todoReducer,
    initialState
  )

  const ContextState: ContextState = {
    state,
    changeState
  }

  return (
    <>
      <h1>ts-react-jest</h1>
      <ContextApp.Provider value={ContextState}>
        <NewTask />
        <TasksList />
      </ContextApp.Provider>
    </>
  )
}

export default App
