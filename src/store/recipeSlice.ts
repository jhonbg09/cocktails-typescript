import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeServices"

type Category = {}

export type RecipesSliceType = {
    categories: Category[]
    fecthCategories: () => Promise<void>

}
export const createRecipesSlice: StateCreator<RecipesSliceType> = () => ({
    categories: [],
    fecthCategories: async () => {
        getCategories();
    }
})