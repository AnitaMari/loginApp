var express = require("express");
var router = express.Router();
const db = require("../model/helper");

router.get("/", (req, res) => {
  res.send("Welcome to the API");
});

router.get("/users", (req, res) => {
  // Send back the full list of items
  db("SELECT * FROM users ORDER BY id ASC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.post("/register", async (req, res) => {
  // Get 'text' and 'complete' from the body
  let { username, password, email } = req.body;
  let sql = `
    INSERT INTO users (username, password, email)
    VALUES ('${username}', '${password}', '${email}' )
  `;

  // Do something "dangerous"...
  try {
    await db(sql);
    // Return updated array of items
    let results = await db("SELECT * FROM users");
    res.send(results.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// router.post("/login", async (req, res) => {
    
//     let { username, password } = req.body;
//     con.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], 
//         (err, result) => {
//             if(err) {
//                 req.setEncoding({ err: err });
//             } else {
//                 if(result.length > 0) { //that means that the user exists in the db
//                     res.send(result);
//             } else {
//                 res.send({ message: "Wrong username or password" })
//             }
//         }
//     }
// )});
    // try {
    //   await db(sql);
    //    let results = await db("SELECT * FROM users");
    //   res.send(results.data);
    // } catch (err) {
    //   res.status(500).send({ error: err.message });
    // }
    
  


module.exports = router;