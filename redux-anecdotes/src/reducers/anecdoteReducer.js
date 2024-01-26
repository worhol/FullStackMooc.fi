import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    // addVote: (state, action) => {
    //   const id = action.payload.id
    //   const anecdoteToVoteFor = state.find((n) => n.id === id)
    //   const votedAnectode = {
    //     ...anecdoteToVoteFor,
    //     votes: anecdoteToVoteFor.votes + 1
    //   }
    //   return state
    //     .map((anecdote) => (anecdote.id !== id ? anecdote : votedAnectode))
    //     .sort((a, b) => b.votes - a.votes)
    // },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes.sort((a, b) => b.votes - a.votes)))
  }
}
export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}
export const addVote = (anedcoteObject) => {
  return async (dispatch, getState) => {
    const { anecdotes } = getState()
    const anecdoteToVoteFor = anecdotes.find((n) => n.id === anedcoteObject.id)
    const votedAnectode = {
      ...anecdoteToVoteFor,
      votes: anecdoteToVoteFor.votes + 1
    }
    const newVote = await anecdoteService.updateVote(
      votedAnectode.id,
      votedAnectode
    )
    dispatch(
      setAnecdotes(
        anecdotes
          .map((anecdote) => (anecdote.id !== newVote.id ? anecdote : newVote))
          .sort((a, b) => b.votes - a.votes)
      )
    )
  }
}
export default anecdoteSlice.reducer
