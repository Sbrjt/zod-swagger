import { Router } from 'express'
import { openAPIRoute } from 'express-zod-openapi-autogen'
import { UserSchema } from '../schemas/user'

const router = Router()

router.get(
	'/users',
	openAPIRoute(
		{
			tag: 'Users',
			summary: 'List all users',
			description: 'Returns a user just for testing',
			response: UserSchema,
		},
		async (req, res) => {
			res.json({
				id: '123',
				email: 'a@test.com',
				name: 'Alice',
			})
		}
	)
)

export default router
