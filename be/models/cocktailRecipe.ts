import { Schema, model } from 'mongoose';
// Models are fancy constructors compiled from Schema definitions
// Document is instance of its Model

const CocktailRecipeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  ingredients: { // alphabetical
    type: [String],
    required: true
  },
  instructions: {
    type: String,
    required: true
  },
  image: {
    type: String
  }
});

const Cocktail = model('cocktail', CocktailRecipeSchema);

export default Cocktail;
