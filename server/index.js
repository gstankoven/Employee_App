const express = require('express')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

var corsOptions = {
  origin: '*',
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))


const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'sys'
})


//gets all of the employees in the database
app.get('/api/employees', (req, res, next) => {

  const sql = "SELECT * FROM employees;"
  db.query(sql,(err, result) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.send(JSON.stringify(result))
  })

})


//add a new employee to the database
app.post('/api/employees/add/:id/:first/:last/:job/:city', (req, res, next) => {

  const sql = "INSERT INTO employees (id, first, last, job, city) VALUES (?,?,?,?,?);"
  db.query(sql, [req.params.id, req.params.first, req.params.last, req.params.job, req.params.city],(err, result) => {
      res.status(200).send('OK')
  })


})


//updates an employees data
app.put('/api/employees/update/:first/:last/:job/:city/:id', (req, res, next) => {

  const sql = "UPDATE employees SET first=?, last=?, job=?, city=? WHERE id=?;"
  db.query(sql, [req.params.first, req.params.last, req.params.job, req.params.city, req.params.id],(err, result) => {
      res.status(200).send('OK')
  })
  
})


//deletes an employee from the database
app.delete('/api/employees/delete/:id', (req, res, next) => {

  const sql = "DELETE FROM employees WHERE id=?;"
  db.query(sql, [req.params.id],(err, result) => {
      res.status(200).send('OK')
  })

})

  

app.listen(8080, () => console.log('API running on port 8080'))