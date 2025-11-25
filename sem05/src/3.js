let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');

let app = express();
let router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

const students = [
    {id: 1, name: "John", age: 15},
    {id: 2, name: "Dan", age: 20},
    {id: 3, name: "Danel", age: 21},
    {id: 4, name: "Danut", age: 24}
]

router.route("/getList").get((req, res) => {
    res.json(students);
})

router.route("/getStudent").get((req, res) => {
    const studentId = req.query["student-id"]; 

    if (!studentId) {
        return res.status(400).json({ message: "Missing student-id" });
    }

    const student = students.find(s => s.id == studentId);

    if (student) {
        return res.json(student); 
    } else {
        return res.status(404).json({ message: "Student not found!" }); 
    }
});


let port = 8000;
app.listen(port);

console.log("API is running!\n");