import { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import ancedoteService from './services/anecodotes'
import { setAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    ancedoteService
      .getAll()
      .then((anecdotes) => dispatch(setAnecdotes(anecdotes)))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App
