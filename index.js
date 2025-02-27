import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    try{
        const result = await axios.get(url);
        const cocktail = result.data.drinks[0];
        res.render("index.ejs", {cocktail});
    } catch(error){
        res.status(500).send("Error fetching cocktail data");
    }
})

app.listen(port, () => {
    console.log(`Listening to port ${port}.`);
})