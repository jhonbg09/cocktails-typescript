import { z } from 'zod'
import { CategoriesAPIResponseSechema, DrinksAPIResponse, SearchFilterSchema } from '../utils/recipes-schema'

export type Categories = z.infer<typeof CategoriesAPIResponseSechema>

export type SearchFilter = z.infer<typeof SearchFilterSchema>

export type Drinks = z.infer<typeof DrinksAPIResponse>