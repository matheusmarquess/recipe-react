import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipes, changeRecipeMode } from '../actions/index';
import RecipeList from '../components/recipe_list';
import RecipeDetail from '../components/recipe_detail';
import RecipeEdit from '../components/recipe_edit';

class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: '',
            recipe: '',
            recipeMode: 'list',
        }
        this.isFilled = false;
        this.props.fetchRecipes();
    }

    componentDidUpdate=()=>{
        if(!this.isFilled){
            this.isFilled = !this.isFilled;
            this.updateRecipes(this.props.recipes);
        }
    }

    updateRecipes = (recipes) => {
        this.setState({ recipes });
    }

    toggleIsFilled = () => {
        this.isFilled = false;
    }

    getAllRecipes = () => {
        return this.state.recipes;
    }

    updateRecipe = (recipe, recipeMode) => {
        console.log(recipe)
        console.log(recipeMode)
        this.setState({ recipe, recipeMode })
    }

    render() {
        switch (this.state.recipeMode) {
            case 'list':
                return (
                    <div>
                        <RecipeList recipes={this.state.recipes} recipeMode={this.state.recipeMode} toggleIsFilled={this.toggleIsFilled} updateRecipe={this.updateRecipe} updateRecipes={this.updateRecipes} getAllRecipes={this.getAllRecipes} />
                        <RecipeDetail recipe={this.state.recipe} toggleIsFilled={this.toggleIsFilled} updateRecipe={this.updateRecipe} updateRecipes={this.updateRecipes} getAllRecipes={this.getAllRecipes} />
                    </div>
                );
            case 'edit':
                return (
                    <div>
                        <RecipeList recipes={this.state.recipes} recipeMode={this.state.recipeMode} />
                        <RecipeEdit recipe={this.state.recipe} toggleIsFilled={this.toggleIsFilled} />
                    </div>
                );
            case 'add':
                return (
                    <div>
                        <RecipeList recipes={this.state.recipes} recipeMode={this.state.recipeMode} />
                        <RecipeEdit toggleIsFilled={this.toggleIsFilled} />
                    </div>
                );
            default:
                return (
                    <div>
                        Erro 404
                    </div>
                );
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchRecipes, changeRecipeMode }, dispatch);
}

function mapStateToProps(state) {
    return { recipes: state.recipes, recipeMode: state.recipeMode, recipe: state.recipe };
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);