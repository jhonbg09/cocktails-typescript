import { z } from 'zod'
import { CategoriesAPIResponseSechema, SearchFilterSchema } from '../utils/recipes-schema'

export type Categories = z.infer<typeof CategoriesAPIResponseSechema>

export type SearchFilter = z.infer<typeof SearchFilterSchema>