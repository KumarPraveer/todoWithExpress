const express = require("express");
// const path = require("path");


const app = express();
const port = 5555;

// const publicDirectory = path.join(__dirname + '/public');
// app.use(express.static(publicDirectory));

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');

let tasks = [];

app.get("/", (req, res) => {
    res.render('home', {
        title: "Todo List",
        tasks
    });
})


app.post("/", (req, res) => {
    const newTask = req.body.newTask;
    tasks.push(newTask);
    res.redirect('/');
})

app.listen(port, () => {
    console.log(`Server is up at the port ${port}`);
})