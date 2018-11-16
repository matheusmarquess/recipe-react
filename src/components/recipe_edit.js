import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  changeRecipeMode, addRecipe, fetchRecipe, fetchRecipes } from '../actions/index';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

class RecipeEdit extends Component {

    constructor(props){
        super(props);

        this.state = { 
            name: this.props.recipe ? this.props.recipe.name : '', 
            description: this.props.recipe ? this.props.recipe.description : '',
            imgPath: this.props.recipe ? this.props.recipe.imgPath : ''
        }
    }


    submitForm(){
        const id = this.props.recipe ? this.props.recipe.id : null;
        this.props.addRecipe(id,this.state,this.reloadRecipes);
    }

    reloadRecipes = (response) => {
        this.props.fetchRecipe(null);
        this.props.fetchRecipes();
        this.props.changeRecipeMode('list');
        alert(response.data.mensagem);
    }

    render(){
        return(
            <div className="col-xs-6" style={{marginTop: 10}}>
                <Form onSubmit={this.submitForm.bind(this)}>
                    <Form.Group widths='equal'>
                        <Form.Field
                            id='form-input-control-first-name'
                            control={Input}
                            label='Recipe Name'
                            placeholder='Recipe name'
                            value={this.state.name}
                            onChange={(event) => this.setState({name: event.target.value})}
                        />
                        <Form.Field
                            id='form-input-control-last-name'
                            control={Input}
                            label='Image Path'
                            placeholder='Image Path'
                            value={this.state.imgPath}
                            onChange={(event) => this.setState({imgPath: event.target.value})}
                        />
                    </Form.Group>
                    <img
                            src={ this.state.imgPath }
                            alt=''
                            className="img-responsive"
                            style={{maxheight: 50}}/>
                    <Form.Field
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        label='Description'
                        placeholder='Description'
                        value={this.state.description}
                        onChange={(event) => this.setState({description: event.target.value})}
                    />
                    <Form.Field
                        id='form-button-control-public'
                        control={Button}
                        content='Confirm'
                    />
                </Form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({  changeRecipeMode, addRecipe, fetchRecipe, fetchRecipes }, dispatch);
} 

export default connect(null, mapDispatchToProps)(RecipeEdit);