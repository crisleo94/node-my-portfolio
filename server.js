const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
require('./hbs/helpers')

const port = 3000

app.use(express.static(__dirname + '/public'))
app.set('views', path.join(__dirname, 'views'))

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
	res.render('home', {
		name: 'Cristhian'
	})
})

app.get('/about', (req, res) => {
	res.render('about')
})

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})