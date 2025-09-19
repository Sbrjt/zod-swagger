import express from 'express'
import { buildOpenAPIDocument } from 'express-zod-openapi-autogen'
import swaggerUI from 'swagger-ui-express'

import usersRouter from './routes/users'

console.clear()

const app = express()
const PORT = 4001

app.use(express.json())

app.use('/', usersRouter)

const doc = buildOpenAPIDocument({
	routers: [usersRouter],
	schemaPaths: [],
	config: {
		info: {
			title: 'API docs',
			version: '',
		},
	},
	errors: {},
	openApiVersion: '3.0.0',
})

app.use('/docs', swaggerUI.serve, swaggerUI.setup(doc))

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`)
})
