import React, { useEffect, useState, } from 'react';
import Recipe from './Recipe'


const Recipes = () => {
//declaring variables to use
      const APP_ID = "16f6918b";
      const APP_KEY = "b7286fa533fefe8e019698d1c066c7dd";

      const [recipes, setRecipes] = useState([]);

//on page load, do this function
      useEffect(() => { 
        getRecipes();
    }, []);

//fetch recipes and load whenever you get them
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
    }

  return (
    <div className="container mx-auto pb-5">
      <div className="row">
        {recipes.map(recipe => (
          <Recipe 
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          labels={recipe.recipe.healthLabels}
          calories={(Math.floor(recipe.recipe.calories))}
          />
        ))}
      </div>
    </div>
    );
  }

export default Recipes;