import mongoose from 'mongoose';

mongoose.set("strictQuery", false);
// const uri = 'mongodb://priority:27017/Leah_Mini_DB';

export default async function connect() {
    await mongoose.connect('mongodb://priority:27017/Leah_Mini_DB').catch(console.log(new Error('error')));
    // await mongoose.connect('mongodb+srv://Mini:mini4151@cluster0.r9plqqb.mongodb.net/Leah_Mini')

    // await mongoose.connect(uri)

};
