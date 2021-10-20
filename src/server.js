const express = require('express')
const { v4: uuid } = require('uuid')

const port = 3333

const app = express()
app.use(express.json())

const todos = []


app.get('/', (req, res) => res.json({ todos }))

app.post('/create', (req, res) => {
  const { name } = req.body

  if (!name) return res.status(400).json({ error: 'ToDo name is required.' })

  const todo = {
    id: uuid(),
    name
  }
  
  todos.push(todo)

  return res.status(201).json(todo)
})

app.delete('/:id', (req, res) => {
  const { id } = req.params

  const todoIndex = todos.findIndex(todo => todo.id === id)

  if (todoIndex < 0) return res.status(404).json({ error: 'Not found.' })

  todos.splice(todoIndex, 1)

  return res.status(204).send()
})

app.listen(port, () => console.log(`server running in port ${port}`))