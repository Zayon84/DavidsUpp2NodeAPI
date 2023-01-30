const { response } = require('express')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const https = require('https')

const hero = { heros: [{ "name": "Bruce Wayne", "superheroName": "Batman"},
{ "name": "Peter Parker", "superheroName": "Spiderman"}]}

const game = { games: [{ "name": "Fallout4", "genre": "RPG", "developer": "Bethesda Game Studio"},
{ "name": "Hitman", "genre": "Action", "developer": "IO-Interactive A/S"},
{ "name": "Satisfactory", "genre": "Sim Builder", "developer": "Coffee Stain Studios"},
{ "name": "Valheim", "genre": "Survival", "developer": "Iron Gate AB"},
{ "name": "Mount & Blade: Bannerlord", "genre": "Action", "developer": "TaleWorlds Entertainment"},
{ "name": "They are billions", "genre": "Stratergy", "developer": "Numantian Games"},
{ "name": "Colony Survival", "genre":" Sim Colony", "developer": "Pipliz"},
{ "name": "Eco", "genre": "Simulation", "developer": "Strange Loop Games"}]}

app.get("/joke", (req, res) =>{
    https.get("https://api.chucknorris.io/jokes/random", (response)=>{
        response.on('data', (data) =>{
            res.send(JSON.parse(data))
        })
    }).on("error", (err) =>{
        console.log("There was an error " + err.message)
    })
})

app.get("/ip", (req, res) =>{
    https.get("https://api.ipify.org?format=json", (response)=>{
        response.on('data', (data) =>{
            res.send(JSON.parse(data))
        })
    }).on("error", (err) =>{
        console.log("There was an error " + err.message)
    })
})

app.get("/games", (req, res) =>{
    res.send(game)
})

app.get("/", (req, res) =>{
    // res.send(game)
    res.sendfile(__dirname + "/index.html")
})


app.listen(PORT, () => {
    console.log("Listening to port " + PORT)
})