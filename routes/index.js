// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send({ title: 'Express' }); //I changed this
// });

// app.post("/register", (req, res) => {

//   db.query(
//     "INSERT INTO users (username, password, email) VALUES (?,?,?)", 
//     [username, password, email], 
//     (err, result) => {
//     console.log(err);
//   }
//  );
// });

// app.post("/login", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   db.query(
//     "SELECT * FROM users WHERE username = ? AND password = ?", 
//     [username, password], 
//     (err, result) => {
//       if (err) {
//         res.send({ err: err });
//       }

//       if (result.length > 0) {
//         res.send(result);
//       } else {
//         res.send({ message: "Wrong username/password combination!" });
//       }    
//   }
//  );
// });

// app.listen(3001, () => {
//   console.log("running server");
// });



// module.exports = router;
