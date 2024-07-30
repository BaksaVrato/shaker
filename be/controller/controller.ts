import { Request, Response } from 'express';
import mongoose from 'mongoose';
import CocktailRecipe from '../models/cocktailRecipe';

const searchCocktailIdea = async (req: Request, res: Response) => {
  
  const ingredients = req.body.ingredients;
  console.log(ingredients);

  if (!ingredients) {
    return res.status(400).json({ error: "No ingredients provided" });
  };

  try {
    // ingredients in database are sorted alphabetically
    const filteredCocktails = await CocktailRecipe.aggregate([
      {
        $match: {
          ingredients: { $in: ingredients }
        }
      },
      {
        $addFields: {
          ingredientCount: {
            $size: {
              $filter: {
                input: '$ingredients',
                as: 'ingredient',
                cond: { $in: ['$$ingredient', ingredients] }
              }
            }
          }
        }
      },
      {
        $match: {
          $expr: { $eq: ['$ingredientCount', { $size: '$ingredients' }] }
        }
      }
    ]);

    if (filteredCocktails.length === 0) {
      return res.status(404).json({ error: "Cocktails not found" });
    }; 

    console.log(filteredCocktails);

    return res.status(200).json(filteredCocktails);

  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  searchCocktailIdea,
}