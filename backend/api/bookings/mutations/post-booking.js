const { BookingModel } = require('../../../models/Booking');

/*
http://localhost:3000/api/bookings

{
    "businessId": "1",
    "date": "2023-01-01",
    "time": "10:00",
    "userEmail": "user@example.com",
    "userName": "User Name",
    "status": "pending"
}
*/

/**
 * @swagger
 * /api/bookings:
 *   post:
 *     summary: Create a new booking
 *     tags: [Bookings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               businessId:
 *                 type: string
 *               date:
 *                 type: string
 *               time:
 *                 type: string
 *               userEmail:
 *                 type: string
 *               userName:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Booking created successfully
 *       400:
 *         description: Invalid input
 */

async function postBooking(req, res) {

    const { businessId, date, time, userEmail, userName, status } = req.body;

    // Check if all required fields are provided
    if (!businessId || !date || !time || !userEmail || !userName || !status) {
        return res.status(400).json({
            success: false,
            message: 'Required fields: businessId, date, time, userEmail, userName, and status.'
        });
    }

    // Check if fields are of the correct type
    if (
        typeof businessId !== 'string' || 
        typeof date !== 'string' || 
        typeof time !== 'string' || 
        typeof userEmail !== 'string' || 
        typeof userName !== 'string' || 
        typeof status !== 'string' || 
        !userEmail.includes('@')
    ) {
        return res.status(400).json({
            success: false,
            message: 'businessId, date, time, userEmail, userName, and status should be strings, and userEmail should contain @.'
        });
    }

    const newBooking = new BookingModel({
        businessId: req.body.businessId,
        date: req.body.date,
        time: req.body.time,
        userEmail: req.body.userEmail,
        userName: req.body.userName,
        status: req.body.status
    });

    try {
        await newBooking.save();
        res.status(201).json({
            success: true,
            message: 'Booking created successfully',
            booking: newBooking
        });
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}

module.exports = {
    postBooking
}
