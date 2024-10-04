import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPages from "./pages/IndexPages";

import Layout from "./layouts/Layout";


const FavoritesPage = lazy(()=>import("./pages/FavoritesPages")) 

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPages/>} index/> //el atributo index indica que es la pagina pincipal
          <Route path="/favoritos" element={
            <Suspense fallback="Cargando...">
              <FavoritesPage/>
            </Suspense>
            }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
