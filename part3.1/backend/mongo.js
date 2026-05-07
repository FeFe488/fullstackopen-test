// const mongoose = require('mongoose')


// if (process.argv.length < 3) {
//   console.log('give password as argument')
//   process.exit(1)
// }

// const password = process.argv[2]

// const url = `mongodb+srv://FeFe488:${password}@cluster0.ccwjjjo.mongodb.net/noteApp?appName=Cluster0`

// mongoose.set('strictQuery',false)

// mongoose.connect(url, { family: 4 })

// const noteSchema = new mongoose.Schema({
//   content: String,
//   important: Boolean,
// })

// const Note = mongoose.model('Note', noteSchema) //'Note' wird zu 'notes' als unterornder automatisch von mongo-- klein und plural

// const note= new Note({
  
  
//     content: "four note",
//     important: true,
// })

// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })

// // Note.find({important: true}).then(result=> {
// //   result.forEach(note => {
// //     console.log(note)
// //   })
// //   mongoose.connection.close()
// // })

