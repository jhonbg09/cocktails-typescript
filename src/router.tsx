import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPages from "./pages/IndexPages";
import FavoritesPages from "./pages/FavoritesPages";
import Layout from "./layouts/Layout";
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPages/>} index/> //el atributo index indica que es la pagina pincipal
          <Route path="/favoritos" element={<FavoritesPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
