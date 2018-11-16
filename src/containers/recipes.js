import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipes, changeRecipeMode } from '../actions/index';
import RecipeList from '../components/recipe_list';
import RecipeDetail from '../components/recipe_detail';
import RecipeEdit from '../components/recipe_edit';

class Recipes extends Component {
    componentDidMount(){
        this.props.fetchRecipes();
        this.props.changeRecipeMode('list');
    }

    render(){
        switch(this.props.recipeMode){
            case 'list':
                return(
                    <div>
                        <RecipeList recipes={this.props.recipes} recipeMode={this.props.recipeMode}/>
                        <RecipeDetail recipe={this.props.recipe}/>
                    </div>
                );
            case 'edit':
                return(
                    <div>
                        <RecipeList recipes={this.props.recipes} recipeMode={this.props.recipeMode}/>
                        <RecipeEdit recipe={this.props.recipe}/>
                    </div>
                );
            case 'add':
                return(
                    <div>
                        <RecipeList recipes={this.props.recipes} recipeMode={this.props.recipeMode}/>
                        <RecipeEdit/>
                    </div>
                );
            default:
                return(
                    <div>
                        Erro 404
                    </div>
                );
        }
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchRecipes, changeRecipeMode }, dispatch);
} 

function mapStateToProps(state){
    return {recipes: state.recipes, recipeMode: state.recipeMode, recipe: state.recipe};
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);