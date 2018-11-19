import wombatReducer from '../../reducers/wombats'


test('Add Wombat', () => {
  let expected = { wombats: ['Harrison'] }

  let initialState = { wombats: [] }

  let addWombatAction = {
    type: 'ADD_WOMBAT',
    wombat: 'Harrison'
  }

  let actual = wombatReducer(initialState, addWombatAction)

  expect(actual).toEqual(expected)
})
