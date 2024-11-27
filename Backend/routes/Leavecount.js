const express = require('express');
const router = express.Router();
const Leave = require('../models/leave'); // Adjust the path as necessary
const verifyToken = require('../middleware/authMiddleware');

// Route to get leave counts by userName
router.get('/leave-count/:userName', async (req, res) => {
    try {
        const { userName } = req.params;
        console.log("Token verified");
        // leaveType: 'sickLeave'
        const queryCasual = { userName: userName, leaveType: 'Casual Leave' }
        const querySick = { userName: userName, leaveType: 'Sick Leave' }
        const queryAnnual={ userName:userName, leaveType: 'Annual Leave'}
        const sickLeaveCount = await Leave.countDocuments(querySick);
        console.log("trt",sickLeaveCount)
        const casualLeaveCount = await Leave.countDocuments(queryCasual);
        const annualLeaveCount = await Leave.countDocuments(queryAnnual);

        res.json({
            sickLeave: sickLeaveCount,
            casualLeave: casualLeaveCount,
            annualLeave: annualLeaveCount
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching leave counts', error });
    }
});

module.exports = router;
