import mongoose from "mongoose";

const Schema = mongoose.Schema;
const VolunteerSchema = new Schema({
    id: String,
    firstName: String,
    lastName: String,
    phone: String,
    volunteeringType: Int16Array
});

const VolunteerModel = mongoose.model("volunteers", VolunteerSchema);
export default VolunteerModel;