const express = require('express');
const router = express.Router();
const LeaveRequest = require('../models/leave');
const auth = require('../middleware/authMiddleware');

router.post('/lettersend', async (req, res) => {
    const { userName, leaveType, detail, fromDate, toDate } = req.body;
    console.log("Received a new leave request");

    try {
        const newLeaveRequest = new LeaveRequest({
            userName,
            leaveType,
            detail,
            fromDate: new Date(fromDate),
            toDate: new Date(toDate)
        });

        await newLeaveRequest.save();

        console.log('Leave request saved successfully');
        res.status(201).json({ message: 'Leave request submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


// Fetch leave history for a specific user
router.get('/leaveHistory/:userName', async (req, res) => {
    try {
        console.log("sgdfh")
        // console.log(req.params.userName ,"hj")
        const leaveHistory = await LeaveRequest.find({ userName: req.params.userName });
        console.log(leaveHistory)
        res.status(200).json(leaveHistory);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching leave history', error });
    }
});



// Fetch leave history for all user
router.get('/leaveHistory', async (req, res) => {
    try {
        console.log("sgdfh")
        console.log("hj")
        const leaveHistory = await LeaveRequest.find();
        // console.log(leaveHistory)
        res.status(200).json(leaveHistory);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching leave history', error });
    }
});



//  Approve leave request
router.get('/leaveRequests/:id/approve', async (req, res) => {
    try {
        console.log("ghe")
        const leaveRequest = await LeaveRequest.findById(req.params.id);
        if (!leaveRequest) {
            return res.status(404).json({ message: 'Leave request not found' });
        }
        leaveRequest.status = 'Approved';
        await leaveRequest.save();
        res.json({ message: 'Leave request approved' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Reject leave request
router.get('/leaveRequests/:id/reject', async (req, res) => {
    try {
        const leaveRequest = await LeaveRequest.findById(req.params.id);
        if (!leaveRequest) {
            return res.status(404).json({ message: 'Leave request not found' });
        }
        leaveRequest.status = 'Rejected';
        await leaveRequest.save();
        res.json({ message: 'Leave request rejected' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});







module.exports = router;
