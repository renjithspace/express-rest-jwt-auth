const express = require('express')

const app = express()
const port = 8080

app.get('/api', (request, response) => {
  response.json({ env: 'live', version: '1.0.0', status: 'up' })
})

app.listen(port, () => console.log(`API server running on port ${port}`))