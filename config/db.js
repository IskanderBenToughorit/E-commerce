const mongoose = require('mongoose');
require('dotenv').config({ path: './config.env' }); 
const uri = process.env.MONGO_URI; 
if (!uri) {
  console.error('Erreur : MONGO_URI n\'est pas défini dans MONGO-URI.env');
  process.exit(1); // Arrête le script si MONGO_URI est introuvable
}

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected...');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
