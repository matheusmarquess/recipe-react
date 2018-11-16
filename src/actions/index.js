import Axios from "axios";

export const FETCH_RECIPE = 'FETCH_RECIPE';
export const FETCH_RECIPES = 'FETCH_RECIPES';
export const MODE_RECIPE = 'MODE_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const CLEAR_RECIPE = 'CLEAR_RECIPE';
export const APP_NOTIFICATION = 'APP_NOTIFICATION';
const URL = "https://localhost:44374/api/";

export function fetchRecipe(id) {
    if(id || id === 0){
        return{
            type: FETCH_RECIPE,
            payload: Axios.get(URL+"values/"+id)
        };
    }else{
        return{
            type: CLEAR_RECIPE,
            payload: []
        };
    }
}

export function fetchRecipes() {    
    return{
        type: FETCH_RECIPES,
        payload: Axios.get(URL+"values")
    };
}

export function deleteRecipe(id, callback) {
    return{
        type: APP_NOTIFICATION,
        payload: Axios.delete(URL+"values/"+id).then( (response) => callback(response))
    };
}

export function changeRecipeMode(mode) {
    return{
        type: MODE_RECIPE,
        payload: mode
    };
}

export function addRecipe(id, recipe, callback) {
    if(id || id === 0){
        return{
            type: APP_NOTIFICATION,
            payload: Axios.put(URL+"values/",{
                Id: id,
                Name: recipe.name,
                Description: recipe.description,
                ImgPath: recipe.imgPath
            }).then( (response) => callback(response)
            )
        };
    }else{
        return{
            type: APP_NOTIFICATION,
            payload: Axios.post(URL+"values",
                {
                    Id: 0,
                    Name: recipe.name,
                    Description: recipe.description,
                    ImgPath: recipe.imgPath
                }
            ).then( (response) => callback(response)
            )
        };
    }
}
