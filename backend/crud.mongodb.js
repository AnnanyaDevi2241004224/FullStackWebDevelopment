use("crudDB")
console.log(db);//crudDb
db.createCollection("courses")

//insert
// db.courses.insertOne({
//     name: "Harrys web dev free course",
//     price: 0,
//     assignments: 12,
//     projects: 45
// })
// db.courses.insertMany([
//     {
//       "name": "Python Masterclass",
//       "price": 0,
//       "assignments": 10,
//       "projects": 30
//     },
//     {
//       "name": "JavaScript Basics",
//       "price": 0,
//       "assignments": 8,
//       "projects": 20
//     },
//    ]
//   )

//read
let a=db.courses.find({"price":0}) //db.courses.findOne
console.log(a);
// console.log(a.count());
// console.log(a.toArray());

//update
// db.courses.updateOne({price: 0}, {$set:{price: 100}})

// db.courses.updateMany({price: 0}, {$set:{price: 1000}})

//delete
// db.courses.deleteOne({"price":100})

// db.courses.deleteMany({price: 1000})

// https://www.mongodb.com/docs/manual/reference/operator/query/
