const express =require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database:"crud"
})
app.get("/form", (req, res) => {
    const sql = 'SELECT * FROM form';
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    });
});



app.listen(8081, () =>{
    console.log("listening");
})