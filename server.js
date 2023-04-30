const express = require('express')
const db = require('./config/connection')
const routes = require('./routes')
const cors = require('cors')

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(routes)

app.get('/api/v1/form', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	)
	res.end()
})

db.once('open', () => {
	app.listen(PORT, () => {
		console.log(`API server running on port ${PORT}!`)
	})
})
