import mongoose from 'mongoose';

mongoose.set("strictQuery", false);
const uri = 'mongodb://priority:27017/Leah_Mini_DB';

export default async function connect() {
    // await mongoose.connect('mongodb://priority:27017/?Leah_Mini_DB')
    await mongoose.connect(uri)

};
