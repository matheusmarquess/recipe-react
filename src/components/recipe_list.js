import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipes, fetchRecipe, changeRecipeMode } from '../actions/index';
import { Button } from 'semantic-ui-react'

class RecipeList extends Component {
    renderDetail(recipe){
        this.props.fetchRecipe(recipe.id);
        this.props.changeRecipeMode('list');
    }

    renderAddMode(){
        this.props.fetchRecipe('');
        this.props.changeRecipeMode('add');
    }

    renderList(recipe){
        return(
            <li 
                className="list-group-item clearfix" 
                onClick={() => this.renderDetail(recipe)}
                key={recipe.id}>
                <div className="pull-left">
                    <h4>{recipe.name}</h4>
                    <p>{recipe.description}</p>
                </div>
                <span className="pull-right">
                    <img
                        className="img-responsive"
                        alt={recipe.name}
                        style={{maxHeight: 100}}
                        src={recipe.imgPath}/>
                </span>
            </li>
        );
    }

    disableAddButton(){
        if(this.props.recipeMode === 'list' || this.props.recipeMode === 'detail'){
            return false;
        }else{
            return true;
        }
    }
    
    render(){
        if(this.props.recipes){
            return(
                <div className="col-xs-6"  style={{marginTop: 10}}>
                    <div>
                        <ul>
                            {this.props.recipes.map(this.renderList.bind(this))}
                        </ul>
                        <Button 
                            color='blue'
                            onClick={() => this.renderAddMode()}
                            disabled={this.disableAddButton()}>Add</Button>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="col-xs-6"  style={{marginTop: 10}}>
                    NÃO EXISTEM RECEITAS CADASTRADAS
                </div>
            );
        }
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchRecipes, fetchRecipe, changeRecipeMode }, dispatch);
} 

export default connect(null, mapDispatchToProps)(RecipeList);