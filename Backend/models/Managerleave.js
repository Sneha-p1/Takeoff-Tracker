// models/leave.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ManagerLeaveSchema = new Schema({
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
        default: 'Pending' 
    }
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User', 
    //     required: true
    // }
});

// module.exports = mongoose.model('ManagerLeave', ManagerLeaveSchema);


const ManagerLeaveRequest = mongoose.model('ManagerLeave', ManagerLeaveSchema);

module.exports = ManagerLeaveRequest;