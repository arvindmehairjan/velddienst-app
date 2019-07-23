import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Employee = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    address: {
        type: String
    },
    telephone: {
        type: Number
    },
    email: {
        type: String
    },
    employeeId: {
        type: Number
    },
    group: {
        type: Number
    },
    verspreiding: {
        type: Number
    },
    film: {
        type: Number
    },
    nabezoek: {
        type: Number
    },
    bijbelstudie: {
        type: Number
    },
    maand: {
        type: String
    },
    overige: {
        type: String
    }
});

export default mongoose.model('Employee', Employee);