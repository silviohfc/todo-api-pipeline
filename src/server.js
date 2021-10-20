const express = require('express')
const port = 3333

const app = express()

app.get('/', (req, res) => res.send('Hello'))

app.listen(port, () => console.log(`server running in port ${port}`))