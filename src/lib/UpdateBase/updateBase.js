import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://zirkanew82:OpMUpP1dvcRQVaON@cluster0.nn973.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully!'))
  .catch(err => console.error('Database connection error:', err));

const oldSchema = new mongoose.Schema({
  'Date start': Date,
  'Date end': Date,
  'Year': Number,
  'Month': Number,
  'Power plant type': String,
  'Generated electricity amount, million kWh': Number
});

const oldCollection = mongoose.model('OldCollection', oldSchema);

const newSchema = new mongoose.Schema({
  dateStart: Date,
  dateEnd: Date,
  year: Number,
  month: Number,
  powerPlantType: {
    type: String,
    enum: ['Biomass', 'Biogas', 'Solar', 'Wind', 'Hydro'],
    default: 'personal'
  },
  generatedElectricityAmount: Number
});

const newCollection = mongoose.model('NewCollection', newSchema);

async function updateData() {
  const documents = await oldCollection.find();

  const updatedDocuments = documents.map(doc => ({
    dateStart: doc['Date start'],
    dateEnd: doc['Date end'],
    year: doc['Year'],
    month: doc['Month'],
    powerPlantType: doc['Power plant type'],
    generatedElectricityAmount: doc['Generated electricity amount, million kWh']
  }));

  await newCollection.insertMany(updatedDocuments);
  console.log('Дані успішно оновлені!');

  await oldCollection.deleteMany();
}

updateData().catch(err => console.error(err)).finally(() => mongoose.connection.close());

