const { connect, connection } = require('mongoose')

const connectionString =
	process.env.MONGODB_URI ||
	'mongodb+srv://akoumov:Paswword2004@cluster0.jdoco62.mongodb.net/test'

connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

module.exports = connection
