import mongoose from 'mongoose';

mongoose.set("strictQuery", false);

export default async function connect() {
    await mongoose.connect("mongodb://priority:27017");
};