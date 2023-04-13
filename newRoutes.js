const express = require('express');
const router = express.Router();

const { 
    getClients,
    createClient, 
    getRooms, 
    createRoom,
    getBookings,
    createBooking,
    getCheckin,
    createCheckin,
    getCheckout,
    createCheckout,
    getChecktime,
    createChecktime,
} = require('./newControllers');

router.route('/clients').get(getClients).post(createClient);
router.route('/rooms').get(getRooms).post(createRoom);
router.route('/bookings').get(getBookings).post(createBooking);
router.route('/bookings').get(getCheckin).post(createCheckin);
router.route('/bookings').get(getCheckout).post(createCheckout);
router.route('/bookings').get(getChecktime).post(createChecktime);



module.exports = router;