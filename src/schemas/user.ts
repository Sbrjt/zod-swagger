import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi'
import { z } from 'zod'

extendZodWithOpenApi(z)

export const UserSchema = z.object({
	id: z.string().uuid(),
	email: z.string().email(),
	name: z.string().min(1),
})
