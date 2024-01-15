import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })
  test('ok is incremented', () => {
    const action = {
      type: 'OK'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0
    })
  })
  test('bad is incremented', () => {
    const action = {
      type: 'BAD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 1
    })
  })
  test('reset zeros out all', () => {
    const actionGood = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const stateOne = counterReducer(state, actionGood)
    expect(stateOne).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })

    const actionOk = {
      type: 'OK'
    }
    deepFreeze(stateOne)
    const stateTwo = counterReducer(stateOne, actionOk)
    expect(stateTwo).toEqual({
      good: 1,
      ok: 1,
      bad: 0
    })

    const actionBad = {
      type: 'BAD'
    }
    deepFreeze(stateTwo)
    const stateThree = counterReducer(stateTwo, actionBad)
    expect(stateThree).toEqual({
      good: 1,
      ok: 1,
      bad: 1
    })
    const actionZero = {
      type: 'ZERO'
    }
    deepFreeze(stateThree)
    const stateFour = counterReducer(stateThree, actionZero)
    expect(stateFour).toEqual(initialState)
  })
})
