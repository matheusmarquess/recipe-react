import { combineReducers } from 'redux';
import RecipeListReducer from './recipelist_reducer';
import RecipeDetailReducer from './recipedetail_reducer';
import RecipeEditReducer from './recipeedit_reducer';


const rootReducer = combineReducers({
  recipes: RecipeListReducer,
  recipe: RecipeDetailReducer,
  recipeMode: RecipeEditReducer
});


export default rootReducer;