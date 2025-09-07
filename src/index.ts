import express from 'express'
import { buildOpenAPIDocument } from 'express-zod-openapi-autogen'
import swaggerUI from 'swagger-ui-express'

import usersRouter from './routes/users'

const app = express()
app.use(express.json())
const PORT = 3000

app.use('/api', usersRouter)

const doc = buildOpenAPIDocument({
	routers: [usersRouter],
	schemaPaths: [],
	config: {
		info: {
			version: '1.0.0',
			title: 'API docs',
		},
	},
	errors: {},
	openApiVersion: '3.0.0',
})

app.use('/docs', swaggerUI.serve, swaggerUI.setup(doc, {}))

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`)
})
