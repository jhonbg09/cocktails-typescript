import axios from "axios"
import {CategoriesAPIResponseSechema} from "../utils/recipes-schema"
import { SearchFilter } from "../types";

export async function getCategories() {
    //Manera correcta con https
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    //Manera incorrecta sin https
    // const url = 'www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

    const {data}  = await axios.get(url)
    // console.log(data);
    // De esta manera valida que la data que viene de la api venga con la estructuraa correcta y validar la informacion
    const result = CategoriesAPIResponseSechema.safeParse(data);
    
    if(result.success) {
        return result.data;
    }
}

export async function getRecipes(filters: SearchFilter) {
    console.log(filters);
}