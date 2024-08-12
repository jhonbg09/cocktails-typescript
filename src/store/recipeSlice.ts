import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeServices"
import type { Categories } from "../types"


export type RecipesSliceType = {
    categories: Categories
    fecthCategories: () => Promise<void>

}
export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    fecthCategories: async () => {
        const categories = await getCategories();
        // console.log(Categories);
        set({
            categories
        })
    }
})