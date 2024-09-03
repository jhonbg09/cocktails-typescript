import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeServices"
import type { Categories, SearchFilter } from "../types"


export type RecipesSliceType = {
    categories: Categories
    fecthCategories: () => Promise<void>
    searchRecipes: (searchFilter:SearchFilter) => Promise<void>
    
}
export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },

    fecthCategories: async () => {
        const categories = await getCategories();
        set({
            categories
        })
    },

    searchRecipes: async (filters) => {
        console.log(filters)
      /*  set({
        
       }) */
     }
})