import { create } from "zustand";
import { createRecipesSlice, RecipesSliceType } from "../store/recipeSlice";
export const useAppStore = create<RecipesSliceType>((...a) => ({
  ...createRecipesSlice(...a),
}));
