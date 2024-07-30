import express from "express";

const controller = require("../controller/controller");
const router = express.Router();

router.post('/searchCocktailIdea', controller.searchCocktailIdea);

module.exports = router;