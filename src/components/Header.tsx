import { useEffect, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAppStore } from "../store/useAppStore";
// para poder resalta el nav debemos usar el NavLink en vez del link

export default function Header() {
  const { pathname } = useLocation();
  // console.log(pathname);
  const isHome = useMemo(() => pathname === "/", [pathname]);
  // console.log(isHome);

  // Obtiene la función 'fetchCategories' del estado global de la aplicación
  const fecthCategories = useAppStore((state)=> state.fecthCategories)

  // Obtiene la lista actual de 'categories' del estado global de la aplicación
  const categories = useAppStore((state)=> state.categories)
  console.log(categories)

  useEffect(()=> {
    fecthCategories(); 
  },[])
  //React Hook Form

  const { register, handleSubmit } = useForm();

  return (
    <header
      className={isHome ? "bg-header bg-center bg-cover" : "bg-slate-800"}
    >
      <div className="mx auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src="./logo.svg" alt="logotipo" />
          </div>
          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/favoritos"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Favoritos
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form
            className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
            onSubmit={handleSubmit((data) => console.log(data))}
          >
            <div className="space-y-4">
              <label
                htmlFor="ingridient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Nombre o Ingredientes
              </label>

              <input
                id="ingridient"
                type="text"
                className="p-3 w-full rounded focus-outline-none"
                placeholder="Nombre o Ingredientes. Ej: Vodka, Tequila, Cafe"
                {...register("ingredient")}
              />
            </div>

            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Categoria
              </label>

              <select
                id="ingredient"
                className="p-3 w-full rounded focus-outline-none"
                {...register("ingredient")}
              >
                <option>-- Seleccione --</option>
                {categories.drinks.map( category => (
                  <option value="">
                    {category.strCategory}
                  </option>
                ))}
                {/* {categories.drinks.map(category =>(
                  <option 
                    value={category.strCategory}
                    key={category.strCategory}>
                    {category.strCategory}
                  </option>
                ) */}
              </select>

              <input
                type="submit"
                value="Buscar Recetas"
                className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase"
              />
            </div>
          </form>
        )}
      </div>
    </header>
  );
}
