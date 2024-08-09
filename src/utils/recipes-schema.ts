// Aplicando zod como modo practica, tambien existe la libreria valibot
import { z } from "zod";

export const CategoriesAPIResponseSechema = z.object({
  drinks: z.array(
    z.object({
      strCategory: z.string(),
    })
  ),
});
