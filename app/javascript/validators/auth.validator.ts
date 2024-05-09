import { toTypedSchema } from '@vee-validate/zod';
import { z } from 'zod';

export const validationSchema = toTypedSchema(
  z.object({
    email: z
      .string()
      .min(1, { message: 'This is required' })
      .email({ message: 'Must be a valid email' }),
    password: z.string().min(1, { message: 'This is required' }).min(8, { message: 'Too short' }),
  }),
);
