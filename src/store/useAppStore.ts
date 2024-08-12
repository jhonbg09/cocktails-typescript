import { create } from "zustand";
import { createRecipesSlice, RecipesSliceType } from "../store/recipeSlice";
import {devtools} from "zustand/middleware"

export const useAppStore = create<RecipesSliceType>()(devtools((...a) => ({
  ...createRecipesSlice(...a),
})));
