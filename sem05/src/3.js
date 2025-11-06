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
    {id: 1, name: "John", age: 15}
]

router.route("/getList").get((req, res) => {
    res.json(students);
})

router.route("/getStudent").get((req, res) => {
    students.forEach((student) => {
        if (student.id == req.query.id) {
            res.json(student);
        } 
        else {
            res.status(404).json({ message: "Student not found" });
        }
    });

    return res;
})

let port = 8000;
app.listen(port);

console.log("API is running!\n");