import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    const zip = req.query.zip;
    const country = req.query.country;
    const api = "f72f8608196c78f9b696a0f532e97f24";
    const url = 'https://pro.openweathermap.org/data/2.5/forecast/climate?zip=${zip},${country}&appid=${api}';
    try{
        const result = await axios.get(url);
        res.render("index.ejs", {
            zipcode: zip,
            countrycode: country,
        });
    } catch(error){
        res.status(500).send(error.message);
    }
})

app.listen(port, () => {
    console.log(`Listening to port ${port}.`);
})