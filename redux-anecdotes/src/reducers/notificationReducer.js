import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: null,
  reducers: {
    sendNotification: (state, action) => {
      if (action.payload.type === 'anecdotes/addVote') {
        state = { message: `You voted for ${action.payload.content}` }
      } else if (action.payload.type === 'anecdotes/createAnecdote') {
        state = { message: `You created ${action.payload.content}` }
      }
      return state
    },
    clearNotification: (state) => {
      state.message = null
    },
    prepare: (type, content) => {
      return { payload: { type, content } }
    }
  }
})

export const { sendNotification, clearNotification } = notificationSlice.actions

export default notificationSlice.reducer
