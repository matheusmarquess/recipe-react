import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { deleteRecipe, fetchRecipes, changeRecipeMode, fetchRecipe } from '../actions/index';

class RecipeDetail extends Component {
    deleteItem(recipe){
        this.props.deleteRecipe(recipe.id,this.reloadRecipes);
    }

    reloadRecipes = (response) => {
        this.props.fetchRecipe(null);
        this.props.fetchRecipes();
        this.props.changeRecipeMode('list');
        alert(response.data.mensagem);
    }

    editItem(){
        this.props.changeRecipeMode('edit');
    }

    render(){
        if(this.props.recipe.length !== 0){
            return(
                <div className="col-xs-6">
                    <div className="row">
                        <div style={{marginTop: 10}}>
                            <img
                                src={ this.props.recipe.imgPath}
                                alt={ this.props.recipe.name }
                                className="img-responsive"
                                style={{maxheight: 300}}/>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                        <h1>{ this.props.recipe.name }</h1>
                        </div>
                    </div>
                    <div className="row">
                        <Dropdown text='Manage Recipe'>
                            <Dropdown.Menu>
                                <Dropdown.Item 
                                    text='Edit'
                                    onClick={() => this.editItem(this.props.recipe)} />
                                <Dropdown.Item 
                                    text='Delete'
                                    onClick={() => this.deleteItem(this.props.recipe)} />
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            );
        }else{
            return(
                <div className="col-xs-6">
                    <div className="row" style={{marginTop: 30, fontSize: 25}}>
                        Selecione uma receita!!
                    </div>
                </div>
            );
        }
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ deleteRecipe, fetchRecipes, changeRecipeMode, fetchRecipe }, dispatch);
} 

export default connect(null,mapDispatchToProps)(RecipeDetail);
