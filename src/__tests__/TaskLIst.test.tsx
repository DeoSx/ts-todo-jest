import * as React from 'react'
import { shallow } from 'enzyme'
import { cleanup, render } from '@testing-library/react'

import { initialState, ContextApp } from '../App'
import TaskList from '../components/TaskList'
import { State } from '../types/StateTypes'

describe('<TaskList />', () => {
  afterEach(cleanup)

  const testState: State = {
    newTask: '',
    tasks: [
      { name: 'name', isDone: false },
      { name: 'nametwo', isDone: false }
    ]
  }

  const Wrapper = () => (
    <ContextApp.Provider value={{ state: testState }}>
      <TaskList />
    </ContextApp.Provider>
  )

  test('should render correct tasks length', () => {
    const { container } = render(<Wrapper />)
    expect(container.querySelectorAll('li')).toHaveLength(
      testState.tasks.length
    )
  })
})
