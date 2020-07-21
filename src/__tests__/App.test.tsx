import * as React from 'react'
import { shallow } from 'enzyme'
import { render, cleanup, fireEvent } from '@testing-library/react'
import App from '../App'

describe('<App/>', () => {
  // clean enviroment after test
  afterEach(cleanup)

  test('hasn`t got changes', () => {
    const component = shallow(<App />)
    expect(component).toMatchSnapshot()
  })

  test('should render right input value', async () => {
    const { container } = render(<App />)
    expect(container.querySelector('input').getAttribute('value')).toEqual('')

    fireEvent.change(container.querySelector('input'), {
      target: {
        value: 'test'
      }
    })
    expect(container.querySelector('input').getAttribute('value')).toEqual(
      'test'
    )

    fireEvent.click(container.querySelector('button'))
    expect(container.querySelector('input').getAttribute('value')).toEqual('')
  })
})
