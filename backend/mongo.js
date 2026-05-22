const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = encodeURIComponent(process.argv[2])

const url = `mongodb+srv://FeFe488:${password}@cluster0.ccwjjjo.mongodb.net/TestNoteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const notes = [
  {
    content: 'first test note',
    important: true,
  },
  {
    content: 'second test note',
    important: false,
  },
]

Note.insertMany(notes)
  .then(() => {
    console.log('notes saved')
    return Note.find({})
  })
  .then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })
  .catch(error => {
    console.log('error:', error.message)
    mongoose.connection.close()
  })