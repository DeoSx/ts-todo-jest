import { todoReducer } from '../reducer'
import { ActionType, Action, State } from '../types/StateTypes'
import { Task } from '../types/TaskTypes'

describe('todoReducer', () => {
  test('return new state for ADD type', () => {
    // create initialState with empty arr
    const initialState: State = {
      newTask: '',
      tasks: []
    }
    // create ADD action and add text in 'newTask'
    const updateAction: Action = { type: ActionType.ADD, payload: 'newtask' }

    // call reducer with state and action
    const updateState = todoReducer(initialState, updateAction)

    // expect new task in state
    expect(updateState).toEqual({
      newTask: '',
      tasks: [{ name: 'newtask', isDone: false }]
    })
  })
  test('return new state for REMOVE type', () => {
    const task: Task = { name: 'task', isDone: false }
    const initialState: State = {
      newTask: '',
      tasks: [task]
    }
    const updateAction: Action = { type: ActionType.REMOVE, payload: task }
    const updateState = todoReducer(initialState, updateAction)
    expect(updateState).toEqual({ newTask: '', tasks: [] })
  })
  test('return new state for TOGGLE type', () => {
    const task: Task = { name: 'task', isDone: false }
    const initialState: State = {
      newTask: '',
      tasks: [task]
    }
    const updateAction: Action = { type: ActionType.TOGGLE, payload: task }
    const updateState = todoReducer(initialState, updateAction)
    expect(updateState).toEqual({
      newTask: '',
      tasks: [{ name: 'task', isDone: true }]
    })
  })
  test('return new state for CHANGE type', () => {
    const task: Task = { name: 'task', isDone: false }
    const initialState: State = {
      newTask: '',
      tasks: [task]
    }
    const updateAction: Action = { type: ActionType.CHANGE, payload: 'tasktwo' }
    const updateState = todoReducer(initialState, updateAction)
    expect(updateState).toEqual({
      newTask: 'tasktwo',
      tasks: [{ name: 'task', isDone: false }]
    })
  })
})
