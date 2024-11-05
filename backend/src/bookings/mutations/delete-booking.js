const { bookings } = require('../../data/data');

/*
Example API endpoints for deleting a booking by ID:
  - http://localhost:3000/api/bookings/:id
  - http://localhost:3000/api/bookings/1
*/


/**
 * @swagger
 * /api/bookings/{id}:
 *   delete:
 *     summary: Delete a booking by ID
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the booking
 *     responses:
 *       200:
 *         description: Booking deleted successfully
 */

function deleteBooking(req, res) {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ success: false, message: 'Id is required.' });
    }

    // Find the index of the booking with the specified 'id' by comparing it to each booking's id
    // parseInt(id) is used to ensure 'id' is treated as an integer
    const index = bookings.findIndex(booking => booking.id === parseInt(id));
    
    // Check if the booking with the specified id exists in the 'bookings' array
    if (index === -1) {
        // If not found, return a 404 Not Found error with a message
        return res.status(404).json({ success: false, message: 'Booking not found.' });
    }

    // Remove the booking from the 'bookings' array using its index
    bookings.splice(index, 1);

    res.status(200).json({ success: true, message: 'Booking deleted successfully.' });
}

module.exports = { 
    deleteBooking 
};
