const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://ajayajay142018:THszi8tuPRRKzMin@cluster0.6tkhn2s.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`, ()=> {
  console.log('connected to mongodb')
})
