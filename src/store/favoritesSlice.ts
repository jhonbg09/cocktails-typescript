import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { RecipesSliceType, createRecipesSlice } from "./recipeSlice";
import {
  NotificationSliceType,
  createNotificationSlice,
} from "./notificationSlice";

export type FavoritesSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipe: Recipe) => void;
  favoriteExists: (id: Recipe["idDrink"]) => boolean;
  loadFromStorage: () => void;
  
};

export const createFavoritesSlice: StateCreator<
  FavoritesSliceType & RecipesSliceType & NotificationSliceType,
  [],
  [],
  FavoritesSliceType
> = (set, get, api) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    if (get().favoriteExists(recipe.idDrink)) {
      set((state) => ({
        favorites: state.favorites.filter(
          (favorite) => favorite.idDrink !== recipe.idDrink
        ),
      }));
      createNotificationSlice(set, get, api).showNotification({
        text: "Se eliminó de favoritos",
        error: false,
      });
    } else {
      set((state) => ({
        favorites: [...state.favorites, recipe],
      }));
      createNotificationSlice(set, get, api).showNotification({
        text: "Se agrego de favoritos",
        error: false,
      });
    }
    createRecipesSlice(set, get, api).closeModal();

    /*  Guarda los elementos favoritos en el almacenamiento local del navegador (localStorage)
    'favorites' es la clave bajo la cual se almacenarán los datos
    localStorage.setItem(
      "favorites",
       Convierte el arreglo u objeto de favoritos en una cadena de texto JSON
      JSON.stringify(get().favorites)
    );
    Consistencia de los datos localStorage */ 

    localStorage.setItem("favorites", JSON.stringify(get().favorites));
  },
  favoriteExists: (id) => {
    return get().favorites.some((favorite) => favorite.idDrink === id);
  },


 loadFromStorage: () => {
  // Obtiene los datos almacenados bajo la clave 'favorites' en el localStorage
  const storedFavorites = localStorage.getItem("favorites");

  // Verifica si hay datos almacenados
  if (storedFavorites) {
    // Si existen datos, convierte la cadena JSON de vuelta a su formato original (array/objeto)
    // y actualiza el estado con los favoritos almacenados
    set({
      favorites: JSON.parse(storedFavorites),
    });
  }
},
});
