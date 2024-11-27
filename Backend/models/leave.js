const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LeaveSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    leaveType: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    },
    fromDate: {
        type: Date,
        required: true
    },
    toDate: {
        type: Date,
        required: true
    },
    postingDate: { 
        type: Date,
        default: Date.now 
       
    },
    status: { 
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'], 
        default: 'Pending' 
    }
   
});


module.exports = mongoose.model('Leave', LeaveSchema);






