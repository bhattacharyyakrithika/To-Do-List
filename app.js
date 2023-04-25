const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items = ["buy food", "go for run", "healthy eat", "then repeat"];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {

    const dayObj = date.getDate();
    const day = dayObj.nameOfTheday;
    const salutationMsg = dayObj.message;
    res.render("list", { listTitle: day, newListItems: items, msg: salutationMsg });
});

app.post("/", (req, res) => {

    const item = req.body.newItem;

    if (req.body.addButton == 'Work') {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }

});

app.get("/work", (req, res) => {
    const dayObj = date.getDate();
    const salutationMsg = dayObj.message;
    res.render("list", { listTitle: "Work List", newListItems: workItems, msg: salutaionMsg });
});

app.get("/about", (req, res) => {
    res.render("about");
});

// app.post("/newToDo", (req, res) => {
//     items = [];
//     res.redirect("/");
// });

var listener = app.listen(process.env.PORT || 3000, () => {
    console.log("Server started at", listener.address().port);
});
