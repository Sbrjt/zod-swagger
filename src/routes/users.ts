import { Router } from 'express'
import { openAPIRoute } from 'express-zod-openapi-autogen'
import z from 'zod'

const router = Router()

router.get(
	'/',
	openAPIRoute(
		{
			tag: 'Users',
			summary: 'Get all users',
			query: z.object({
				limit: z.coerce.number().int().min(1).max(100).optional(),
				offset: z.coerce.number().int().min(0).optional(),
			}),
		},
		async (req, res) => {
			res.json({ msg: 'hello' })
		}
	)
)

export default router
