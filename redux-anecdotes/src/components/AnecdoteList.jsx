import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import Notification from './Notification'
import {
  sendNotification,
  clearNotification
} from '../reducers/notificationReducer'
import Filter from './Filter'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector((state) => {
    if (state.filter === 'ALL') {
      return state.anecdotes
    }
    return state.anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
    )
  })

  const vote = (id) => {
    const anecdote = anecdotes.find((a) => a.id === id)

    dispatch(addVote({ id }))
    dispatch(
      sendNotification({ type: 'anecdotes/addVote', content: anecdote.content })
    )
    setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)
  }
  return (
    <div>
      <Notification />
      <Filter />
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}
export default AnecdoteList
