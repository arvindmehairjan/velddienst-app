import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Employee = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    employeeId: {
        type: Number
    },
    group: {
        type: Number
    }
});

export default mongoose.model('Employee', Employee);