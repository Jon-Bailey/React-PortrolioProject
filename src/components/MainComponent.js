import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Hero from './HeroComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import  Recipes from './RecipesComponent';
import {RECIPES } from '../shared/recipes';


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: RECIPES
        };
    }
    render() {
        return(
            <div>
                <Header/>
                <Switch>
                <Route path='/home' component={Hero} />
                <Route exact path='/recipes' render={() => <Recipes recipes={this.props.recipes} />} />
                <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;