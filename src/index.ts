import express from 'express'
import { buildOpenAPIDocument } from 'express-zod-openapi-autogen'
import swaggerUI from 'swagger-ui-express'

import usersRouter from './routes/users'

const app = express()
app.use(express.json())

app.use('/api', usersRouter)

try {
	const doc = buildOpenAPIDocument({
		routers: [usersRouter],
		schemaPaths: ['./schemas'],
		config: {
			servers: [{ url: `https://server.com/api` }],
			info: {
				version: '1.0.0',
				title: 'My API',
				description: `Welcome to the My API!`,
			},
		},
		errors: {
			401: 'Unauthorized',
			403: 'Forbidden',
		},
		openApiVersion: '3.0.0',
	})
	app.get(`/openapi.json`, (req, res) => res.json(doc))
	app.use(`/openapi`, swaggerUI.serve, swaggerUI.setup(doc))
} catch (err) {
	console.error(err)
}

app.listen(3000, () => {
	console.log('Server running at http://localhost:3000')
})
