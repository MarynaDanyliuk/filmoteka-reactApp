const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const app = require('./app');

const DB_HOST =
  process.env.DB_HOST ||
  'mongodb+srv://Maryna:jT5X0PMwsIaPNz8o@cluster0.5mowdde.mongodb.net/movies?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log('Database connection successful');
    });
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });


//   _____________________________
// MongoDB

// Filmoteka

// Add new user

// Password auth

// Login: Maryna
// Password: jT5X0PMwsIaPNz8o
