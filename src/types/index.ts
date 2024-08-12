import { z } from 'zod'
import { CategoriesAPIResponseSechema } from '../utils/recipes-schema'

export type Categories = z.infer<typeof CategoriesAPIResponseSechema>